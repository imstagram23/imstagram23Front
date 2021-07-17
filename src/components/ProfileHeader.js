import React from "react";

import {Text, Input, Grid, Button, Image} from "../elements/index";
import styled from 'styled-components';

const ProfileHeader = (props) => {

  // 그리드(헤더(이미지,유저이름),
  // 상태메세지, 게시물표시(각박스, 텍스트(스펜), 게시물)

    // if (post_data.user) {
    return (
        <React.Fragment>
          <Container>
            <Profile>
              <Image
                shape="circle"
                size="77"
                margin="0px 5%"
                box-sizing="border-box"
                width="30%"
                border="1px solid blue"
                flex="1"

              />
              <Ui>
                <Li><List>게시물</List><List>77</List></Li>
                <Li><List>팔로워</List><List>99</List></Li>
                <Li><List>팔로우</List><List>88</List></Li>
              </Ui>
              
            </Profile>
            <TextContainer>
              <div>
                <h1>유저이름</h1>
                <h5>상태메세지</h5>
                <button>프로필 편집</button>
              </div>
            </TextContainer>
          </Container>
          
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
    width: 550px;
    height: 300px;
    flex-direction: row;
    border: 1px solid black;
    padding: 30px;
  `;

  const Profile = styled.div`
    width: 90%;
    margin: auto;
    display: flex;
    border: 1px solid purple;
  `;
  
  const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 150px;
    border: 1px solid orange;
  `;

  const Ui = styled.ul`
  border: 1px solid red;
  flex:1;
  width:30%;
  box-sizing: border-box;
  hegiht: 70px;
  `;

  const Li = styled.li`
  border: 1px solid green;
  list-style: none;
  width: 100%;
  margin: 0px;
  `;

  const List = styled.span`
  font-size: 15px;
  `;
export default ProfileHeader;