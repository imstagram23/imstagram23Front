import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import moment from "moment";
import axios from "axios";

const SET_COMMENT = "SET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

const setComment = createAction(SET_COMMENT, (content_list) => ({content_list}));
const addComment = createAction(ADD_COMMENT, (content) => ({content}));
const deleteComment = createAction(DELETE_COMMENT, (content) => ({content}));

const initialState = {
    list: [
        {
        content : "content 입니다1",
        insert_dt: moment().format("YYYY년 MM월 DD일 hh:mm:ss"),
      },
      {
        content : "content 입니다2",
        insert_dt: moment().format("YYYY년 MM월 DD일 hh:mm:ss"),
      },
      {
        content : "content 입니다3",
        insert_dt: moment().format("YYYY년 MM월 DD일 hh:mm:ss"),
      },
    ],
}

// 게시글 하나에는 어떤 정보가 있어야 하는 지 하나 만들어둡시다! :)
const initialComment = {
  content : "content 입니다",
  insert_dt: moment().format("YYYY년 MM월 DD일 hh:mm:ss"),
};

const addCommentAPI = (content, postId) => {
    return function (dispatch, getState, {history}) {
      // formdata에 파일과 게시글 내용을 담아 서버로 전송
    //   const formData = new FormData();
    //   formData.append("content", content);

    // for (let key of formData.keys()) { console.log(key); }
    // for (var value of formData.values()) { console.log(value); }
        
        axios({
        method: "POST",
        url:  `http://3.36.50.96/api/comment/${postId}`,
        data: {content: content},
        headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${sessionStorage.getItem("token")};`,
        },
      }).then((response) => {
          console.log(response.data);
          
        //   console.log(response.data);
         
           // 방금 업데이트 된 포스트 정보를 받아 정리한다.
          const new_content = {
            content: response.data.content,
            // createdAt: moment().format("YYYY년 MM월 DD일 hh:mm"),
          };
          console.log(new_content)
          // 리덕스 상태 업데이트
          dispatch(addComment(new_content));

          window.alert("댓글 작성이 완료되었습니다.");
          history.replace(`/comment/${postId}`);

        })
        .catch((error) => {
          console.log(error);
        });
    };
  };

  const setCommentAPI = (postId) => {
    return function (dispatch, getState, {history}) {
        axios({
            method: 'get',
            url: `http://3.36.50.96/api/comment/${postId}`,
            // data: {},
            headers: { 
                "Content-Type": "application/json;charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${sessionStorage.getItem("token")};`,
            },
        }).then((response) => {
          console.log(response.data);
          dispatch(setComment(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };

  const deleteCommentAPI = (commentId) => {
    return function(dispatch) {
      const options = {
        url: `http://3.36.50.96/api/comment/${commentId}`,
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          "Authorization": `Bearer ${sessionStorage.getItem("token")};`,
        },
        data: {
            commentId : commentId
        }
      };
      axios(options).then((response) => {
        // console.log(response)
        // 방금 삭제한 게시물의 writer를 이용하여 리덕스 상태 업데이트
        dispatch(deleteComment(commentId))
      }).catch((error) => {
      })
    }
  }

// reducer
export default handleActions(
    {
        [SET_COMMENT]: (state, action) => produce(state, (draft) => {
            draft.list = action.payload.content_list;
        }),
  
        [ADD_COMMENT]: (state, action) => produce(state, (draft) => {
            draft.list.unshift(action.payload.content);
        }),

        [DELETE_COMMENT] : (state, action) => produce(state,(draft) => {
            let new_content_list = draft.list.filter((v) => {
              if(v.commentId !== action.payload.content){
                return v
              }
            })
      
            draft.list = new_content_list;
          }),
    },
    initialState
  );

  // action creator export
const actionCreators = {
    setComment,
    addComment,
    addCommentAPI,
    setCommentAPI,
    deleteCommentAPI,

  };
  
  export { actionCreators };