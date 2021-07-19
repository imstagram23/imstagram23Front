import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import moment from "moment";
// 업로드 후 프리뷰 이미지 없애주기 위해
import { actionCreators as imageActions } from "./image";

// actions
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";

//action creator
const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));

const initialState = {
    list: [],
    is_loading: false,
    preview: null,
}

// 게시글 하나의 정보(Post의 defaultProps)
const initialPost = {
    // id는 자동으로 생성되도록 해놨음(???어디서???)
    // id: 0,
    // 아래 두개는 user 리덕스에서 가져올 것임
    // writer: "user_name",
    // user_profile: "https://img.insight.co.kr/static/2018/06/08/700/oaytfz0m123a56r373eh.jpg",
    image_url: "https://cdn.vox-cdn.com/thumbor/M2rjDALxvNDv3yqeYuIdL3spabo=/0x0:2000x1333/1200x675/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/65939918/171109_08_11_37_5DS_0545__1_.0.jpg",
    contents: "NewYork NewYork",
    comment_cnt: 10,
    insert_dt: moment().format("YYYY년 MM월 DD일 hh:mm:ss"),
};

// 다 가지고 올거니까 조건 걸게 없으니 일단 공란(심화3-3 12:~)
// 데이터 형식 맞추기는 Object.keys()사용(심화3-3 15:~)
// 왜? 키 값만 뽑아서 배열로 만들어 주려고. 왜 배열로? reduce쓰려고 
const getPostDB = () => {
    return function (dispatch, getState, {history}){
        axios({
            method: 'get',
            url: 'http://3.36.50.96/api/post',
            // data: {},
            // headers: { 
            //     "Content-Type": "multipart/form-data",
            //     "Access-Control-Allow-Origin": "*",
            // },
        }).then((response) => {
            console.log(response);
            console.log(response.data);
            dispatch(setPost(response.data));

        }).catch(err => {
            console.log("에러? 아니져~ 연봉 올라가는 소리~");
        })
    };
}


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

        // FormData형식으로 데이터 넘겨주기
        const formData = new FormData();
        // formData.append(name, value);
        // name은 value에 포함되는 데이터 필드 이름, value는 필드값
        formData.append('content', contents);
        formData.append('image', image);
        // formadata 내용 확인(그냥 콘솔로그론 안보임)
        for (let key of formData.keys()) { console.log(key); }
        for (var value of formData.values()) { console.log(value); }  

        axios({
            method: 'post',
            url: 'http://3.36.50.96/api/post',  //??똑같음?? 메소드가 달라서!
            // url: 'http://localhost:3001/posts',  //일단 로컬에서 제이슨서버 만들어서 돌려보기
            data: formData,
            headers: { 
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
            },
        }).then((response) => {
            console.log(response);
            console.log(response.data);
            // 서버에서 데이터 전체 내려주면 res.data.~하면 되지만
            // 전체 데이터를 내려주지 않으면 파라미터값을 그대로 가져온다.
            // 이미지를 http://도메인주소+res.data.~로 넣어줘야 한다.
            console.log(response.data.imageUrl);

            const new_post = {
                id: response.data.postId,
                contents: response.data.content,
                // 이미지 주소 넣는 방법
                image_url: response.data.imageUrl,
                // 이미지 'http://wanos.shop/' + 
                // 전체 데이터 내려받을때에 한가지(e.g.이미지)만 빼내기 위해선 위의내용 제하기
                createdAt: moment().format("YYYY년 MM월 DD일 hh:mm"),
            }

            // 서버에 데이터 잘 들어갔는지 확인 후 리덕스에 추가
            dispatch(addPost(new_post));
            // 다음에 글 작성할 떄 이전 이미지 안보이게 하려고 근데 왜 보이지?????
            dispatch(imageActions.setPreview(null));
            history.replace("/");

        }).catch((err) => {
            window.alert("포스트 작성에 문제가 있어요!", err);
            console.log("에러? 아니져~ 연봉 올라가는 소리~", err);
        }).catch((err) => {
            window.alert("이미지 업로드에 문제가 있어요!", err);
            console.log("에러? 아니져~ 연봉 올라가는 소리~", err);
        })
    }
} 

const deletePostDB = (id) => {
    return function (dispatch, getState, {history}){

        axios({
            method: 'delete',
            url: `http://3.36.50.96/api/post/${id}`,
            // data: formData,
            // headers: { 
            //     "Content-Type": "multipart/form-data",
            //     "Access-Control-Allow-Origin": "*",
            // },
        }).then((response) => {
            console.log(response);
            console.log(response.data);
            dispatch(deletePost(response.data.postId));
            // 새로고침 해야만 삭제 반영됨. 오류다오류
        }).catch((err) => {
            window.alert("포스트 삭제에 문제가 있어요!", err);
            console.log("에러? 아니져~ 연봉 올라가는 소리~", err);
        })
    }
}

// reducer
export default handleActions({
    [SET_POST]: (state, action) => produce(state, (draft) => {
        draft.list.push(...action.payload.post_list);
    }),

    [ADD_POST]: (state, action) => produce(state, (draft) => {
        // 배열 제일 앞으로 붙이기
        draft.list.unshift(...action.payload.post)
    }),
    [DELETE_POST]: (state, action) => produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);
        console.log(idx);
    })
}, initialState
);

// action creator export 묶어서 내보내자
const actionCreators = {
    setPost,
    addPost,
    getPostDB,
    addPostDB,
    deletePostDB,
};
  
  export { actionCreators };