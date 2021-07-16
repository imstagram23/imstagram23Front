import React from "react";

import {Grid, Image, Text} from "../elements";


const Post = (props) => {
    return (
      <React.Fragment>
        <Grid>
            <Grid is_flex>
                <Image shape="circle" src={props.user_info.user_profile}/>
                <Text bold>{props.user_info.user_name}</Text>
                <Text>{props.insert_dt}</Text>
            </Grid>
            <Grid margin='10px 0px'>
                <Image shape="rectangle" src={props.image_url}/>
            </Grid>
            <Grid padding="16px">
                <Text>{props.contents}</Text>
            </Grid>
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
  contents: "contents 입니다.",
  insert_dt: "(삭제버튼)",
};

export default Post;