import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginButton.scss';
import API from '../../../config';

const LoginButton = ({
  userId,
  setUserName,
  isBasicValidPass,
  isEmailValidPass,
  setIsEmailValidPass,
  setWrongPassword,
}) => {
  const navigate = useNavigate();
  const isPasswordInputActive = userId.password.length > 0;

  const emailValidation = e => {
    e.preventDefault();
    fetch(API.email, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: userId.email,
      }),
    })
      .then(response => response.json())
      .then(validData => {
        if (validData.message === 'CONNECT_LOGIN') {
          setUserName(nameMasking(validData.name[0].name));
        } else if (validData.message === 'CONNECT_SIGNUP') {
          navigate('/signUp');
        }
      });
  };

  const passwordlValidation = e => {
    e.preventDefault();
    fetch(API.password, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: userId.email,
        password: userId.password,
      }),
    })
      .then(res => res.json())
      .then(validData => {
        if (validData.message === 'SUCCESS_LOGIN') {
          localStorage.setItem('token', validData.token);
          navigate('/main');
        } else if (validData.message === 'UNABLE_LOGIN') {
          setWrongPassword(true);
        }
      });
  };

  function nameMasking(name) {
    setIsEmailValidPass(true);
    if (name.length === 2) {
      return name[0] + '*';
    } else {
      return name[0] + '*'.repeat(name.length - 2) + name.substr(-1);
    }
  }

  return isEmailValidPass ? (
    <button
      className={`loginBtn ${isPasswordInputActive}`}
      disabled={!isPasswordInputActive}
      onClick={passwordlValidation}
    >
      로그인
    </button>
  ) : (
    <button
      className={`loginBtn ${isBasicValidPass}`}
      disabled={!isBasicValidPass}
      onClick={emailValidation}
    >
      다음
    </button>
  );
};

export default LoginButton;
