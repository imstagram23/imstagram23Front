import React from "react";
import styled from "styled-components";


 const Button = (props) => {
    const { text, _onClick, children, margin, width, padding, } = props;
   
    const styles = {
        margin: margin,
        width: width,
        padding: padding,
      };

    return (
        <React.Fragment>
            <SignupButton {...styles} onClick={_onClick}>
            {text? text: children}
            </SignupButton>

        </React.Fragment>
    )
    };

Button.defaultProps = {
    text: false,
    children: null,
    _onClick: () => {},
    is_float: false,
    margin: false,
    width: "100%",
    padding: "12px 0px",
  };

const SignupButton = styled.button`
  background: #0095f6;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #fff;
  height: 48px;
  padding: 5px 9px;
  text-align: center;
  display: block;
  position: relative;
  user-select: none;
  width: auto;
  font-weight: 600;
  cursor: pointer;
  box-sizing: border-box;
  text-transform: inherit;
  text-overflow: ellipsis;
  appearance: none;
  margin: 10px auto;
  width: 270px;
  height: 31.33px;
`;


export default Button;