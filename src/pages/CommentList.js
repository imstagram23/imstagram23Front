import React from "react";
import styled from "styled-components";
import {Grid, Image, Text, Button, Input} from "../elements";
import { history } from "../redux/configureStore";
import {useSelector, useDispatch} from "react-redux";
import {actionCreators as commentActions} from "../redux/modules/comment";

import CommentWrite from "../components/CommentWrite";
import comment from "../components/Comment";
import Header from "../components/Header";
import Comment from "../components/Comment";


const CommentList = (props) => {
    const dispatch = useDispatch();
    const content_list = useSelector((state) => state.comment.list);
    const postId = props.match.params.postId;
    
    React.useEffect(() => {
        dispatch(commentActions.setCommentAPI(postId));
    }, []);

    return (
        <React.Fragment>
            <Header/>
            
            <Grid padding="57px 0px">

            <CommentWrite postId={postId}/>
            <hr style={{ width:"90%"}}/>
            {content_list.map((p, idx) => {
                return <Comment key={idx} {...p}/>
             })}

            </Grid>
        </React.Fragment>
    )
}
export default CommentList;