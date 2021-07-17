//작성페이지 프리뷰
import React from "react";
import Button from "../elements/Button";
import styled, { css } from "styled-components"

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";


const Upload = (props) => {
  const dispatch = useDispatch();
  const fileInput = React.useRef();

  const selectFile = (e) => {
    // e.target은 input. input이 가진 files 객체 확인
    console.log(e.target.files);
    console.log(e.target.files[0]);
    // 파일을 한 개만 입력받는 경우이기 때문에 files[0]으로 접근
    console.log(fileInput.current.files[0]);

    // 파일 리더 객체를 사용해서 미리보기 넣어주기
    const reader = new FileReader();
    const file = fileInput.current.files[0];

    // 파일객체 넘겨주기
    console.log(file)
    props.changeImage(file)

    // 파일 내용 읽어오기.
    reader.readAsDataURL(file);

    // 읽기가 끝나면 발생하는 이벤트 핸들러
    reader.onloadend = () => {
      dispatch(imageActions.setPreview(reader.result));
    };
  };


  return (
    <React.Fragment>
      <FileInput
        type="file"
        onChange={selectFile}
        ref={fileInput}
      />
    </React.Fragment>
  )
}

const FileInput = styled.input`
    width: 100%;
    background-color: #ffffff;
    color: #212121;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export default Upload;