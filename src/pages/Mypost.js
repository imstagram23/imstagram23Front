import React from "react";
import styled from 'styled-components';
import {Text, Input, Grid, Button} from "../elements/index";

import Header from "../components/Header";
import ProfileHeader from "../components/ProfileHeader";

import Post from "../components/Post"
import ProfileImageCard from "../components/ProfileImageCard";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as profileActions } from "../redux/modules/profile";

const Mypost = () => {
  const dispatch = useDispatch();

  const writer = useSelector((state) => state.profile.writer);
  const imageUrl = useSelector((state) => state.profile.imageUrl);

  console.log(writer)
  console.log(imageUrl)

  const profile_list = () => {
    dispatch(profileActions.profile_loadingAPI(writer, imageUrl))
  }

  console.log(profile_list)

  React.useEffect(() => {
    dispatch(profileActions.profile_loadingAPI(writer, imageUrl));
  }, []);

    return (
        <React.Fragment>
          <Header/>
          <Grid  padding="57px 0px" is_flex width="auto" bg_color='white' flex_column padding="0 10%" max_height="380px">
            {/* <Container> */}
            <ProfileHeader />
            {/* <PostContainer> */}
            <PostBox>
              <profile_list/>
            {/* <Post/> */}
            {/* </PostContainer> */}
            {/* </Container> */}
            </PostBox>
            <ProfileImageCard/>
          </Grid>
        </React.Fragment>
      );

};

// const Container = styled.div`
//   box-sizing: border-box;
//   padding-top: 30px;
//   margin: 0 auto;
//   position: relative;
//   width: 100%;
//   max-width: 400px;
//   min-width: 400px;
  
// `;

// const PostContainer = styled.div`
//   display: flex;
//   box-sizing: border-box;
//   flex-direction: row;
//   flex-wrap: wrap;
//   margin-top: 30px;
//   margin-right: 15px;
//   margin-left: 15px;
//   width: 100%;
//   max-width: 800px;
//   min-width: 800px;
//   border: 2px solid black;
//   padding: 120px 100px 120px 250px;
// `;

const PostBox = styled.div`
  const

`;

export default Mypost;