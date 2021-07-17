import React from "react";
import { Grid, Text, Image, Button, Input } from "../elements";

import Header from "../components/Header";
import Upload from "../shared/Upload";
import CommentWrite from "../components/CommentWrite";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const PostWrite = (props) => {
    // 작성완료 버튼에 온클릭 넣어주기 위해서 임포트
    // postActions라는 별칭 만들어서 actionCreators로 온클릭에 넣어주기
    // 넣을때 길어지면 함수로 만들어서 함수명만 {}안에 넣기
    const dispatch = useDispatch();
    // const is_login = useSelector((state) => state.user.is_login);
    const {history} = props;

    // useState사용해서 인풋의 텍스트 내용 저장
    const [contents, setContents] = React.useState();

    const changeContents = (e) => {
        setContents(e.target.value);
        // 인풋의 onChange에 넣어주고 콘솔 찍어보기
        // 바뀌는 내용이 바로 바로 오게 만든것!
    }
    // console.log(contents)

    const addPost = () => {
        dispatch(postActions.addPostDB(contents));
    }

    // 로그인 했을때만 작성할 수 있도록
    // if(!is_login){
    //     return (
    //         <Grid>
    //             <Text margin="100px 0" padding="14px">로그인 후 이용해 주세요!</Text>
    //             {/* 뒤로가기 했을 때 다시 이 페이지로 들어오는것 방지하기 위해 push대신 replace */}
    //             <Button _onClick={() => {history.replace('/login')}}로그인 하러가기></Button>
    //         </Grid>
    //     )
    // }

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
                    multiLine 
                    value={contents}
                    placeholder="내용을 입력해 주세요:)"
                    margin="0px" 
                    // _onChange={() => {console.log("작성인풋")}}
                    _onChange={changeContents}
                    >{props.contents}</Input>
                </Grid>

                <Grid padding="4px 14px">
                    <Button 
                    is_upload 
                    // _onClick={() => {console.log("업로드완료")}}
                    _onClick={addPost}
                    >작성완료</Button>
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