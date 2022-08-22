import React from 'react';
import './EmailBox.scss';
import { useEffect } from 'react';

const EmailBox = ({
  userId,
  setUserId,
  setIsEmailValidPass,
  setUserName,
  isBasicValidPass,
  setIsBasicValidPass,
}) => {
  const basciValidation = () => {
    if (userId.email === '') {
      return '필수 입력창입니다.';
    } else if (!regEmail.test(userId.email)) {
      return '이메일 형식을 확인해주세요.';
    }
  };

  basciValidation() === undefined
    ? setIsBasicValidPass(true)
    : setIsBasicValidPass(false);

  return (
    <>
      <div className="emailBox">
        <input
          onChange={e => {
            setUserId({ ...userId, [e.target.name]: e.target.value });
          }}
          type="text"
          placeholder="이메일"
          name="email"
          className={`email ${!isBasicValidPass}`}
          onClick={() => {
            setIsEmailValidPass(false);
            setUserId({ ...userId, password: '' });
            setUserName('');
          }}
          autoFocus
        />
        {isBasicValidPass ? <i className="fa-solid fa-check" /> : null}
      </div>
      <div className="plzCheck">{basciValidation()}</div>
    </>
  );
};

export default EmailBox;

const regEmail =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[a-zA-Z])*\.[a-zA-Z]{2,}$/;
