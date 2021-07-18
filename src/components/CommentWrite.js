import React from "react";
import styled from "styled-components";

import {Grid, Input, Button, Image, Text} from "../elements";

const CommentWrite = (props) => {

  const {user_profile, user_name, user_id, post_id, contents, insert_dt} = props;

    return (
      <React.Fragment>
        <Section>
        <Outter>

        <ImageBox>
        {/* <img crossorigin="anonymous" data-testid="user-avatar" draggable="false" src="https://instagram.fada2-1.fna.fbcdn.net/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=instagram.fada2-1.fna.fbcdn.net&amp;_nc_ohc=90m_yHaPIAkAX89z4BE&amp;edm=ABfd0MgBAAAA&amp;ccb=7-4&amp;oh=d87a7fe92609867269f78c4afe16eb24&amp;oe=60FA260F&amp;_nc_sid=7bff83&amp;ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-4"/> */}
        <Image/>
        </ImageBox>
        
        <Form>
          <InputComment placeholder="댓글 달기.." />
          <ButtonComment>게시</ButtonComment>
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
  user_profile: "",
  user_name: "mean0",
  user_id: "",
  post_id: 1,
  contents: "귀여운 고양이네요!",
  insert_dt: '2021-01-01 19:00:00'
}

CommentWrite.defaultProps = {
  writer: "Robert Downey Jr.",
  user_profile: "https://img.insight.co.kr/static/2018/06/08/700/oaytfz0m123a56r373eh.jpg",
  image_url: "https://cdn.vox-cdn.com/thumbor/M2rjDALxvNDv3yqeYuIdL3spabo=/0x0:2000x1333/1200x675/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/65939918/171109_08_11_37_5DS_0545__1_.0.jpg",
  contents: "NewYork NewYork",
  comment_cnt: 10,
};



export default CommentWrite;