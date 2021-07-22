import React from "react";
import styled from "styled-components";

import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";


const HeartButton = (props) => {

  // const heartIcon = props.heartLike === true ? <FcLike size="22px"/> : <FcLikePlaceholder size="22px"/>;

  if (props.heartLike) {
    return (
      <React.Fragment>
        <FcLike onClick={props._onClick} size="22px"/>
      </React.Fragment>
    );
  }else{
    return(
        <React.Fragment>
          <FcLikePlaceholder onClick={props._onClick} size="22px"/>
        </React.Fragment>
      )
    }

//   return (
//     <React.Fragment>
//       <Heart onClick={props._onClick} heartIcon={heartIcon}/>
//     </React.Fragment>
//   )
};

HeartButton.defaultProps = {
  _onClick: () => {},
  heartLike: false,
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
