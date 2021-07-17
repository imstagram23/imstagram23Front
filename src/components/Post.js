import React from "react";
import { history } from "../redux/configureStore";

import {Grid, Image, Text, Button} from "../elements";
import HeartButton from "./HeartButton";

const Post = (props) => {
    return (
      <React.Fragment>
        
            <Grid is_flex >
              <Grid is_flex padding="0px 10px" width="auto">
                <Image shape="circle" src={props.user_info.user_profile}/>
                <Text bold>{props.user_info.user_name}</Text>
              </Grid >
              <Grid is_flex width="auto">
                <Text padding="0 5px" _onClick={()=>{console.log("삭제!")}}>{props.deleteButton}</Text>
                <Text padding="0 13px" _onClick={()=>{history.push('/edit')}}>{props.editButton}</Text>
              </Grid>
            </Grid>

            <Grid>
                <Image shape="rectangle" margin="5px 0" src={props.image_url}/>
            </Grid>

            <Grid padding="4px 10px">
              <HeartButton/>
            </Grid>

            <Grid flex_row padding="4px 14px">
              <Text margin="0px" bold padding="0 5px 0 0">{props.user_info.user_name}</Text>
              <Text margin="0px">{props.contents}</Text>
            </Grid>

            <Grid padding="4px 14px">
              <Text margin="0px" size="12px">댓글 {props.comment_cnt}개</Text>
            </Grid>

      </React.Fragment>
    );
}

Post.defaultProps = {
  user_info: {
    user_name: "user_name",
    user_profile: "https://image5jvqbd.fmkorea.com/files/attach/new/20200816/486616/657118072/3039288745/99b983892094b5c6d2fc3736e15da7d1.jpeg",
  },
  image_url: "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile5.uf.tistory.com%2Fimage%2F1115E239507C23380B4840",
  contents: "어쩌고 저쩌고",
  deleteButton: "delete",
  editButton: "edit",
  comment_cnt: 10,

};

export default Post;