//작성페이지 프리뷰(따로 업로드 버튼 클릭하지 않아도 파일 선택만 하면 프리뷰 보여줄 수 있도록)
import React from "react";
import Button from "../elements/Button";
import styled, { css } from "styled-components"

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as imageActions } from "../redux/modules/image";


const Upload = (props) => {
  const dispatch = useDispatch();
  // 사진 업로딩 시, 버튼 안눌리게 하려고
  const uploading = useSelector((state) => state.image.uploading);
  const fileInput = React.useRef();

  const selectFile = (e) => {
    // e.target은 input. input이 가진 files 객체 확인
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.files);
    console.log(e.target.files[0]);
    // 파일을 한 개만 입력받는 경우이기 때문에 files[0]으로 접근
    console.log(fileInput.current.files[0]);

    // 파일 리더 객체를 사용해서 미리보기 넣어주기
    const reader = new FileReader();
    const file = fileInput.current.files[0];

    // 이미지 업로드는 post모듈에서 addCardDB로 다른 데이터와 한꺼번에 보내므로 필요없음
    // const uploadDB = () => {
    //   if (!fileInput.current || fileInput.current.files.length === 0) {
    //     window.alert("파일을 선택해주세요!");
    //     return;
    //   }
    //   dispatch(imageActions.uploadImageDB(fileInput.current.files[0]));
    // };

    // 파일객체 넘겨주기
    console.log(file)
    props.changeImage(file)

    // 파일 내용 읽어오기.
    reader.readAsDataURL(file);

    // 읽기가 끝나면 발생하는 이벤트 핸들러
    reader.onloadend = () => {
      console.log(reader.result)
      dispatch(imageActions.setPreview(reader.result));
    };
  };


  return (
    <React.Fragment>
      <FileInput
        type="file"
        onChange={selectFile}
        ref={fileInput}
        disabled={uploading}
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