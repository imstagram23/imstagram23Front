import React from "react";
import styled from "styled-components";
import { Text, Grid } from "./index";

import { history } from "../redux/configureStore";


const Input = (props) => {

  const { 
    label, 
    placeholder, 
    _onChange, 
    type, 
    multiLine, 
    value, 
    is_Submit, 
    onSubmit , 
    margin, 
    is_comment,
    border,
    color,
    radius,
    height,
    bg,

  } = props;

  if (is_comment) {
    return (
        <CommentInput 
        backgroundColor={bg}
        borderRadius={radius}
        margin={margin} 
        type={type} 
        placeholder={placeholder} 
        onChange={_onChange} 
        value={value}/>
    );
  };

  if (multiLine) {
    return (
      <Grid>
        <Text margin="0px">{label ? label : ""}</Text>
        <ElTextArea
          rows={10}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
        ></ElTextArea>
      </Grid>
    );
  };

  return (
    <React.Fragment>
      <Grid>
        <Text margin="0px">{label ? label : ""}</Text>
        {/* 다른 인풋에 value값이 없기때문에 코멘트 작성 인풋에 isSubmit을 줘서 코멘트 작성 인풋만 value라는 props를 넣어주기 위함 */}
        {is_Submit ? (
          <ElInput
            height={height}
            color={color}
            margin={margin}
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
            border={border}
            borderRadius={radius}
            onKeyPress={(e) => {
              if(e.key === 'Enter'){
                onSubmit(e);
              }
            }}
          />
        ) : (
          <ElInput margin={margin} type={type} placeholder={placeholder} onChange={_onChange} />
        )}
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: "텍스트를 입력해주세요.",
  is_Submit: false,
  _onChange: () => {},
  type: "text",
  value: "",
  onSubmit: () => {},
  margin:false,
  is_comment: false,
  width: false,
  border: false,
  color: false,
  borderRadius: false,
  height: false,
  bg: false,
};

//작성페이지 멀티라인 수정
const ElTextArea = styled.textarea`
  border: none;
  width: 100%;
  padding: 12px 4px;
  box-sizing: border-box;
  resize: none;
`;

const ElInput = styled.input`
${(props) => props.margin? `margin:${props.margin}` : ''};
  width: 100%
  ${(props) => props.border? `border:${props.border}` : ''};
  padding: 12px 4px;
  box-sizing: border-box;
  ${(props) => props.height? `height:${props.height}` : ''};
`;

const CommentInput = styled.input`
${(props) => props.margin? `margin:${props.margin}` : ''};
  border-style:none;
${(props) => props.width? `width:${props.width}` : ''};
${(props) => props.borderRadius? `border-radius:${props.borderRadius}` : ''};
  padding: 12px 4px;
  box-sizing: border-box;
`;

export default Input;