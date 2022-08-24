import React from 'react';
import { useEffect } from 'react';
import './EmailBox.scss';

const EmailBox = ({
  idUpdate,
  userId,
  setUserId,
  setIsEmailValidPass,
  setUserName,
  isBasicValidPass,
  setIsBasicValidPass,
}) => {
  const basciValidation =
    userId.email === ''
      ? '필수 입력창입니다.'
      : !regEmail.test(userId.email)
      ? '이메일 양식을 확인해주세요.'
      : '';

  useEffect(() => {
    basciValidation === ''
      ? setIsBasicValidPass(true)
      : setIsBasicValidPass(false);
  }, [basciValidation, setIsBasicValidPass]);

  function validReset() {
    setIsEmailValidPass(false);
    setUserId({ ...userId, password: '' });
    setUserName('');
  }

  return (
    <div className="emailBox">
      <div className="emailInput">
        <input
          onChange={idUpdate}
          type="text"
          placeholder="이메일"
          name="email"
          className={`email ${!isBasicValidPass}`}
          onClick={validReset}
          autoFocus
        />
        {isBasicValidPass ? <i className="fa-solid fa-check" /> : null}
      </div>
      <div className="plzCheck">{basciValidation}</div>
    </div>
  );
};

export default EmailBox;

const regEmail =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[a-zA-Z])*\.[a-zA-Z]{2,}$/;
