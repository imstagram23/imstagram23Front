import React from "react";

import {Text, Input, Grid, Button} from "../elements/index";
import styled from 'styled-components';

const Signup = (props) => {

    const { history } = props;

    console.log(props);

    return (
        <React.Fragment>
            <Grid center > 
            <div>
                <div>
                    <div>인스타그램</div>
                    <div>
                    <Text size="17px" bold color="#8E8E8E">친구들의 사진과 동영상을 보려면<br/> 가입하세요.</Text>
                    <Button
                    _onClick={() => {
                        history.replace("/");
                    }}
                    >
                    Facebook으로 로그인
                    </Button>
                    <div>- 또는 -</div>
                    <Input placeholder="이메일 주소"></Input>
                    <Input placeholder="사용자 이름" ></Input>
                    <Input placeholder="비밀번호"></Input>
                    <Input placeholder="비밀번호 확인"></Input>
                    </div>
                    <Button margin="8px 40px">가입</Button>
                </div>
                    <div>
                        <div>계정이 있으신가요? 로그인</div>
                    </div>
                    <div>
                    <Button flex>앱을 다운로드하세요.</Button>
                    <Button>앱스토어 / 구글플레이</Button>
                    </div>
                    <div>
                        <div>소개 블로그 채용정보 도움말 API 개인정보</div>
                        <div>한국어 / 2021 instargram</div>
                    </div>
                </div>
            </Grid>
        </React.Fragment>
    )
}

export default Signup;