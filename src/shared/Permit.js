// 로그인을 했는지 확인해서 게시글 작성할 수 있도록

import React from "react";
import { useSelector } from "react-redux";

const Permit = (props) => {
  const is_login = useSelector((state) => state.user.is_login);

  // const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;
  const token = localStorage.getItem("token");
  // const is_session = sessionStorage.getItem(_session_key) ? true : false;

  if (token) {
    return <React.Fragment>{props.children}</React.Fragment>;
  }

  return null;
};

export default Permit;