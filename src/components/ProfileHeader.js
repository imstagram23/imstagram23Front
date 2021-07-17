import React from "react";

import {Text, Input, Grid, Button, Image} from "../elements/index";
import styled from 'styled-components';

const ProfileHeader = (props) => {

  // 그리드(헤더(이미지,유저이름),
  // 상태메세지, 게시물표시(각박스, 텍스트(스펜), 게시물)

    // if (post_data.user) {
    return (
        <React.Fragment>
          <Grid is_flex align-items="center">
            <Container>
            <Profile>
              <ImageBox>
              <Image
                shape="circle"
                size="77"
                margin="10px 5%"
                box-sizing="border-box"
                width="30%"
                border="1px solid blue"
                flex="1"
                src={props.user_info.user_profile}

              />
              </ImageBox>
              <Ui>
                <Li1><List>게시물</List><List>77</List></Li1>
                <Li2><List>팔로워</List><List>99</List></Li2>
                <Li3><List>팔로우</List><List>88</List></Li3>
              </Ui>
              
            </Profile>
            <TextContainer>
                <ProfileName>{props.user_info.user_name}</ProfileName>
                <Status>상태메세지</Status>
            </TextContainer>
            </Container>
          </Grid>
          
        </React.Fragment>
      );
    // } else {
    //   return (
    //     <React.Fragment>
    //       <Container>
    //         <Grid width="291px" height="150px">
    //           <Image
    //             cursor="Pointer"
    //             shape="circle"
    //             size="150"
    //             display="block"
    //             margin-left="auto"
    //             margin-right="auto"
    //           />
    //         </Grid>
    //         <TextContainer>
    //           <IdButton>
    //             <Text size="60" bold>
    //             </Text>
    //             <Button
    //               _onClick={() => {
                   
    //               }}
    //               width="80px"
    //             >
    //               게시글 작성
    //             </Button>
    //           </IdButton>
    //           <Text size="60" bold>
              
    //           </Text>
    //           <Text bold>안녕!</Text>
    //         </TextContainer>
    //       </Container>
    //     </React.Fragment>
    //   );
// }
  
    // const user_info = useSelector((state) => state.post.list);
    // console.log(user_info);
};
  const Container = styled.div`
    width: 300px;
    flex-direction: row;
    border: 1px solid black;
    padding: 5px;
    align-items: center;
    margin: 20px auto;
  `;

  const Profile = styled.div`
    width: 100%;
    height: 40%;
    margin: 20px auto;
    display: flex;
    border: 1px solid purple;
  `;
  
  const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    border: 1px solid orange;
    
  `;

  const ImageBox = styled.div`
  border:1px solid black;
  display:flex;
  margin: 10px;
  width: 30%;
  `;

  const Ui = styled.div`
  border: 1px solid red;
  width: 70%;
  box-sizing: border-box;
  hegiht: 50px;
  margin: 20px auto;
  `;

  const Li1 = styled.div`
  border: 1px solid red;
  float: left;
  width: 30%;
  hegiht: 10px;
  box-sizing: border-box;
  `;
  
  const Li2 = styled.div`
  border: 1px solid green;
  float: left;
  margin-left: 5%;
  width:30%;
  box-sizing: border-box;
  `;
  
  const Li3 = styled.div`
  border: 1px solid blue;
    float: right;
    width:30%;
    box-sizing: border-box;
  `;

  const List = styled.div`
  font-size: 15px;
  text-align: center;
  margin-top: 10px;
  `;

  const ProfileName = styled.div`
  margin: 10px 10px;
  font-size: 15px;
  `;

  const Status = styled.div`
  margin: 10px 10px;
  font-size: 15px;
  `;

  ProfileHeader.defaultProps = {
    user_info: {
      user_name: "user_name",
      user_profile: "https://image5jvqbd.fmkorea.com/files/attach/new/20200816/486616/657118072/3039288745/99b983892094b5c6d2fc3736e15da7d1.jpeg",
    },
  
  };

export default ProfileHeader;