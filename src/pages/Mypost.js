import React from "react";
import styled from 'styled-components';
import {Text, Input, Grid, Button, Image} from "../elements/index";

import Header from "../components/Header";
import ProfileHeader from "../components/ProfileHeader";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as profileActions } from "../redux/modules/profile";

const Mypost = (props) => {
  const dispatch = useDispatch();
  const writer = props.match.params.writer;

  const _writer = useSelector((state) => (state.profile.writer));
  const _imageUrl = useSelector((state) => (state.profile.imageUrl));
  console.log(_imageUrl)

  React.useEffect(() => {
    dispatch(profileActions.profile_loadingAPI(writer, _imageUrl ));
  }, []);

  if (!_writer || !_imageUrl){
    return(<div>로딩중</div>)
  }
  
    return (
        <React.Fragment>
          <Header/>
          <Grid  padding="57px 0px" is_flex width="auto" bg_color='white' flex_column padding="0 10%" max_height="380px">
     
            <ProfileHeader />
            <Container>
            {_imageUrl.map((p, idx) => {
              console.log(props.url)
           return <Div key={idx} {...p} image_url= {props}/>
          })} 
            </Container>
          </Grid>
        </React.Fragment>
      );
};

const Container = styled.div`
grid-template-rows: repeat(3, minmax(100px, auto));
grid-template-columns: repeat(3, 1fr);
display: grid;
align-items: stretch;
place-items: center start;
border: 1px solid black;
width: 100%;
height: auto;
margin-top: 30px;
`;

const Div = styled.div`
z-index: 1;
align-content: stretch;
justify-content: stretch;
border: 1px solid blue;
width: 100%;
height: 100%;
background-size: cover;
`;

export default Mypost;