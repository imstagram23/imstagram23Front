import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// actions
const SET_POST = "SET_POST";
const ADD_POST = "ADD_POST";

//action creator
const setPost = createAction(SET_POST, (post_list) => ({post_list}));
const addPost = createAction(ADD_POST, (post) => ({post}));

const initialState = {
    list: [],
}

// 게시글 하나의 정보
const initialPost = {
    user_info: {
        user_name: "user_name",
        user_profile: "https://image5jvqbd.fmkorea.com/files/attach/new/20200816/486616/657118072/3039288745/99b983892094b5c6d2fc3736e15da7d1.jpeg",
      },
      image_url: "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile5.uf.tistory.com%2Fimage%2F1115E239507C23380B4840",
      contents: "어쩌고 저쩌고",
      deleteButton: "delete",
      editButton: "edit",
      comment_cnt: 10,
};

// reducer
export default handleActions(
    {
        [SET_POST]: (state, action) => produce(state, (draft) => {
            draft.list.push(...action.payload.post_list);

        }),
  
        [ADD_POST]: (state, action) => produce(state, (draft) => {
            
        })
    },
    initialState
  );

// action creator export
const actionCreators = {
    setPost,
    addPost,
  };
  
  export { actionCreators };