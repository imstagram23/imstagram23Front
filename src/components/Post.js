import React from "react";
import { history } from "../redux/configureStore";

import {Grid, Image, Text, Button, Input} from "../elements";

import HeartButton from "./HeartButton";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";

import { MdDelete } from "react-icons/md";
import { RiEdit2Line } from "react-icons/ri";

import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const Post = (props) => {
  const dispatch = useDispatch();
  // console.log(props);
  
  // const [like, setLike] = React.useState(false);
  // const [comment, setComment] = React.useState();

  const likeToggle = () => {
    dispatch(postActions.likeToggleDB(props.postId, props.heartLike))
  }

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
              _onClick={() => {history.push(`/memberpage/${props.nickname}`)}}
              >{props.writer}
            </Text>
          </Grid >

          <Grid is_flex width="auto" padding="0 14px" >
            <Grid padding="0 5px">
              <MdDelete 
              size="20px"
              cursor='pointer'
              // onClick={()=>{console.log("삭제!")}}
              
              onClick={(e)=>{
                // 이벤트 캡쳐링과 버블링 막기

                e.preventDefault();
                // 이벤트 버블링 막기
                // 한 요소에 이벤트 발생하면 그 요소에 할당된 핸들러 동작 후, 이어서 부모 요소의 핸들러 동작
                // 가장 최상단의 조상 요소를 만날때까지 이 과정 반복.
                // 하지만 되도록이만 안막는게 좋음.
                // 사람들이 페이지에서 어디를 클릭했는지 등의 행동 패턴을 분석하기 위해서
                // window내에서 발생하는 클릭 이벤트 전부를 감지하기로 결정했다면,
                // stopPropagation으로 막아놓은 영역에선 분석 시스템 코드 작동하지 않음.
                // 따라서 버블링을 막아야 하는 경우라면 커스텀 이벤트 등으로 문제 해결할 것.
                e.stopPropagation();
                dispatch(postActions.deletePostDB(props.postId))}}
              />
            </Grid>

            {/* 내 게시글에만 수정버튼 보일 수 있게 */}
            <Grid> 
              {props.checkMember && <RiEdit2Line 
              size="20px"
              cursor="pointer"
              disabled=""
              onClick={()=>{history.push(`/edit/${props.postId}`)}}
              // onClick={(e)=>{dispatch(postActions.editPostDB(props.postId))}}
              />}              
            </Grid>

            {/* disabled 어떻게 먹이는거지? */}
            {/* <Grid> 
              <RiEdit2Line 
              size="20px"
              cursor="pointer"
              disabled={props.checkMember}
              onClick={()=>{history.push(`/edit/${props.postId}`)}}
              />           
            </Grid> */}

          </Grid>
        </Grid>

        <Grid>
            <Image 
            shape="rectangle" 
            margin="5px 0" 
            src={props.image_url}/>
        </Grid>

        <Grid padding="0px 14px">
          <HeartButton
          _onClick={likeToggle}
          ></HeartButton>
          
          {/* <HeartButton 
          // heartLike={props.heartLike}
          _onClick={likeToggle}
          ></HeartButton> */}
          {/* is_me들어가면 위에걸로 */}
          {/* <FcLikePlaceholder size="22px"/> */}

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
          _onClick={()=>{history.push(`/comment/${props.postId}`)}} 
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