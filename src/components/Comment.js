import React from "react";
import {Grid, Image, Text} from "../elements";
import styled from "styled-components";

import { MdDelete } from "react-icons/md";
import { FcLikePlaceholder } from "react-icons/fc";

import {useSelector, useDispatch} from "react-redux";
import { history } from "../redux/configureStore";
import {actionCreators as commentActions} from "../redux/modules/comment"   


const Comment = (props) => {

  const dispatch = useDispatch();
  const is_writer = props.checkMember

  return (
      <Grid is_flex width="auto" padding="3px 25px" margin="3px 0px 0px 0px">
      <Grid is_flex width="auto" margin="0px 5px 0px 0px">
              <Image shape="circle" src={props.user_profile}/>
              
              <Text margin="auto auto auto 5px" bold
              _onClick={()=>{history.push(`/memberpage/${props.writer}`)}} 
              >{props.writer}</Text>
          </Grid>
          <Grid margin="0px 4px">
          
              <TextComment >{props.content}</TextComment>
              </Grid>

              <Grid is_flex width="10%">
              {/* <FcLikePlaceholder margin="auto 5px" size="22px" /> */}
              {is_writer? <MdDelete onClick={(e)=>{dispatch(commentActions.deleteCommentAPI(props.commentId))}}/> : "" }
             
              
            
              
              </Grid>  
          </Grid>
  )
}

const TextComment = styled.text`
vertical-align: center;
margin: left;
font-size: 13px;
text-align: left;
`;

Comment.defaultProps = {
  user_profile: "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
};

export default Comment;

