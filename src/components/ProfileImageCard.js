import React from "react";
import {Grid, Image, Text} from "../elements";
import styled from "styled-components";

import {useSelector, useDispatch} from "react-redux";
import { history } from "../redux/configureStore";
import {actionCreators as propfileActions} from "../redux/modules/comment"

const ProfileImageCard = (props) => {
    const dispatch = useDispatch();
    const {history} = props;
    const {writer} = props;
    const {imageUrl} = props;
    console.log(props);
    console.log(writer)
    const loading = () => {
        dispatch(propfileActions.profile_loadingAPI(writer));
      }

    return (
        <React.Fragment>
            <div>
            {props.nickname}
            {props.imageUrl}
            </div>

        </React.Fragment>
    )
}

export default ProfileImageCard;