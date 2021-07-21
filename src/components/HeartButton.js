import React from "react";
import styled from "styled-components";

import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";


const HeartButton = (props) => {

  const heartIcon = props.heartLike === true ? <FcLike size="22px"/> : <FcLikePlaceholder size="22px"/>;

  return (
    <React.Fragment>
      <Heart 
      onClick={props._onClick} heartIcon={heartIcon}/>
    </React.Fragment>
  );
};

const Heart = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  /* background: ${(props) => props.heartIcon};
  background-size: cover; */
  cursor: pointer;
  margin: 0px;
`;

export default HeartButton;
