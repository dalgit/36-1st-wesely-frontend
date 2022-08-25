import React from 'react';
import './LoginTitle.scss';

const LoginTitle = ({ userName }) => {
  return userName.length > 0 ? (
    <div className="loginTitle">
      <span className="fontBold">{userName} 회원님</span>
      <div>다시 만나서 반가워요!</div>
    </div>
  ) : (
    <div className="loginTitle">
      <span className="fontBold">로그인 및 회원가입</span>
      <span>을</span>
      <div>시작합니다.</div>
    </div>
  );
};

export default LoginTitle;
