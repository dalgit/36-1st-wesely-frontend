import React from 'react';
import './PasswordInput.scss';

import { useState } from 'react';
const PasswordInput = ({
  inputUpdate,
  inputVaildMsg,
  signUpinput,
  validStartUpdate,
}) => {
  const [viewPassword, setViewPassword] = useState(false);

  return (
    <div className="passwordInput">
      <div className="inputTitle">비밀번호</div>
      <div className="inputSpace">
        <input
          type={viewPassword ? 'text' : 'password'}
          placeholder="비밀번호 (6자 이상)"
          className="input"
          name="password"
          maxLength="20"
          onChange={inputUpdate}
          onBlur={validStartUpdate}
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
        <div className="plzCheck">
          {inputVaildMsg(
            'password',
            PASS_REG,
            validMassages.emptyMsg,
            validMassages.errorMsg
          )}
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;

const PASS_REG = /^[0-9a-zA-Z\d@$!%*#?&]{6,}$/;

const validMassages = {
  emptyMsg: '비밀번호는 필수 입력 창입니다.',
  errorMsg: '6자리 이상의 비밀번호를 설정해 주세요.',
};
