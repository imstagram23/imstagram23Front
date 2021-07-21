import React from "react";
import {Grid, Image, Text} from "../elements";
import styled from "styled-components";

import { MdDelete } from "react-icons/md";
import { FcLikePlaceholder } from "react-icons/fc";

import {useSelector, useDispatch} from "react-redux";

import {actionCreators as commentActions} from "../redux/modules/comment"   


const Comment = (props) => {

  const dispatch = useDispatch();

// const is_me = useSelector((state) => state.comment.writer);
// console.log(is_me)
// writer 배포 받으면, props로 받아서 조건걸어서 아이콘 쏘기


  return (
      <Grid is_flex width="auto" padding="0px 25px">
        
      <Grid is_flex width="auto" margin="0px 20px 0px 0px">
              <Image shape="circle" src={props.image_url}/>
              <Text bold>{props.writer}</Text>
          </Grid>
          <Grid is_flex margin="0px 4px" width="auto">
              <TextComment >{props.content}</TextComment>
              <FcLikePlaceholder size="22px" />
              {/* {is_me? <MdDelete onClick={(e)=>{dispatch(commentActions.deleteCommentAPI(props.commentId))}}/> : "" } */}
              
              <MdDelete onClick={(e)=>{dispatch(commentActions.deleteCommentAPI(props.commentId))}}/>
                       
          </Grid>
      </Grid>
  )
}

const TextComment = styled.text`
vertical-align: center;
margin: auto 20px auto auto;
font-size: 13px;
text-align: left;
`;



export default Comment;

