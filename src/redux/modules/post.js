import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import moment from "moment";
// 업로드 후 프리뷰 이미지 없애주기 위해
import { actionCreators as imageActions } from "./image";

// actions
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";
const LOADING = "LOADING";
const LIKE_TOGGLE = "LIKE_TOGGLE";


//action creator
const setPost = createAction(SET_POST, (post_list, paging, pageNum) => ({post_list, paging, pageNum}));
const addPost = createAction(ADD_POST, (post) => ({post}));
const editPost = createAction(EDIT_POST, (post_id, content) => ({post_id, content}));
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));
const loading = createAction(LOADING, (is_loading) => ({ is_loading }));
const likeToggle = createAction(LIKE_TOGGLE, (post_id, heartLike) => ({post_id, heartLike}));


const initialState = {
    list: [],
    preview: null,
    // 무한스크롤 위해
    paging: { prePost: null, pageNum: false},
    is_loading: false,
    // 좋아요
    heartLike: false,
}

// 게시글 하나의 정보(Post의 defaultProps)
const initialPost = {
    writer: "Robert Downey Jr.",
    user_profile: "https://img.insight.co.kr/static/2018/06/08/700/oaytfz0m123a56r373eh.jpg",
    image_url: "https://cdn.vox-cdn.com/thumbor/M2rjDALxvNDv3yqeYuIdL3spabo=/0x0:2000x1333/1200x675/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/65939918/171109_08_11_37_5DS_0545__1_.0.jpg",
    content: "NewYork NewYork",
    heartLike: false,
    totalLike: 0,
    totalComment: 0,
    checkMember: false,
    insert_dt: moment().format("YYYY년 MM월 DD일 hh:mm:ss"),
};

// 다 가지고 올거니까 조건 걸게 없으니 일단 공란(심화3-3 12:~)
// 데이터 형식 맞추기는 Object.keys()사용(심화3-3 15:~)
// 왜? 키 값만 뽑아서 배열로 만들어 주려고. 왜 배열로? reduce(누산)쓰려고 
const getPostDB = (pageNum) => {
    return function (dispatch, getState, {history}){

        let _paging = getState().post.paging;
        // start값은 있지만 next값이 없으면 다음목록 없으므로 아래 로직 실행할 필요 없음
        if(_paging.prePost && !_paging.pageNum){
            return;
        }

        dispatch(loading(true));

       // 원본(새로고침해야 피드가 보임? 왜 또 잘 보임??? -> 토큰의 expire문제였음)
        axios({
            method: 'get',
            url: 'http://3.36.50.96/api/post/',
            // url: `http://3.36.50.96/api/post/page/${pageNum}`,
            // data: {},
            headers: { 
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${sessionStorage.getItem("token")};`,
            },
        }).then((response) => {
            // console.log(response);
            // console.log(response.data);

            let paging = {
                prePost: response.data.prePost,
                next: response.data.length,
                // next: response.data.length === size + 1 ? response.data[response.data.length - 1] : null,
                // size: size,
            }
            // 서버가 is_next주면 필요없음
            // response.data.pop();

            dispatch(setPost(response.data, paging));

        }).catch(err => {
            // console.log("에러? 아니져~ 연봉 올라가는 소리~");
        })
    };
};


// 서버에 새 포스트 저장하는 함수
// 추가할 데이터 모양새를 먼저 파악. 모양새대로 추가 할것임
// 유저정보는 이미 리덕스에 있음 
// 카드를 하나 추가할 때, 들어가야할(필요한) 데이터를 파라미터로 넣어주기
// 이 값들은 카드를 추가하는 곳인 PostWrite에도 동일하게 들어가야함
const addPostDB = (contents, image) => {
    return function (dispatch, getState, {history}){

        // VALIDATION 
        // 이미지 모듈에서 이미지 가져오기
        const _image = getState().image.preview;
        // 만약 이미지가 없으면 경고를 띄워주고 업로드 막기
        if (!_image) {
        window.alert("이미지가 필요해요!");
        return;
        }

        // const imageUploading = getState().image.uploading;

        // FormData형식으로 데이터 넘겨주기
        const formData = new FormData();
        // formData.append(name, value);
        // name은 value에 포함되는 데이터 필드 이름, value는 필드값
        formData.append('content', contents);
        formData.append('image', image);
        // formadata 내용 확인(그냥 콘솔로그론 안보임)
        // for (let key of formData.keys()) { console.log(key); }
        // for (var value of formData.values()) { console.log(value); }

        axios({
            method: 'post',
            url: 'http://3.36.50.96/api/post',  //??똑같음?? 메소드가 달라서!
            // url: 'http://localhost:3001/posts',  //일단 로컬에서 제이슨서버 만들어서 돌려보기
            data: formData,
            headers: { 
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${sessionStorage.getItem("token")};`,
            },
        }).then((response) => {
            // console.log(response);
            // console.log(response.data);
            // 서버에서 데이터 전체 내려주면 res.data.~하면 되지만
            // 전체 데이터를 내려주지 않으면 파라미터값을 그대로 가져온다.
            // 이미지를 http://도메인주소+res.data.~로 넣어줘야 한다.
            // console.log(response.data.imageUrl);

            const new_post = {
                // 키값은 logger에서 next state에서 post의 list의 키값(필드값?)으로 맞춰 줘야함
                // 안그러면 defaultProps값 들어가고 새로고침 해야만 제값 들어감
                postId: response.data.postId,
                writer: response.data.writer,
                content: response.data.content,
                totalComment: 0,
                heartLike: false,
                totalLike: 0,
                checkMember: true,
                imageUrl: response.data.imageUrl,
                createdAt: moment().format("YYYY년 MM월 DD일 hh:mm"),
            }
            // console.log(new_post);            

            // 서버에 데이터 잘 들어갔는지 확인 후 리덕스에 추가
            dispatch(addPost(new_post));
            // 다음에 글 작성할 떄 이전 이미지 안보이게 하려고 근데 왜 보이지????? 다시 안보임??? ???
            dispatch(imageActions.setPreview(null));
            history.replace('/');
            // history.replace('/')와 window.location.replace('/')의 차이?
            // history는 주소가 바뀐것처럼 보여주는 렌더링, window는 사이트 자체가 재렌더링

            
        }).catch((err) => {
            window.alert("포스트 작성에 문제가 있어요!", err);
            // console.log("에러? 아니져~ 연봉 올라가는 소리~", err);
        }).catch((err) => {
            window.alert("이미지 업로드에 문제가 있어요!", err);
            // console.log("에러? 아니져~ 연봉 올라가는 소리~", err);
        })
    }
} 

const editPostDB = (id, content) => {
    return function (dispatch, getState, {history}){

        // 프리뷰 이미지 가져오기
        const _image = getState().image.preview;
        // 게시글 하나의 정보 찾기(수정하려는 게시글이 게시글 목록에서 몇 번째에 있나 확인)
        const _post_idx = getState().post.list.findIndex((p) => p.postId === id);
        // 위의 인덱스로 수정하려는 게시글의 수정 전 정보를 가져오기
        const _post = getState().post.list[_post_idx];
        // console.log(_post)

        let _edit = JSON.stringify(content);
          
        // console.log(_edit);
        // // object
        // console.log(typeof _edit)

        axios({
            method: 'put',
            url: `http://3.36.50.96/api/post/${id}`,
            data: { content: _edit },
            // data: { ..._edit },
            headers: { 
                // "Content-Type": "multipart/form-data",
                "Content-Type": "application/json; charset=utf-8",
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${sessionStorage.getItem("token")};`,
            },
        }).then((response) => {
            // console.log(response);
            // console.log(response.data);
            const edit_post = {
                content: content,
            };
            // console.log(edit_post);            

            window.alert("게시물을 수정 하시겠습니까?");
            dispatch(editPost(id, edit_post));
            history.replace('/');
        }).catch((err) => {
            window.alert("내 게시글만 수정할 수 있어요!", err);
            // console.log("에러? 아니져~ 연봉 올라가는 소리~", err);
        })
    }
}

const deletePostDB = (id) => {
    return function (dispatch, getState, {history}){

        axios({
            method: 'delete',
            url: `http://3.36.50.96/api/post/${id}`,
            // data: { postId: id },
            headers: { 
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${sessionStorage.getItem("token")};`,
            },
        }).then((response) => {
            // console.log(response);
            // console.log(response.data);
            window.alert("게시물을 삭제 하시겠습니까?");
            dispatch(deletePost(response.data.postId));

        }).catch((err) => {
            window.alert("내 게시글만 지울 수 있어요!", err);
            // console.log("에러? 아니져~ 연봉 올라가는 소리~", err);
        })
    }
}      

const likeToggleDB = (id, heartLike = false, totalLike) => {
    return function (dispatch, getState, { history }) {

        // post를 찾기 위해, 배열의 몇 번째에 있나 확인
        const _post_idx = getState().post.list.findIndex((p) => p.postId === id);    
        // 확인한 인덱스로 수정하려는 게시글의 수정 전 정보를 가져오기
        const _post = getState().post.list[_post_idx];
        // console.log(_post)
        // user 정보 가져오기(nickname없어서 이메일로 확인)
        // const user_id = getState().user.user.email;           
        
        axios({
            method: 'post',
            url: `http://3.36.50.96/api/like/${id}`,
            // data: { postId: id },
            headers: { 
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${sessionStorage.getItem("token")};`,
            },
        }).then((response) => {
            // console.log(response);
            // console.log(response.data);

            // 좋아요한 상태라면 해제
            if (_post.heartLike){
                const new_like = {
                heartLike: false,
                totalLike: _post.totalLike - 1,
                }
                dispatch(likeToggle(id, new_like));
            }else{
            // 좋아요 해제 상태라면 좋아요 하기
                const new_like = {
                heartLike: true,
                totalLike: _post.totalLike + 1,
                }
                dispatch(likeToggle(id, new_like));
            }
        })
    };
};


// reducer
export default handleActions({
    [SET_POST]: (state, action) => produce(state, (draft) => {
        draft.list.push(...action.payload.post_list);
        draft.paging = action.payload.paging;
        draft.is_loading = false;
    }),

    [ADD_POST]: (state, action) => produce(state, (draft) => {
        // 배열 제일 앞으로 붙이기
        draft.list.unshift(action.payload.post);
        draft.preview = null;
    }),

    [EDIT_POST]: (state, action) => produce(state, (draft) => {
        // findIndex는 배열을 뒤져서 조건을 주면, 그에 맞는 애의 인덱스 번호를 준다.
        let idx = draft.list.findIndex((p) => p.postId === action.payload.post_id);
        // console.log(idx);
        draft.list[idx].content = action.payload.content.content;
    }),

    [DELETE_POST]: (state, action) => produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.postId === action.payload.post_id);
        // console.log(idx);

        if (idx !== action.payload.post_id){
            draft.list.splice(idx, 1);
        }
    }),

    [LOADING]: (state, action) => produce(state, (draft) => {
        draft.is_loading = action.payload.is_loading;
        // export해 줄 필요 없음. 게시글 가져오기 시작할떄 true, false
    }),

    [LIKE_TOGGLE]: (state, action) => produce(state, (draft) => { 
        // 배열에서 몇 번째에 있는 지 찾은 다음, heartLike action에서 가져온 값으로 바꾸기
        let idx = draft.list.findIndex((p) => p.postId === action.payload.post_id);
        draft.list[idx].heartLike = action.payload.heartLike.heartLike;
        draft.list[idx].totalLike = action.payload.heartLike.totalLike;
     }) 
}, initialState
);



// action creator export 묶어서 내보내자
const actionCreators = {
    setPost,
    addPost,
    editPost,
    getPostDB,
    addPostDB,
    editPostDB,
    deletePostDB,
    likeToggleDB,
};
  
export { actionCreators };