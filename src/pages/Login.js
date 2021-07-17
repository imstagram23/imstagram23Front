import React from "react";

import {Text, Input, Grid, Button} from "../elements/index";
import styled from 'styled-components';

const Login = () => {

    return (
        <React.Fragment>
            
          <Grid bg_color='white' flex_column padding="0 10%" max_height="380px">
            
          <LoginBox>
            <BannerBox>
            <Banner/>       
            </BannerBox>
            
              {/* input 값의 변화를 state에 저장 */}
              <SignupInput  _onChange={(e) => {
                
                }} placeholder="아이디를 입력하세요" margin='5px'/>
              <SignupInput _onChange={(e) => {
                  
                }}
                type='password'
                placeholder="비밀번호를 입력하세요" margin='5px'/>
            
    
            <Button width="260px" margin="15px auto" > 로그인 </Button>
            </LoginBox>
            <Grid padding='20px'>
              <Line/>
              <ImageBox>
              <Image onClick={()=>{window.alert('아직 준비중입니다.')}}/>
              </ImageBox>
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
        margin: 0px auto;
        min-height:100px;
        background-size:contain;
        background-repeat:no-repeat;
        
    `;
    
    const ImageBox = styled.div`
      width:100%;
      height:80px;
      padding: 0px 18%;
    `;
    
    const Image = styled.div`
        background-image:url('https://firebasestorage.googleapis.com/v0/b/dab-react.appspot.com/o/facebook.png?alt=media&token=a400eb1a-93b7-484d-acdf-99102126b717');
        max-width:250px;
        height:80px;
        background-size:contain;
        background-repeat:no-repeat;
        cursor:pointer; 
        
    `;
    const Line = styled.hr`
      margin: 10px 0px;
      border: 1px dotted #ddd;
    `;

    const LoginBox = styled.div`
  width: 300px;
  align-items: center;
  margin: 10px auto;
  border: none;
  margin-top: 45px;
  display: center;

`;

const SignupInput = styled.input`
border: 1px solid #DCDBDC;
width: 260px;
padding: 12px 4px;
box-sizing: border-box;
margin: 5px auto;
weight: 36px;
`;
    
export default Login;