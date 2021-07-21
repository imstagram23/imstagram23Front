import React from "react";
import {Grid, Image, Text} from "../elements";
import { MdDelete } from "react-icons/md";
import { FcLikePlaceholder } from "react-icons/fc";

import {useSelector, useDispatch} from "react-redux";

import {actionCreators as commentActions} from "../redux/modules/comment"
import {actionCreators as postActions} from "../redux/modules/post"


const Comment = (props) => {

  return (
      <Grid is_flex width="auto">
        
      <Grid is_flex width="auto">
              <Image shape="circle" src={props.image_url}/>
              <Text bold>{props.writer}</Text>
          </Grid>
          <Grid is_flex margin="0px 4px" width="auto">
              <Text margin="0px">{props.content}</Text>
              <FcLikePlaceholder size="22px"/>
              {/* <MdDelete 
              onClick={(e)=>{dispatch(commentActions.deleteCommentAPI(props.commentId))}}
              /> */}
          </Grid>
      </Grid>
  )
}



export default Comment;

