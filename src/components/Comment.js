import React from "react";
import {Grid, Image, Text} from "../elements";
import { MdDelete } from "react-icons/md";
import { FcLikePlaceholder } from "react-icons/fc";

import {useSelector, useDispatch} from "react-redux";

import {actionCreators as commentActions} from "../redux/modules/comment"
import {actionCreators as postActions} from "../redux/modules/post"
import {actionCreators as userActions} from "../redux/modules/user"



const Comment = (props) => {

  const dispatch = useDispatch();

  const content_list = useSelector((state) => state.comment.list);
  const user_list = useSelector((state) => state.user.list);
  const post_list = useSelector((state) => state.post.list);

  return (
      <Grid is_flex width="auto">
        
      <Grid is_flex width="auto">
              <Image shape="circle" src={props.imageUrl}/>
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

