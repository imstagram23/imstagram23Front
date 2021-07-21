import React from "react";

import styled from "styled-components";
import {Grid, Input, Button, Image, Text} from "../elements";

import {actionCreators as postActions} from "../redux/modules/post"
import { actionCreators as commentActions} from "../redux/modules/comment";
import {useDispatch, useSelector} from "react-redux";

const CommentWrite = (props) => {
    const dispatch = useDispatch();
    const {history} = props;
    const [content, setContent] = React.useState('');
    const {postId} = props;

    const addComment = () => {
      dispatch(commentActions.addCommentAPI(content, postId));
    }

    const changeContents = (e) => {
      setContent(e.target.value);
    }

    return (
      <React.Fragment>
        <Section>
        <Outter>

        {/* <ImageBox> */}
        <Grid is_flex width="auto" margin="0px 0px 0px 25px">
              <Image size="36" shape="circle" src={props.user_profile}/>
        {/* <Image size="40"
               shape="circle" 
               src={props.user_profile}/> */}
        </Grid>
        {/* </ImageBox> */}
        
        <Form>
          <InputComment
          placeholder="댓글 달기.."
          onChange={changeContents}
           />
          <ButtonComment
          onClick={addComment}
          >게시</ButtonComment>
        </Form>

        </Outter>
        </Section>
      </React.Fragment>

    );
}

const Section = styled.section`
    border: 0;
    padding: 0;
    top: -2px;
    width: 100%;
    border-top: 1px solid rgba(var(--ce3,239,239,239),1);
    color: rgba(var(--f52,142,142,142),1); 
    flex-shrink: 0;
    font-size: 14px;
    line-height: 18px;
    min-height: 56px;
    display:flex;
`;

const Form = styled.form`
    background-color: rgba(var(--d87,255,255,255),1);
    border: 1px solid rgba(var(--b6a,219,219,219),1);
    border-radius: 30px;
    margin-right: 16px;
    padding: 12px 20px;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-direction: row;
    -webkit-box-flex: 1;
    flex-grow: 1;
    flex-shrink: 1;
    position: relative;
    margin-left: 25px;
    width: 60px;
`;

const Outter = styled.div`
align-items: center;
background-color: rgba(var(--bb2,239,239,239),1);
border-bottom: 1px solid rgba(var(--b6a,219,219,219),1);
flex-flow: row wrap;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-webkit-box-pack: start;
justify-content: flex-start;
padding: 8px 0;
display:flex;
width: 100%;
`;

const ImageBox = styled.span`
width: 32px;
height: 32px;
    background-color: rgba(var(--b3f,250,250,250),1);
    border-radius: 50%;
    box-sizing: border-box;
    display: block;
    -webkit-box-flex: 0;
    flex: 0 0 auto;
    overflow: hidden;
    position: relative;
    margin: 0px 0px 0px 25px;
    display: flex;
`;


const InputComment = styled.input`
-webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    text-align: start;
    appearance: auto;
    -webkit-rtl-ordering: logical;
    flex-direction: column;
    cursor: text;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    column-count: initial !important;
    margin: 0em;
    font: 400 13.3333px Arial;
    border-width: 1px;
    border-style: solid;
    display:flex;
    width: 160px;
    border: none;
    outline: none;
    margin-left: 10px;
`;

const ButtonComment = styled.button`
    border: 0;
    color: #0095f6;
    color: rgba(var(--d69,0,149,246),1);
    display: inline;
    padding: 0;
    position: relative;
    display:flex;
    background-color: transparent;
    margin-left: 25px;
`;

CommentWrite.defaultProps = {
  writer: "Robert Downey Jr.",
  user_profile: "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg",
};

export default CommentWrite;