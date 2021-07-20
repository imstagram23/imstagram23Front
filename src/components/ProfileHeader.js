import React from "react";

import {Text, Input, Grid, Button, Image} from "../elements/index";
import styled from 'styled-components';

const ProfileHeader = (props) => {

    // if (post_data.user) {
    return (
        <React.Fragment>
          <Grid is_flex align-items="center" padding="50px 0px 10px 0px">
            <Container>
              
              <UserName>
                <Select type="select" value="">
                  <Option value="">{props.writer}</Option>
                  <Option>로그아웃</Option>
              </Select>
              </UserName>
              
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
                src={props.user_profile}

              />
              </ImageBox>
              <Ui>
                <Li1><List>77</List><List>게시물</List></Li1>
                <Li2><List>88</List><List>팔로워</List></Li2>
                <Li3><List>99</List><List>팔로우</List></Li3>
              </Ui>
              
            </Profile>
            <TextContainer>
                <Status> (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧)</Status>
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
    padding: 5px;
    align-items: center;
    margin: 5px auto;
    
  `;

  const UserName = styled.div`
  font-size: 30px;
  `;

  const Select = styled.select`
  width: auto;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  border: none;
  background: transparent;
  margin: 0px 0px 0px 7px;
  cursor: pointer;
 
  `;

  const Option = styled.option`
  font-size: 15px;
  border: none;
  
  `;

  const Profile = styled.div`
    
    width: 100%;
    height: 40%;
    display: flex;
  `;
  
  const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 100%;
    font-weight: bold;
    
  `;

  const ImageBox = styled.div`
  display:flex;
  margin: 10px;
  width: 30%;
  `;

  const Ui = styled.div`
  width: 70%;
  box-sizing: border-box;
  hegiht: 50px;
  margin: 20px auto;
  
  
  `;

  const Li1 = styled.div`
  float: left;
  width: 30%;
  hegiht: 10px;
  box-sizing: border-box;
  `;
  
  const Li2 = styled.div`
  float: left;
  margin-left: 5%;
  width:30%;
  box-sizing: border-box;
  `;
  
  const Li3 = styled.div`
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
  margin: 0px 10px 5px 10px;
  font-size: 15px;
  padding: 0px 15px 0px 15px;
  width: auto;
  `;

  ProfileHeader.defaultProps = {
    writer: "Robert Downey Jr.",
    user_profile: "https://img.insight.co.kr/static/2018/06/08/700/oaytfz0m123a56r373eh.jpg",
    image_url: "https://cdn.vox-cdn.com/thumbor/M2rjDALxvNDv3yqeYuIdL3spabo=/0x0:2000x1333/1200x675/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/65939918/171109_08_11_37_5DS_0545__1_.0.jpg",
    content: "NewYork NewYork",
    like: false,
    like_cnt: 3,
    comment_cnt: 10,
  };

export default ProfileHeader;