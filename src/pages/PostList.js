import React from "react";
import Grid from "../elements/Grid"
import Header from "../components/Header";
import Post from "../components/Post";

import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";
import CommentWrite from "../components/CommentWrite";
import InfinityScroll from "../shared/InfinityScroll";
import user from "../redux/modules/user";


const PostList = (props) => {
    const dispatch = useDispatch();
    const post_list = useSelector((state) => state.post.list);
    // 빈배열 잘 떴다
    // console.log(post_list);
    const is_loading = useSelector((state) => state.post.is_loading);
    const user_info = useSelector((state) => state.user.user);
    const paging = useSelector((state) => state.post.paging);

    // 이 컴포넌트가 생겼을 때 한번만 가져오면 됨 (,뒤에 []빈배열 넣어주면 한번만 가져옴)
    // 서버나 가짜서버(제이슨서버), 파이어베이스 연동 후 post모듈의 콘솔 확인
    React.useEffect(() => {
        // 게시글이 2개 미만일 때는 getPostDB를 호출해서 목록을 불러오기
        // 게시글이 있을때는 새로 리스트를 불러오지 않음
        // 이미 있던 리덕스에서 새 포스트를 제일 앞에 붙임
        // 최신순으로 정렬하면 되는거 아님? -> 무한스크롤
        if (post_list.length < 2) {
            dispatch(postActions.getPostDB());
        }
    }, []);


    return(
        <React.Fragment>
            <Header/>

            {/* <Grid padding="75px 0px">
                <Post/>
            </Grid> */}
            {/* Post에 게시글 정보 넘겨주는 것까지 끝 */}
            {/* 아무것도 안나오는 이유는 데이터가 없으니까~ 서버랑 연결해야함*/}
            {/* p에는 게시글에 대한 모든 정보 들어감 */}

            <InfinityScroll
                callNext={() => {
                    console.log("next!!!");
                    dispatch(postActions.getPostDB(paging.next));
                }}
                is_next={paging.next ? true : false}
                loading={is_loading}
            >
                <Grid padding="75px 0px">
                    {post_list.map((p, idx) => {
                        // console.log(p);
                        return <Post key={idx} {...p} image_url={p.imageUrl}/>
                    })}
                </Grid>
            </InfinityScroll>
            
            {/* <button onClick={() => {
                dispatch(postActions.getPostDB(paging.next));
            }}>추가로드</button> */}

        </React.Fragment>
    )
}

export default PostList;