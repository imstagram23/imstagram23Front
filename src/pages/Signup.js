import React from "react";

// material-ui
import { Button } from "@material-ui/core";
import Input from '@material-ui/core/Input';


import _Button from "../elements/Button";



const Signup = (props) => {

    console.log(props);

    return (
        <React.Fragment>
            <div>
            <div>
                <div>인스타그램</div>
                <div>친구들의 사진과 동영상을 보려면 가입하세요</div>
                <div>face book으로 로그인</div>
                <Button 
                variant="contained" 
                color="primary">
                Face book으로 로그인</Button>
                <div>- 또는 -</div>
                <div>이메일 주소</div>
                <div>성명</div>
                <div>사용자 이름</div>
                <div>비밀번호</div>
                <Button 
                variant="contained" 
                color="primary">
                가입</Button>
            </div>
            <p/>
            <div>계정이 있으신가요? 로그인</div>
            <p/>
            <div>
                <div>앱을 다운로드하세요.</div>
                <div>앱스토어 / 구글플레이</div>
            </div>
            <p/>
            <div>소개 블로그 채용정보 도움말 API 개인정보</div>
            <div>한국어 / 2021 instargram</div>
            </div>
            
        </React.Fragment>
    )
}


export default Signup;