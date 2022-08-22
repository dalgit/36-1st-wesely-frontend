import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginButton.scss';

const LoginButton = ({
  userId,
  setUserName,
  isBasicValidPass,
  isEmailValidPass,
  setIsEmailValidPass,
}) => {
  const navigate = useNavigate();
  const isPasswordInputActive = userId.password.length > 0;

  const emailValidation = e => {
    e.preventDefault();
    fetch('http://10.58.0.32:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: userId.email }),
    })
      .then(response => response.json())
      .then(name =>
        name.length > 0
          ? (setUserName(name), setIsEmailValidPass(true))
          : navigate('/signUp')
      );
  };

  const passwordlValidation = () => {
    fetch('http://10.58.0.32:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: userId.email, password: userId.password }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'success') {
          localStorage.setItem('token', data.token);
          navigate('/main');
        } else if (data.message === 'invalid') {
          alert('아이디 또는 비밀번호를 확인해주세요');
        }
      });
  };

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
