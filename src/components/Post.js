import React from "react";
import { history } from "../redux/configureStore";

import {Grid, Image, Text, Button, Input} from "../elements";

import HeartButton from "./HeartButton";

import { MdDelete } from "react-icons/md";
import { RiEdit2Line } from "react-icons/ri";
import { FcLikePlaceholder } from "react-icons/fc";
import CommentList from "./CommentList";
import Comments from "../pages/Comments";
import CommentWrite from "../pages/Comments";

const Post = (props) => {

  const [comment, setComment] = React.useState();


  const commentWrite = () => {
   // comment 작성후에는 input창을 비워주기 위함
    setComment("");
    if (!comment) {
      window.alert("댓글 내용을 입력하세요");
      return;
    }
    console.log(comment)
  };
  

  return (
    <React.Fragment>
      <Grid padding="0 0 30px 0">
      
        <Grid is_flex >
          <Grid is_flex padding="0px 10px" width="auto">
            <Image 
            shape="circle" 
            margin="4px" 
            src={props.user_profile}/>
            <Text bold _onClick={() => {history.push('/profile')}}>{props.writer}</Text>
          </Grid >
          <Grid is_flex width="auto" padding="0 14px" >
            <Grid padding="0 5px">
              <MdDelete 
              size="20px"
              cursor='pointer'                
              onClick={()=>{console.log("삭제!")}}/>
              {/* <Text padding="0 5px" _onClick={()=>{console.log("삭제!")}}>{props.deleteButton}</Text> */}
            </Grid>

            <Grid>
            <RiEdit2Line 
              size="20px"
              cursor='pointer'
              onClick={()=>{history.push('/edit')}}/>
              {/* <Text padding="0 13px" _onClick={()=>{history.push('/edit')}}>{props.editButton}</Text> */}
            </Grid>
          </Grid>
        </Grid>

        <Grid>
            <Image 
            shape="rectangle" 
            margin="5px 0" 
            src={props.image_url}/>
        </Grid>

        <Grid padding="4px 14px 0 14px">
          {/* <HeartButton/> */}
          {/* is_me들어가면 위에걸로 */}
          <FcLikePlaceholder size="22px"/>
        </Grid>

        <Grid flex_row padding="0 14px 4px 14px">
        <Text margin="0px" bold padding="0 5px 0 0">{props.writer}</Text>
        <Text margin="0px">{props.contents}</Text>
      </Grid>

        <Grid padding="4px 14px">
          <Text margin="0px" size="12px">댓글 {props.comment_cnt}개</Text>
        </Grid>
      
      </Grid>
          <Grid is_flex padding=" 7px 13px 7px 13px">
          <Text _onClick={()=>{history.push('/comment')}} margin="0px" bold color="rgba(var(--f52,142,142,142),1)">
            댓글 10개 모두 보기
          </Text>
          {/* <CommentWrite post_id={props.user_info.user_name}/> */}
          {/* <CommentList post_id={props.user_info.user_name}/> */}
          </Grid>
            <Grid is_flex padding="0px 10px 0px 10px" margin="0px">
            <Image
                width="20%"
                shape="circle" 
                margin="4px" 
                src={props.user_profile}/>
            <Input width="70%"
                value={comment}
                _onChange={(e) => {
                  setComment(e.target.value);
                }}
                is_comment
              />
            <Grid width="40px" is_flex margin="auto 10px">
                <Text color='#0095f6' _onClick={commentWrite} cursor="Pointer">
                  게시
                </Text>
                </Grid>
            </Grid>

      </React.Fragment>
    );
};
 

Post.defaultProps = {
  writer: "Robert Downey Jr.",
  user_profile: "https://img.insight.co.kr/static/2018/06/08/700/oaytfz0m123a56r373eh.jpg",
  image_url: "https://cdn.vox-cdn.com/thumbor/M2rjDALxvNDv3yqeYuIdL3spabo=/0x0:2000x1333/1200x675/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/65939918/171109_08_11_37_5DS_0545__1_.0.jpg",
  contents: "NewYork NewYork",
  comment_cnt: 10,
};


export default Post;