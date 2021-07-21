import React from "react";
import styled from "styled-components";

import {Text} from "../elements"; 

import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";


const HeartButton = (props) => {

  // const {checkMember} = props;

  const heartIcon = props.heartLike? <FcLike size="22px"/> : <FcLikePlaceholder size="22px"/>;

  return (
    <React.Fragment>
      <Heart onClick={props._onClick} heartIcon={heartIcon}></Heart>
    </React.Fragment>
  );
};

HeartButton.defaultProps = {
  checkMember: false,
}

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
