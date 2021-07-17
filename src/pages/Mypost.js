import React from "react";

import {Text, Input, Grid, Button} from "../elements/index";
import styled from 'styled-components';
import ProfileHeader from "../components/ProfileHeader";
import ProfilePost from "../components/ProfilePost";

const Mypost = () => {

    return (
        <React.Fragment>
          <Container>
            <ProfileHeader />
            <PostContainer>
            <ProfilePost/>
            </PostContainer>
          </Container>
        </React.Fragment>
      );

};

const Container = styled.div`
  box-sizing: border-box;
  padding-top: 30px;
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: auto;
  /* height: 100%; */
  max-width: 800px;
  min-width: 800px;
`;

const PostContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 30px;
  margin-right: 15px;
  margin-left: 15px;
  width: 100%;
  max-width: 800px;
  min-width: 800px;
`;

export default Mypost;