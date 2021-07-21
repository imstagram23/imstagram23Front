import React from "react";
import styled from 'styled-components';
import {Text, Input, Grid, Button} from "../elements/index";
import {actionCreators as postActions} from "../redux/modules/comment";
import {useSelector, useDispatch} from "react-redux";

const CommentImageCard = (props) => {

    const post_list = useSelector((state) => state.post.list);

    const dispatch = useDispatch();
    console.log(dispatch)

    const imageUrl = props.match.params.imageUrl;


    React.useEffect(() => {
        dispatch(postActions.getPostDB(imageUrl));
    }, []);

    return (
        <React.Fragment>
            
            {post_list.map((p, idx) => {
                return <div key={idx} {...p}/>
             })}

        </React.Fragment>
    )
}