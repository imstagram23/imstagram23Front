import React from "react";
import styled from "styled-components";

import {Text} from "../elements"; 

import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";

// 하트 버튼은 일단 모양새만 잡아줄거예요!
const HeartButton = (props) => {

  const heartIcon = props.is_like? <FcLike size="22px"/> : <FcLikePlaceholder size="22px"/>;

  return (
    <React.Fragment>
      <Heart onClick={props._onClick} heartIcon={heartIcon}></Heart>
    </React.Fragment>
  );
};

const Heart = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  background: url(${(props) => props.icon_url});
  background-size: cover;
  cursor: pointer;
  margin: 0px;
`;

export default HeartButton;
