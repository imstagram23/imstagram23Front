import React from "react";
import styled from "styled-components";
import {Grid, Image, Text, Button, Input} from "../elements";
import { history } from "../redux/configureStore";
import {useSelector} from "react-redux";

import CommentWrite from "../components/CommentWrite";
import Post from "../components/Post";
import Header from "../components/Header";
import Comment from "../components/Comment";

const CommentList = (props) => {
    
    const comment_list = useSelector((state) => state.comment.list);

    return (
        <React.Fragment>
            <Header/>
            
            <Grid padding="57px 0px">
            <CommentWrite/>
            <Comment />
            {/* <CommentDetail>
            <Text margin="0px">{props.contents}</Text>
            </CommentDetail> */}
            <hr style={{ width:"90%"}}/>
            <Comment/>
            
            </Grid>
        </React.Fragment>
    )
}

// const CommentDetail = styled.div`
//     border: 1px solid black;
//     height: auto;
// `;

CommentList.defaultProps = {
    contents: "어쩌고 저쩌고"
  };

export default CommentList;