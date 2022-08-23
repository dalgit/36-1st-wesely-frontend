import React from 'react';
import './SignUp.scss';
import { useState } from 'react';
const SignUp = () => {
  const [viewPassword, setViewPassword] = useState(false);
  return (
    <div className="signUp">
      <div className="signUpContainer">
        <div className="signUpTitle">
          <div>처음이시군요</div>
          <span className="fontBold">가입을 진행합니다.</span>
        </div>
        <form className="singUpBox">
          <div className="emailBox">
            <div className="inputTitle">아이디</div>
            <div className="emailInput">
              <input
                type="text"
                placeholder="이메일"
                name="email"
                className="email"
                autoFocus
              />
              <i className="fa-solid fa-check" />
            </div>
            <div className="plzCheck">ss</div>
          </div>
          <div className="emailBox">
            <input
              type={viewPassword ? 'text' : 'password'}
              placeholder="비밀번호 (6자 이상)"
              className="password"
              autoFocus
            />
            <div
              className="eyeBox"
              onClick={() => setViewPassword(!viewPassword)}
            >
              {viewPassword ? (
                <i className="fa-solid fa-eye" />
              ) : (
                <i className="fa-solid fa-eye-slash" />
              )}
            </div>
          </div>
          <div className="emailBox">
            <div className="inputTitle">휴대폰번호</div>
            <div className="emailInput">
              <input
                type="text"
                placeholder="휴대폰 번호 ('-'wpdhl)"
                name="email"
                className="email"
                autoFocus
              />
              <i className="fa-solid fa-check" />
            </div>
            <div className="plzCheck">ss</div>
          </div>
          <div className="emailBox">
            <div className="inputTitle">이름</div>
            <div className="emailInput">
              <input
                type="text"
                placeholder="이름"
                name="email"
                className="email"
                autoFocus
              />
              <i className="fa-solid fa-check" />
            </div>
            <div className="plzCheck">ss</div>
          </div>
        </form>
        <div>위즐리컴퍼니 통합 회원으로 진행됩니다.</div>
      </div>
    </div>
  );
};
export default SignUp;
