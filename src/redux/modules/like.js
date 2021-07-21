import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import moment from "moment";


// actions
const LIKE_TOGGLE = "LIKE_TOGGLE";


//action creator
const likeToggle = createAction(LIKE_TOGGLE, (post_id, heartLike = null) => ({post_id, heartLike}));


const initialState = {
    heartLike: [],
}

const likeToggleDB = (id, heartLike = false) => {
    return function (dispatch, getState, { history }) {

        // post를 찾기 위해, 배열의 몇 번째에 있나 확인
        const _post_idx = getState().post.list.findIndex((p) => p.postId === id);    
        // 확인한 인덱스로 수정하려는 게시글의 수정 전 정보를 가져오기
        const _post = getState().post.list[_post_idx];
        // user 정보 가져오기(nickname없어서 이메일로 확인)
        const user_id = getState().user.user.email;
    
        // 좋아요한 상태라면 해제하기
        // 해제 순서
        // 1. likeDB에서 해당 데이터를 지우고,
        // 2. postDB에서 like_cnt를 -1해주기
        if (_post.heartLike){
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

            })
        }
    };
};


// reducer
export default handleActions({
   [LIKE_TOGGLE]: (state, action) => produce(state, (draft) => {
    //    draft.heartLike.unshift(action.payload.heartLike);

       // 배열에서 몇 번째에 있는 지 찾은 다음, heartLike action에서 가져온 값으로 바꾸기
       let idx = draft.list.findIndex((p) => p.postId === action.payload.post_id);
        
       draft.list[idx].heartLike = action.payload.heartLike;
    }) 
}, initialState
)

const actionCreators = {
    likeToggleDB,
}