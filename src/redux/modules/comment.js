import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import "moment";
import moment from "moment";
import axios from 'axios';


const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

const setComment = createAction(SET_COMMENT, (comment_list) => ({comment_list}));
const addComment = createAction(ADD_COMMENT, (content) => ({content}));
const deleteComment = createAction(DELETE_COMMENT, (commentId) => ({commentId}));

const initialState = {
  list: [],
};

const initialComment = {
  content: "고양이네요!",
  image_url: "https://cdn.vox-cdn.com/thumbor/M2rjDALxvNDv3yqeYuIdL3spabo=/0x0:2000x1333/1200x675/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/65939918/171109_08_11_37_5DS_0545__1_.0.jpg",
  insert_dt: moment().format("YYYY년 MM월 DD일 hh:mm:ss"),

}

const getCommentsAPI = () => {
  return function (dispatch, getState, { history }) {
    axios({
        method: 'get',
        url: 'http://3.36.50.96/api/post',
        // data: {},
        headers: { 
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
            "Authorization": `Bearer ${sessionStorage.getItem("token")};`,
        },
    }).then((resp) => {
        console.log(resp)
        console.log(resp.data)
        dispatch(setComment(resp.data));
      })
      .catch((e) => console.error(e));
  };
};

const addCommentAPI = (content) => {

    const formData = new FormData();

    formData.append('content', content);


    return function (dispatch, getState, {history}){
        
      axios({
        method: "POST",
        url: "http://3.36.50.96/api/comment",
        headers: {
            "Accept": "application/json",
            "Content-Type":"application/json;charset=UTF-8",
            'Access-Control-Allow-Origin' : '*'
        },
        data: {
            "content" : content,
            "createdAt" : moment().format("YYYY-MM-DD hh:mm:ss"),
        }
        
      }).then((res)=>{
        console.log(res);
        dispatch(addComment(res.data))
        history.replace("/comment");
      }).catch(error=>{
        console.log(error);
      });     
    };
  };

export default handleActions(
  {
    [SET_COMMENT]: (state, action) => produce(state, (draft) => {
        draft.list[action.payload.commentId] = action.payload.content
    }),
        
    [ADD_COMMENT]: (state, action) => produce(state, (draft)=> {
         draft.list.unshift(action.payload.content)
    }),
    // [DELETE_COMMENT]: (state, action) => produce(state, (draft) => {
    //     let idx = draft.list[action.payload.commentId].findIndex((p) => p.id === action.payload.id);
    //     if(idx !== -1){
    //         draft.list[action.payload.commentId].splice(idx, 1);
    //     }
    // }), 
  },
  initialState
);

const actionCreators = {
  setComment,
  addComment,
  deleteComment,
  addCommentAPI,
  getCommentsAPI,

};

export { actionCreators };