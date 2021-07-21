import React from "react";
import styled from "styled-components";

import Button from "../elements/Button";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import Header from "../components/Header"


const NotFound = (props) => {
    console.log(props);

    return (
        <React.Fragment>
            <Header/>
            <Wrapper>
                
                <Grid >
                    <Text size="16px" bold>주소가 올바르지 않아요!</Text>
                </Grid>

                <Button
                    width="10em"
                    is_upload
                    _onClick={() => { props.history.goBack(); }}
                >뒤로가기</Button>
            </Wrapper>
        </React.Fragment>
    )

};

const Wrapper = styled.div`
    padding: 5em;
    text-align: center;
`;

export default NotFound;