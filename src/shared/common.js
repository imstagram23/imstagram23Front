// 정규식으로 이메일 형식이 맞나 체크해주는 함수

//아이디 체크 정규식
export const idCheck = (nickname) => {
 
  const _reg =/^(?!(?:[0-9]+)$)([a-zA-Z]|[0-9a-zA-Z]){6,}$/
  return _reg.test(nickname);
}

//패스워드 체크 정규식
export const pwMacth = (password) => {
  
  const _reg = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{10,}$/;
  return  _reg.test(password) && password.search(/\s/) == -1 ?true:false;

}

export const pwContinuous = (password) => {
  
  const _reg = /(\w)\1\1/;
  return _reg.test(password)
}

//이메일 체크 정규식
export const emailCheck = (email) => {

  let _reg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
  return _reg.test(email);

}