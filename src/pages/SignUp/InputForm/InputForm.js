import React from 'react';
import { useState } from 'react';
import EyeBtn from './EyeBtn/EyeBtn';
const InputForm = ({
  inputType,
  signUpinput,
  setSignUpinput,
  validStartList,
  setValidStartList,
}) => {
  const [viewPassword, setViewPassword] = useState(false);
  const typeDatas = {
    password: {
      name: inputType,
      type: viewPassword ? 'text' : 'password',
      korean: '비밀번호',
      invalid: '6자리 이상의 비밀번호를 설정해 주세요.',
      toggleEvent: true,
      placeholder: '비밀번호 (6자 이상)',
      validReg: PASS_REG,
      maxLength: 20,
    },
    phoneNumber: {
      name: inputType,
      type: 'text',
      korean: '휴대폰번호',
      invalid: '휴대폰번호를 올바르게 입력해주세요.',
      placeholder: `휴대폰 번호 (' - ')제외`,
      validReg: PHONE_REG,
      maxLength: 13,
    },
  };

  const typeData = typeDatas[inputType];

  if (typeData === undefined) return;

  const validation = () => {
    if (validStartList.typeData?.name === true) {
      return signUpinput.typeData.name === ''
        ? `${typeData.password}는 필수 입력 창입니다.`
        : !typeData.validReg.test(signUpinput.typeData.name)
        ? typeData.invalid
        : '';
    }
  };

  function setInput(e) {
    setSignUpinput({
      ...signUpinput,
      [e.target.name]: e.target.value,
    });
  }

  function setStart(e) {
    setValidStartList({
      ...validStartList,
      [e.target.name]: true,
    });
  }

  return (
    <div className="signUpInputBox">
      <div className="inputTitle">{typeData.korean}</div>
      <div className="inputSpace">
        <input
          type={typeData.type}
          placeholder={typeData.placeholder}
          className="input"
          name={typeData.name}
          maxLength={typeData.maxLength}
          onChange={e => setInput(e)}
          onBlur={e => setStart(e)}
        />
        <div className="iconBox">
          <div>
            {typeData.name === 'password' && (
              <EyeBtn
                viewPassword={viewPassword}
                setViewPassword={setViewPassword}
              />
            )}
            {typeData.validReg.test(signUpinput.password) && (
              <i className="fa-solid fa-check" />
            )}
          </div>
        </div>
        <div className="plzCheck">{validation()}</div>
      </div>
    </div>
  );
};

export default InputForm;
const PASS_REG = /^[0-9a-zA-Z\d@$!%*#?&]{6,}$/;
const PHONE_REG = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
