import React from "react";


import {Text, Input, Grid, Button} from "../elements/index";
import styled from 'styled-components';

const Signup = (props) => {

    const { history } = props;

    console.log(props);

    return (
        <React.Fragment>
            <Grid center > 
        <InnerBox>
          <LoginBox>
            {/* <div style={{ fontSize: "50px", margin: "20px 0px 10px 0px " }}>
            LOGO
          </div> */}
            <Logo></Logo>
            <TopText style={{ fontSize: "12px" }}>
              친구들의 사진과 동영상을 보려면 가입하세요.
            </TopText>
            <Grid padding="16px 0px">
              <SignupInput
                placeholder="이메일을 입력해주세요."
                _onChange={(e) => {
                 
                }}
              />
              <SignupInput
                placeholder="닉네임 입력해주세요."
                _onChange={(e) => {
                 
                }}
              />
              <SignupInput
                placeholder="패스워드 입력해주세요."
                type="password"
                _onChange={(e) => {
                  
                }}
              />
              <SignupInput
                placeholder="패스워드를 확인해 주세요"
                type="password"
                _onChange={(e) => {
                 
                }}
              />
              <Button
                text="가입"
                width="240px"
                height="40px"
                margin="10px auto"
              />
            </Grid>
          </LoginBox>
          <SingUpBox>
            <SingUpText>
              계정이 있으신가요?
              <span
                style={{ color: "#0095f6", fontWeight: "bold" }}
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

const Logo = styled.div`
  margin: 20px auto;
  width: 180px;
  height: 60px;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/image-community-9d16c.appspot.com/o/images%2Finsta_logo.png?alt=media&token=297d0664-3af3-49d8-b47c-0fccecdc9d0d");
  background-size: cover;
`;

const LoginBox = styled.div`
  width: 300px;
  align-items: center;
  margin: auto;
  border: none;
  margin-top: 40px;
`;

const LoginBtn = styled.button`
  width: 240px;
  height: 25px;
`;

const SingUpBox = styled.div`
  border: 1px solid lightgray;
  width: 300px;
  height: 80px;
  margin: 10px auto;
  text-align: center;
  cursor: pointer;
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

const TopText = styled.div`
color: #8e8e8e;
color: rgba(var(--f52,142,142,142),1);
font-size: 17px;
font-weight: 600;
line-height: 20px;
margin: 0 40px 10px;
text-align: center;
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