import React from "react";
import styled from "styled-components";
import {Grid, Image, Text, Button, Input} from "../elements";
import { history } from "../redux/configureStore";

import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";
import Post from "../components/Post";
import Header from "../components/Header";

const Comments = (props) => {

    return (
        <React.Fragment>
            <Header/>
            
            <Grid padding="57px 0px">
            <CommentWrite/>
            <CommentList />
            {/* <CommentDetail>
            <Text margin="0px">{props.contents}</Text>
            </CommentDetail> */}
            <hr style={{ width:"90%"}}/>
            <CommentList/>
            
            </Grid>
        </React.Fragment>
    )
}

// const CommentDetail = styled.div`
//     border: 1px solid black;
//     height: auto;
// `;

Comments.defaultProps = {
    contents: "어쩌고 저쩌고"
  };

export default Comments;