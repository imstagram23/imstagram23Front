// 미리보기 이미지 넣기 (post에 한 번에 해도 ok)
import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import axios from "axios";

// Actions
const UPLOADING = "UPLOADING";
// const UPLOAD_IMAGE = "UPLOAD_IMAGE";
const SET_PREVIEW = "SET_PREVIEW";

// createAction(Action Creators 대신 편하고 쉽게 만들기)
const uploading = createAction(UPLOADING, (uploading) => ({ uploading }));
// 이미지 업로드는 post모듈에서 addCardDB로 다른 데이터와 한꺼번에 보내므로 필요없음
// const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({ image_url }));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));

// 리듀서가 사용할 initialState
const initialState = {
  // image_url: "",
  uploading: false,
  preview: null,
};

// 이미지 업로드는 post모듈에서 addCardDB로 다른 데이터와 한꺼번에 보내므로 필요없음
// const uploadImageDB = (image) => {
//   return function (dispatch, getState, {history}) {
//     dispatch(uploading(true));
//   };
// }

// handleActions(리듀서 대신 편하게 만들기)
export default handleActions({
  [UPLOADING]: (state, action) => produce(state, (draft) => {
    draft.uploading = action.payload.uploading;
  }),

  // [UPLOAD_IMAGE]: (state, action) => produce(state, (draft) => {
  //   draft.image_url = action.payload.image_url;
  //   draft.uploading = false;
  // }),
  
  [SET_PREVIEW]: (state, action) => produce(state, (draft) => {
    draft.preview = action.payload.preview;
  }),
  },initialState);

const actionCreators = {
  // uploadImage,
  // uploadImageDB,
  setPreview,
};

export { actionCreators };