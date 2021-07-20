import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import axios from 'axios';

//actions
const LOG_IN = "LOG_IN"; //로그인

// const LOG_OUT = "LOG_OUT"; //로그아웃
const LOGIN_CHECK = 'LOGIN_CHECK';
const GET_USER = "GET_USER"; //유저정보 가져오기

//actionCreators
const logIn = createAction(LOG_IN, (user) => ({user}));

// const logOut = createAction(LOG_OUT, (user) => ({user}));
const loginCheck = createAction(LOGIN_CHECK, (session) => ({session}));
const getUser = createAction(GET_USER, (user) => ({user}));

//initialState
const initialState = {
    is_login: false,
};

// const mockUserAPl = 'https://run.mocky.io/v3/ce3bcb61-6cb3-471d-bc40-e3243360b529'

//로그인api
const loginAPI = (data) => {
    return function (dispatch, getState, { history }) {
        axios({
            method: "POST",
            url: "http://3.36.50.96/api/login",
            headers: {
                "Accept": "application/json", //클라이언트가 서버한테 요청하는(원하는) 타입
                "Content-Type":"application/json;charset=UTF-8", //현재 서버한테 보내는 데이터 타입
                'Access-Control-Allow-Origin' : '*',
                "Authorization": `Bearer ${sessionStorage.getItem("token")};`,
            },
            data: {
                "email": data.email,
                "password": data.password,
            }
        }).then((res)=>{
            console.log(res);
            localStorage.setItem("email", JSON.stringify(`${data.email}`)); //localStorage의 텍스트형이므로 객체 json.stringfy로 변환
            // res.data.accessToken를 해줘야 application value에 담김
            sessionStorage.setItem("token", res.data.accessToken);
            // sessionStorage.setItem("token", res.data.accessToken);
            // sessionStorage.setItem("token", res.data.Authorization);
            console.log(res.data)

            dispatch(logIn({
                email: data.email,
                password: data.password,
            }));
            //token 확인
            console.log(res.data)

            window.alert("정상적으로 로그인 되었습니다!")
            history.push("/");
        }).catch(error=>{
            console.log(error);
            window.alert("가입정보를 다시 한번 확인해주세요.");
            }   
        );

    };
};
console.log(localStorage);
console.log(sessionStorage);

// //로그아웃
// const logOutApi = () =>{
//     return function (dispatch, getState, { history }){
//         localStorage.removeItem("email");
//         sessionStorage.removeItem("token");
//         dispatch(logOut());
//         history.replace("/");
//     }

// }

//회원가입api
const SignUPApi = (data) => {
    return function (dispatch, getState, { history }){
        axios({
            method: "POST",
            url: "http://3.36.50.96/api/signup",
            headers: {
                "Accept": "application/json", //클라이언트가 서버한테 요청하는(원하는) 타입
                "Content-Type":"application/json;charset=UTF-8", //현재 서버한테 보내는 데이터 타입
                'Access-Control-Allow-Origin' : '*',
                "Authorization": `Bearer ${sessionStorage.getItem("token")};`,
            },
            data: {
                "email": data.email,
                "nickname": data.nickname,
                "password": data.password,
                "passwordConfirm": data.passwordConfirm
            },

        }).then((res)=>{
            console.log(res);
            history.push("/login");
            window.alert("축하합니다! 회원가입 되었습니다!")
        }).catch(error=>{
            console.log(error);
            window.alert("회원가입 실패!");
            history.replace("/login");
        });
    }
};

//Reducer
export default handleActions({
    [LOGIN_CHECK]: (state,action) => produce(state,(draft) => {
        draft.is_login = action.payload.session;
    }),
    [LOG_IN]: (state,action) => produce(state,(draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
    }),
    // [LOG_OUT]: (state,action) => produce(state,(draft) => {
    //     draft.user = null;
    //     draft.is_login = false;
    // }),
    [GET_USER]: (state, action) => produce(state, (draft) => {
        
    }),

}, initialState);


//action creator export
const actionCreators = {
    loginCheck,
    logIn,
    // logOut,
    getUser,
    SignUPApi,
    loginAPI,
    // logOutApi,

};

export {actionCreators};