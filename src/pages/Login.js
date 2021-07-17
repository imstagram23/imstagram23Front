import React from "react";

import {Text, Input, Grid, Button} from "../elements/index";
import styled from 'styled-components';
import Signup from "./Signup"

const Login = () => {

    return (
        <React.Fragment>           
          <Grid bg_color='white' flex_column padding="0 10%" max_height="380px">
          
          <LoginBox>
          <BannerBox>
            <Banner/>       
            </BannerBox>
            <Line/>
            <InputBox>
              {/* input 값의 변화를 state에 저장 */}
              <SignupInput  _onChange={(e) => {
            
                }} placeholder="아이디를 입력하세요" margin='5px'/>
              <SignupInput _onChange={(e) => {
                  
                }}
                type='password'
                placeholder="비밀번호를 입력하세요" margin='5px'/>
            <TextBox>
            <Text color="#0095f6">비밀번호를 잊으셨나요?</Text>
            </TextBox>
            <Button width="260px" margin="10px auto" > 로그인 </Button>
            </InputBox>
            </LoginBox>
              
              {/* <ImageBox>
              <Image onClick={()=>{window.alert('아직 준비중입니다.')}}/>
              </ImageBox> */}
           
            <Grid>
              <SignUpBox>계정이 없으신가요? <SignSpan onClick={Signup}>가입하기</SignSpan></SignUpBox>
            </Grid>
          </Grid>
        </React.Fragment>
      );
    };
    
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
    

    const Line = styled.hr`
      margin: auto auto 25px auto;
      border: 1px dotted #ddd;
    `;

    const LoginBox = styled.div`
  width: 300px;
  align-items: center;
  margin: 70px auto 10px auto;
  border: none;
  display: block;
  justify-content: center;
`;

const InputBox = styled.div`
    display: block;
    margin: auto 20px;
    vertical-align: middle;
    inline-block;
`;

const TextBox = styled.div`
cursor : pointer;
text-align: right;
`;

const SignupInput = styled.input`
  border: 1px solid #DCDBDC;
  width: 260px;
  padding: 12px 4px;
  box-sizing: border-box;
  margin: 7px 0px 10px 0px;
`;

const SignUpBox = styled.p`
margin: 15px auto auto auto;
padding: 0;
border: 0;
color: #DCDBDC;
text-align: center;

`;

const SignSpan = styled.span`
color: #0095f6;
cursor : pointer;
`;



export default Login;