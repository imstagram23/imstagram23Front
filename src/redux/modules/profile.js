import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

// Actions
const PROFILE_LOADING = "PROFILE_LOADING";

// createAction
const profile_loading = createAction(PROFILE_LOADING, (url, name) => ({ url, name }));


// initialState
const initialState = {
    imageUrl: null,
    writer: null,
};


// axios
const profile_loadingAPI = (writer, imageUrl) => {
    return function (dispatch, getState, {history}) {
        axios({
            method: 'GET',
            url: `http://3.36.50.96/api/memberpage/${writer}`,
            // data: {},
            headers: { 
                "Content-Type": "application/json;charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
                "Authorization": `Bearer ${sessionStorage.getItem("token")};`,
            },
        }).then((response) => {
          console.log(response)
          const imageUrl = response.data.imageUrl;
          const writer = response.data.writer;
          dispatch(profile_loading(imageUrl, writer));

        })
        .catch((error) => {
          console.log(error);
        });
    };
  };


// handleActions
export default handleActions({
    [PROFILE_LOADING]: (state, action) => produce(state, (draft) => {
      draft.imageUrl = action.payload.url;
      draft.writer = action.payload.name;
    }),
  },
  initialState
);


// action creator export
const actionCreators = {
    profile_loading,
    profile_loadingAPI,
};
  
export { actionCreators };

