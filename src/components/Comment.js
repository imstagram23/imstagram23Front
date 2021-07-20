import React from "react";
import {Grid, Image, Text} from "../elements";
import {useSelector, useDispatch} from "react-redux";

import CommentList from "../pages/CommentList";
import {actionCreators as commentActions} from "../redux/modules/comment"

const Comment = () => {
  const dispatch = useDispatch();
  const comment_list = useSelector((state) => state.comment.list);
  console.log(comment_list);
  React.useEffect = () => {
    dispatch(commentActions.getCommentsAPI());
  }

  return (
    <React.Fragment>
      <Grid padding="16px">
      {comment_list.map((p, idx) => {
                return <CommentItem key={p.post_id} {...p}/>
            })}
      </Grid>
    </React.Fragment>
  );
};

export default Comment;


const CommentItem = (props) => {

    return (
        <Grid is_flex>
          
            <Grid is_flex width="auto">
                <Image shape="circle" src={props.user_profile}/>
                <Text bold>{props.user_name}</Text>
            </Grid>
            <Grid is_flex margin="0px 4px">
                <Text margin="0px">{props.contents}</Text>
                <Text margin="0px">{props.insert_dt}</Text>
            </Grid>
        </Grid>
    )
}

// CommentItem.defaultProps = {
//    user_profile: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg"
// //     user_name: "mean0",
// //     user_id: "",
// //     post_id: 1,
// //     contents: "귀여운 고양이네요!",
// }