//프랙연습 끝이 아닌가?
import React from "react";
import styled from "styled-components";
import { Grid, Text, Image, Button } from "../elements/index";

import { history } from "../redux/configureStore";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch, useSelector } from "react-redux";
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
// import HomeIcon from "@material-ui/icons/Home";
// import ExploreIcon from "@material-ui/icons/Explore";

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
                      <Text cursor='pointer' _onClick={()=>{history.push('/write')}} >작성</Text>
                      <Text cursor='pointer'_onClick={()=> {history.push('/profile')}} src="프로필" shape='circle' size='24'>프로필</Text>
                  </IconContainer>
                </HeaderContents>
            </Wrapper>
        </React.Fragment>
    )
}

const Wrapper = styled.div`
  border: 1px solid #dbdbdb;
  /* width: 100%; */
  width: 100vw;
  height: 55px;
  position: fixed;
  /* z-index: 1; */
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  width: 90px;
  margin-right: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export default Header;