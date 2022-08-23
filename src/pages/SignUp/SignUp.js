import React from 'react';
import './SignUp.scss';
import { useState } from 'react';

const SignUp = () => {
  const [viewPassword, setViewPassword] = useState(false);
  const [signUpinput, setSignUpinput] = useState({
    password: '',
    phoneNumber: '',
    name: '',
  });
  const [validStartList, setValidStartList] = useState({
    password: false,
    phoneNumber: false,
    name: false,
  });
  console.log(PASS_REG.test(signUpinput.password));
  function passwordVaild() {
    if (validStartList.password === true) {
      return signUpinput.password === ''
        ? '비밀번호는 필수 입력 창입니다.'
        : !PASS_REG.test(signUpinput.password)
        ? '6자리 이상의 비밀번호를 설정해 주세요.'
        : '';
    }
  }

  function phoneNumberVaild() {
    if (validStartList.phoneNumber === true) {
      return signUpinput.phoneNumber === ''
        ? '휴대폰번호는 필수 입력 창입니다.'
        : !PHONE_REG.test(signUpinput.phoneNumber)
        ? '휴대폰번호를 올바르게 입력해주세요.'
        : '';
    }
  }

  function nameVaild() {
    if (validStartList.name === true) {
      return signUpinput.name === ''
        ? '이름은 필수 입력 창입니다.'
        : !NAME_REG.test(signUpinput.name)
        ? '이름을 올바르게 입력해주세요.'
        : '';
    }
  }

  return (
    <div className="signUp">
      <div className="signUpContainer">
        <div className="signUpTitle">
          <div>처음이시군요</div>
          <span className="fontBold">가입을 진행합니다.</span>
        </div>
        <form className="singUpBox">
          <div className="signUpInputBox">
            <div className="inputTitle">아이디</div>
            <div className="inputSpace">
              <div className="input">dsadas</div>
            </div>
          </div>
          <div className="signUpInputBox">
            <div className="inputTitle">비밀번호</div>
            <div className="inputSpace">
              <input
                type={viewPassword ? 'text' : 'password'}
                placeholder="비밀번호 (6자 이상)"
                className="input"
                name="password"
                onChange={e => {
                  setSignUpinput({
                    ...signUpinput,
                    [e.target.name]: e.target.value,
                  });
                }}
                onBlur={e => {
                  setValidStartList({
                    ...validStartList,
                    [e.target.name]: true,
                  });
                }}
              />
              <div className="iconBox">
                <div>
                  <span
                    className="eyeBtn"
                    onClick={() => setViewPassword(!viewPassword)}
                  >
                    {viewPassword ? (
                      <i className="fa-solid fa-eye" />
                    ) : (
                      <i className="fa-solid fa-eye-slash" />
                    )}
                  </span>
                  {PASS_REG.test(signUpinput.password) && (
                    <i className="fa-solid fa-check" />
                  )}
                </div>
              </div>
              <div className="plzCheck">{passwordVaild()}</div>
            </div>
          </div>
          <div className="signUpInputBox">
            <div className="inputTitle">휴대폰번호</div>
            <div className="inputSpace">
              <input
                type="number"
                placeholder="휴대폰 번호 ('-'제외)"
                name="phoneNumber"
                className="input"
                onChange={e => {
                  setSignUpinput({
                    ...signUpinput,
                    [e.target.name]: e.target.value,
                  });
                }}
                onBlur={e => {
                  setValidStartList({
                    ...validStartList,
                    [e.target.name]: true,
                  });
                }}
              />
              <div className="plzCheck">{phoneNumberVaild()}</div>
              {PHONE_REG.test(signUpinput.phoneNumber) && (
                <i className="fa-solid fa-check" />
              )}
            </div>
          </div>
          <div className="signUpInputBox">
            <div className="inputTitle">이름</div>
            <div className="inputSpace">
              <input
                type="text"
                placeholder="이름"
                name="name"
                className="input"
                onChange={e => {
                  setSignUpinput({
                    ...signUpinput,
                    [e.target.name]: e.target.value,
                  });
                }}
                onBlur={e => {
                  setValidStartList({
                    ...validStartList,
                    [e.target.name]: true,
                  });
                }}
              />
              <div className="plzCheck">{nameVaild()}</div>
              {NAME_REG.test(signUpinput.name) && (
                <i className="fa-solid fa-check" />
              )}
            </div>
          </div>
          <button className="loginBtn">가입완료</button>
        </form>
        <div>위즐리컴퍼니 통합 회원으로 진행됩니다.</div>
      </div>
    </div>
  );
};
export default SignUp;

const PASS_REG = /^[0-9a-zA-Z\d@$!%*#?&]{6,}$/;
const NAME_REG = /^[가-힣]{2,4}$/;
const PHONE_REG = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
