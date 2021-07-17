import React from "react";
import { history } from "../redux/configureStore";

import {Grid, Image, Text, Button} from "../elements";
import HeartButton from "./HeartButton";

import { MdDelete } from "react-icons/md";
import { RiEdit2Line } from "react-icons/ri";
import { FcLikePlaceholder } from "react-icons/fc";


const Post = (props) => {
  
    return (
      <React.Fragment>
        
            <Grid is_flex >
              <Grid is_flex padding="0px 10px" width="auto">
                <Image 
                shape="circle" 
                margin="4px" 
                src={props.user_info.user_profile}/>
                <Text bold>{props.user_info.user_name}</Text>
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
    user_profile: "https://img.insight.co.kr/static/2018/06/08/700/oaytfz0m123a56r373eh.jpg",
  },
  image_url: "https://cdn.vox-cdn.com/thumbor/M2rjDALxvNDv3yqeYuIdL3spabo=/0x0:2000x1333/1200x675/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/65939918/171109_08_11_37_5DS_0545__1_.0.jpg",
  contents: "어쩌고 저쩌고",
  deleteButton: "delete",
  editButton: "edit",
  comment_cnt: 10,
};

export default Post;