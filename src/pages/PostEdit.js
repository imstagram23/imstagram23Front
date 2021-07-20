import React from "react";
import { Grid, Text, Image, Button, Input } from "../elements";

import Header from "../components/Header";
import Upload from "../shared/Upload";
import CommentWrite from "../components/CommentWrite";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image"

const PostEdit = (props) => {
    // 작성완료 버튼에 온클릭 넣어주기 위해서 임포트
    // postActions라는 별칭 만들어서 actionCreators로 온클릭에 넣어주기
    // 넣을때 길어지면 함수로 만들어서 함수명만 {}안에 넣기
    const dispatch = useDispatch();
    const preview = useSelector((state) => state.image.preview);
    const post_list = useSelector((state) => state.post.list);

    // match.params는 있는데 그 안에 id는 없다?
    // console.log(props);

    const post_id = props.match.params.id;

    const {history} = props;

    let _post = post_list.find((p) => p.id === post_id);

    // 잘 나옴. 근데 새로고침 하면 리덕스 날아가서 undefined 뜸
    console.log(_post);

    // useState사용해서 기존 데이터 가져오기
    const [contents, setContents] = React.useState(_post? _post.content : "");
    const [image, setImage] = React.useState(_post? _post.imageUrl : "");
    console.log(image);

    React.useEffect(() => {
        if (!_post) {
            console.log("포스트 정보가 없어요!");
            history.goBack();
      
            return;
          }

        dispatch(imageActions.setPreview(_post.imageUrl))
    }, [])

    const changeContents = (e) => {
        setContents(e.target.value);
        // 인풋의 onChange에 넣어주고 콘솔 찍어보기
        // 바뀌는 내용이 바로 바로 오게 만든것!
    }
    // console.log(contents);

    // const changeImage = (file) => {
    //     setImage(file);
    //     console.log(file);
    // }
    // console.log(image);

    // 게시글 수정 함수(post모듈에서 editPostDB부분의 필드이름으로 동일하게 넣어줌)
    const editPost = () => {
        dispatch(postActions.editPostDB(post_id, {content: contents}));
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
                    // _onChange={() => {console.log("수정인풋")}}
                    _onChange={changeContents}
                    >{props.contents}</Input>
                </Grid>

                <Grid padding="4px 14px">
                    <Button 
                    is_upload 
                    // _onClick={() => {console.log("업로드완료")}}
                    _onClick={editPost}
                    >수정완료</Button>
                </Grid>
            
            </Grid>
        </React.Fragment>
    )
}

PostEdit.defaultProps = {
    image_url: "https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg",
    contents: "",
  };

export default PostEdit;