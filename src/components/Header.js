//프랙연습 끝이 아닌가?
import React from "react";
import styled from "styled-components";
import { Grid, Text, Image, Button } from "../elements/index";

import { history } from "../redux/configureStore";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch, useSelector } from "react-redux";

import { TiPlus } from "react-icons/ti";


const Header = (props) => {
    // const dispatch = useDispatch()
    // const user = useSelector(state=> state.user)
    // let profile;
    // let user_name
    // if(user.user){
    //     profile = user.user.profile_img
    //     user_name = user.user.name
    // }
    // const token = sessionStorage.getItem('token')

    // const logOut = () => {
    //   if(window.confirm('로그아웃 하시겠어요?')){
    //     dispatch(userActions.logOutSV(history))
    //   } else{
    //     return
    //   }
    // }

    return (
        <React.Fragment>
            <Wrapper>
                <HeaderContents>
                  <Logo onClick={()=>{history.push('/')}}></Logo>
                  <IconContainer>
                      <TiPlus 
                      size="30px"
                      cursor='pointer' 
                      onClick={()=>{history.push('/write')}} />

                      <Image 
                      size="30"
                      shape="circle" 
                      margin="0px"
                      src={props.user_profile}
                      _onClick={()=>{history.push('/profile')}}/>
                  </IconContainer>
                </HeaderContents>
            </Wrapper>
        </React.Fragment>
    )
}

Header.defaultProps = {
  writer: "Robert Downey Jr.",
  user_profile: "https://img.insight.co.kr/static/2018/06/08/700/oaytfz0m123a56r373eh.jpg",
};

const Wrapper = styled.div`
  border: 1px solid #dbdbdb;
  /* width: 100%; */
  width: 100vw;
  height: 55px;
  position: fixed;
  /* 헤더가 게시물사진에 가려져 안보이기 때문에 인덱스 제일 앞으로 */
  z-index: 1;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
`;

const HeaderContents = styled.div`
  max-width: 1000px;
  width: 100%;
  margin-left: 13px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
    background-image:url('https://firebasestorage.googleapis.com/v0/b/dab-react.appspot.com/o/instagram.png?alt=media&token=a53527c4-07df-4c3f-ae18-ca30c3e0aa2b');
    min-width:150px;
    min-height:50px;
    background-size:contain;
    background-repeat:no-repeat;
    cursor:pointer;
    
`;

const IconContainer = styled.div`
  width: 65px;
  margin-right: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default Header;