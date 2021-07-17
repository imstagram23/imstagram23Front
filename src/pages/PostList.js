import React from "react";
import Grid from "../elements/Grid"
import Header from "../components/Header";
import Post from "../components/Post";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import CommentWrite from "../components/CommentWrite";


const PostList = (props) => {
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.post.list);
    
    // React.useEffect(() => {
    //     //  게시글이 2개 미만일 때는 getPostFB를 호출해서 목록을 불러옵니다.
    //     if (post_list.length < 2) {
    //     dispatch(postActions.getPostFB());
    //     }
    // }, []);


    return(
        <React.Fragment>
            <Header/>

            <Grid padding="75px 0px">
                <Post/>
            </Grid>
            {/* <Grid padding="75px 0px">
                {post_list.map((p, idx) => {
                    return <Post key={p.id} {...p}/>
                })}
            </Grid> */}

        </React.Fragment>
    )
}

export default PostList;