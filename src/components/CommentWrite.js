import React from "react";
import styled from "styled-components";

import {Grid, Input, Button} from "../elements";

const CommentWrite = () => {

    return (
      <React.Fragment>
        <Grid padding="16px" is_flex>
          <CommentWriteInput  placeholder="댓글 달기.." />
          <Button width="50px" margin="0px 2px 0px 2px">작성</Button>
          
        </Grid>
      </React.Fragment>
    );
}

const CommentWriteInput = styled.input`
height="15px"
width="100%"
border-radius= "10px";
`;

export default CommentWrite;