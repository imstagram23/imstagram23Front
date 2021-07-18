import React from "react";
import styled from "styled-components";

import {Grid, Input, Button, Image, Text} from "../elements";

const CommentWrite = (props) => {

  const {user_profile, user_name, user_id, post_id, contents, insert_dt} = props;

    return (
      <React.Fragment>
        
        <Grid padding="10px 27px"is_flex bg_color="#efefef"> 
            <Grid is_flex width="auto">
                <Image shape="circle" src={props.image_url}/>
            </Grid>
            <Grid is_flex  margin="0px 0px 0px 15px" >
          <CommentWriteInput  radius="10px" placeholder="댓글 달기.." />
          <Button border="1px solid rgb(59, 59, 59)" bg="transparent" color="#8c8787" width="50px" margin="0px 2px 0px 2px">게시</Button>
        </Grid>
       
        </Grid>
      </React.Fragment>
    );
}

const CommentWriteInput = styled.input`
height: 40px;
width: 100%;
border-radius: "20px"
`;

CommentWrite.defaultProps = {
  user_profile: "",
  user_name: "mean0",
  user_id: "",
  post_id: 1,
  contents: "귀여운 고양이네요!",
  insert_dt: '2021-01-01 19:00:00'
}

CommentWrite.defaultProps = {
  writer: "Robert Downey Jr.",
  user_profile: "https://img.insight.co.kr/static/2018/06/08/700/oaytfz0m123a56r373eh.jpg",
  image_url: "https://cdn.vox-cdn.com/thumbor/M2rjDALxvNDv3yqeYuIdL3spabo=/0x0:2000x1333/1200x675/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/65939918/171109_08_11_37_5DS_0545__1_.0.jpg",
  contents: "NewYork NewYork",
  comment_cnt: 10,
};


export default CommentWrite;