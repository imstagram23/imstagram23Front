import React from "react";
import styled from "styled-components";
import { Grid, Text, Image, Button, Input } from "../elements";

import Header from "../components/Header";
import Upload from "../shared/Upload";

const PostWrite = (props) => {

    return (
        <React.Fragment>
            <Header/>

            <Grid padding="75px 0px">
                <Grid padding="20px 14px">
                    <Upload />
                </Grid>

                <Grid>
                    <Image 
                    shape="rectangle" 
                    margin="5px 0 10px 0" 
                    src={props.image_url}/>
                </Grid>

                <Grid flex_row padding="4px 14px">
                    <Input 
                    multiLine margin="0px" 
                    _onChange={() => {console.log("작성인풋")}}>
                        {props.contents}</Input>
                </Grid>

                <Grid padding="4px 14px">
                    <Button 
                    is_upload 
                    _onClick={() => {console.log("업로드완료")}}>
                        작성완료</Button>
                </Grid>

            </Grid>
        </React.Fragment>
    )
}

PostWrite.defaultProps = {
    // user_info: {
    //   user_name: "user_name",
    //   user_profile: "https://image5jvqbd.fmkorea.com/files/attach/new/20200816/486616/657118072/3039288745/99b983892094b5c6d2fc3736e15da7d1.jpeg",
    // },
    image_url: "https://media.istockphoto.com/photos/round-podium-or-pedestal-with-blue-background-picture-id1226478932?k=6&m=1226478932&s=170667a&w=0&h=NOFRuuS4sWeCA1LK6lro51uZXfpzPRBHh54ckqCEWw8=",
    contents: "",
    // deleteButton: "delete",
    // editButton: "edit",
    comment_cnt: 10,
  };

export default PostWrite;