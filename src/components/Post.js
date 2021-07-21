import React from "react";
import { history } from "../redux/configureStore";

import {Grid, Image, Text, Button, Input} from "../elements";

import HeartButton from "./HeartButton";

import { MdDelete } from "react-icons/md";
import { RiEdit2Line } from "react-icons/ri";
import { FcLikePlaceholder } from "react-icons/fc";

import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const Post = (props) => {
  const dispatch = useDispatch();

  const [comment, setComment] = React.useState();


  // const commentWrite = () => {
  //  // comment 작성후에는 input창을 비워주기 위함
  //   setComment("");
  //   if (!comment) {
  //     window.alert("댓글 내용을 입력하세요");
  //     return;
  //   }
  //   console.log(comment)
  // };


  return (
    <React.Fragment>
      <Grid padding="0 0 20px 0">
      
        <Grid is_flex >
          <Grid is_flex padding="0px 10px" width="auto">
            <Image 
              shape="circle" 
              margin="4px" 
              src={props.user_profile}
            />
            <Text 
              bold 
              _onClick={() => {history.push('/profile')}}
              >{props.writer}
            </Text>
          </Grid >

          {/* 내 게시물만 수정 및 삭제 버튼 보일 수 있도록 */}
          <Grid is_flex width="auto" padding="0 14px" >
            <Grid padding="0 5px">
              {props.checkMember && <MdDelete 
              size="20px"
              cursor='pointer'
              // onClick={()=>{console.log("삭제!")}}
              onClick={(e)=>{dispatch(postActions.deletePostDB(props.postId))}}
              />}
            </Grid>
            <Grid>
              {props.checkMember && 
              <RiEdit2Line 
              size="20px"
              cursor='pointer'
              onClick={()=>{history.push('/edit')}}
              />}
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
          <Text 
          margin="0 0 11px 0"
          >
            좋아요 <span style={{fontWeight: "bold"}}>{props.totalLike}</span>개
          </Text>
        </Grid>

        {/* 원본/ 내용 길어지면 깨짐 */}
        {/* <Grid flex_row padding="0 14px 4px 14px">
          <Text 
          margin="0px" 
          bold 
          padding="0 5px 0 0"
          >{props.writer}
          </Text>
          <Text margin="0px">{props.content}</Text>
        </Grid> */}

        <Grid flex_row padding="0 14px 4px 14px">
          <Text 
          margin="0px" 
          // bold 
          // padding="0 5px 0 0"
          >
          <span style={{fontWeight: "bold", padding: "0 5px 0 0"}}>{props.writer}</span>
          <span style={{fontWeight: "none"}}>{props.content}</span>
          </Text>
        </Grid>

        <Grid is_flex padding=" 0px 14px">
          <Text 
          _onClick={()=>{history.push('/comment/:postId')}} 
          margin="0px" 
          color="rgba(var(--f52,142,142,142),1)"
          >댓글 {props.totalComment}개 모두 보기
          </Text>
          {/* <CommentWrite post_id={props.user_info.user_name}/> */}
          {/* <CommentList post_id={props.user_info.user_name}/> */}
        </Grid>

      </Grid>
    </React.Fragment>
  );
};
 

Post.defaultProps = {
  writer: "Robert Downey Jr.",
  user_profile: "https://img.insight.co.kr/static/2018/06/08/700/oaytfz0m123a56r373eh.jpg",
  image_url: "https://cdn.vox-cdn.com/thumbor/M2rjDALxvNDv3yqeYuIdL3spabo=/0x0:2000x1333/1200x675/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/65939918/171109_08_11_37_5DS_0545__1_.0.jpg",
  content: "NewYork NewYork",
  heartLike: false,
  totalLike: 3,
  totalComment: 10,
  checkMember: false,
};


export default Post;