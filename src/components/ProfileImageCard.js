import React from "react";
import {Grid, Image, Text} from "../elements";
import styled from "styled-components";

import {useSelector, useDispatch} from "react-redux";
import { history } from "../redux/configureStore";
import {actionCreators as propfileActions} from "../redux/modules/comment"

const ProfileImageCard = (props) => {
    const dispatch = useDispatch();
    const {history} = props;
    const {nickname} = props;
    const {imageUrl} = props;

    const loading = () => {
        dispatch(propfileActions.loadingAPI(nickname));
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