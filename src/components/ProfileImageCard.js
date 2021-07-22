import React from "react";
import {Grid, Image, Text} from "../elements";
import styled from "styled-components";

import {useSelector, useDispatch} from "react-redux";
import { history } from "../redux/configureStore";
import {actionCreators as propfileActions} from "../redux/modules/comment"


const ProfileImageCard = (props) => {
      
    return (
        <React.Fragment>
            <Container>
            <Div></Div>
            </Container>
            
        </React.Fragment>
    )
}

const Container = styled.div`
grid-template-rows: repeat(3, minmax(100px, auto));
grid-template-columns: repeat(3, 1fr);
display: grid;
align-items: stretch;
place-items: center start;
border: 1px solid black;
width: 90%;
height: auto;
`;

const Div = styled.div`
z-index: 1;
align-content: stretch;
justify-content: stretch;
border: 1px solid blue;
width: 100%;
height: 100%;
`;

export default ProfileImageCard;