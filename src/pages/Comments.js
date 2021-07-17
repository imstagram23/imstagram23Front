import React from "react";
import styled from "styled-components";
import { Grid, Text, Image, Button } from "../elements/index";
import { history } from "../redux/configureStore";

import CommentList from "../components/CommentList";
import CommentWrite from "../components/CommentWrite";
import Post from "../components/Post";


const Comments = (props) => {

    return (
        <React.Fragment>
            <div style={{ border: "1px solid #E5E5E5" }}>
            <Text margin="0px">{props.contents}</Text>
            </div>
            <CommentList/>
            <CommentWrite/>
        </React.Fragment>
    )
}

const CommentDetail = styled.div`
    border: 1px solid black;
    height: 20px;
`;

Comments.defaultProps = {
    contents: "어쩌고 저쩌고",
  };

export default Comments;