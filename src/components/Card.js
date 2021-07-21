import React from "react";
import styled from 'styled-components';

import {Grid, Image, Text} from "../elements";

import { useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

const Card = (props) => {
    const dispatch = useDispatch();
    
    console.log(props);

    return (
        <React.Fragment>
            <Grid>
            <Div>
            <Image 
            shape="rectangle" 
            margin="5px 0" 
            src={props.image_url}/>
            </Div>
            </Grid>

        </React.Fragment>
    )

};

const Div = styled.div`
grid-template-columns: repeat(3, 1fr); gap: 1vh;
`;

export default Card;