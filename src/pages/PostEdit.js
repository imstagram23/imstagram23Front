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
                
                <Grid>
                    <Image 
                    shape="rectangle" 
                    margin="5px 0 10px 0" 
                    src={props.image_url}/>
                </Grid>

                <Grid flex_row padding="4px 14px">
                    <Input 
                    multiLine margin="0px" 
                    _onChange={() => {console.log("수정인풋")}}>
                        {props.contents}</Input>
                </Grid>

                <Grid padding="4px 14px">
                    <Button 
                    is_upload 
                    _onClick={() => {console.log("수정완료")}}>
                        수정완료</Button>
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
    image_url: "https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg",
    contents: "",
    // deleteButton: "delete",
    // editButton: "edit",
    comment_cnt: 10,
  };

export default PostWrite;