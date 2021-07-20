import React, {useCallback, useState} from "react";
import {Text, Input, Grid, Button} from "../elements/index";
import styled from 'styled-components';

import { history } from "../redux/configureStore";
import {useDispatch} from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import Login from "./Login";
import {emailCheck} from "../shared/common";

const Signup = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('')
  const [password, setPwd] = useState('')
  const [passwordConfirm, setConfirmedPwd] = useState('') 
  const [nickname, setName] = useState('')
  
  const data = {
    email: email,
    nickname: nickname,
    password: password,
    passwordConfirm: passwordConfirm,

  }

  const submitEmail = (e) => {
    setEmail(e.target.value)
  }

  const submitName = (e) => {
    setName(e.target.value)
  }
  const submitPwd = (e) => {
    setPwd(e.target.value)
  }
  const submitConfirmedPwd = (e) => {
    setConfirmedPwd(e.target.value)
  }

  const siteSignup = () => {
    if (!email || !password || !nickname || !passwordConfirm) {
      window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
      return;
    }
    // 사전 정의된 정규표현식으로 이메일 형식 체크
    if(!emailCheck(email)){
      window.alert('이메일 형식이 맞지 않습니다!');
      return;
    }
    if (password !== passwordConfirm){
      window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
      return;
    }
    
    dispatch(userActions.SignUPApi(data))
  
  }

    return (
        <React.Fragment>
            <Grid center padding="10px"> 
            
        <InnerBox>
          <LoginBox>
          <BannerBox>
          <Banner/>
          </BannerBox>
            <TopText>
              친구들의 사진과 동영상을 보려면 가입하세요.
            </TopText>
            <Grid padding="16px 0px">
              <SignupInput 
                placeholder="이메일 주소"
                type="email"
                onChange={submitEmail}
              />
              <SignupInput 
                placeholder="사용자 이름"
                onChange={submitName}
                 
              />
              <SignupInput 
                placeholder="비밀번호"
                type="password"
                onChange={submitPwd}
              />
              <SignupInput 
                placeholder="비밀번호 확인"
                type="password"
                onChange={submitConfirmedPwd}
              />
              
              <Button
                text="가입"
                width="260px"
                height="40px"
                margin="10px auto"
                bg="#0095f6"
                border="none"
                borderRadius="5px"
                _onClick={()=> {siteSignup()
                }}
              />
            </Grid>
          </LoginBox>
          <SingUpBox>
            <SingUpText>
              계정이 있으신가요?   
              <span
                style={{ color: "#0095f6", fontWeight: "bold", border: "none"}}
                onClick={() => {
                  history.push("/login");
                }}
              >
                로그인
              </span>
            </SingUpText>
          </SingUpBox>
        </InnerBox>
            </Grid>
        </React.Fragment>
    )
    
}

const OutBox = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 700px;
  height: 600px;
  margin: 25% auto;
  z-index: 1;
  display: flex;
  justify-content: space-between;
`;

const InnerBox = styled.div`
  width: 330px;
  height: 430px;
  padding: 0;
  margin: auto;
`;

const BannerBox = styled.div`
    width:100%;
    min-height:100px;
    padding: 0px 20%;
    margin: 10px auto;
    `;
    
  const Banner = styled.div`
    background-image:url('https://firebasestorage.googleapis.com/v0/b/dab-react.appspot.com/o/instagram.png?alt=media&token=a53527c4-07df-4c3f-ae18-ca30c3e0aa2b');
    width:100%;
    margin: auto;
    min-height:100px;
    background-size:contain;
    background-repeat:no-repeat;
    `;


const LoginBox = styled.div`
  width: 300px;
  align-items: center;
  margin: auto;
  border: none;
  margin-top: 40px;
`;

const TopText = styled.div`
color: #8e8e8e;
color: rgba(var(--f52,142,142,142),1);
font-size: 17px;
font-weight: 600;
line-height: 20px;
margin: 0 20px 10px;
text-align: center;
`;

const LoginBtn = styled.button`
  width: 240px;
  height: 25px;
`;

const SingUpBox = styled.div`
  border: none;
  width: 300px;
  height: 80px;
  margin: 10px auto;
  text-align: center;
  cursor: pointer;
   border: none;
`;

const SingUpText = styled.div`
  margin-top: 27px;
  align-items: center;
 
  
`;

const Bg = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fafafa;
`;

const SignupInput = styled.input`
border: 1px solid #DCDBDC;
width: 260px;
padding: 12px 4px;
box-sizing: border-box;
margin: 3px auto;
weight: 36px;
`;

export default Signup;