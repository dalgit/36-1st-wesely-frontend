import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginButton.scss';

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
    fetch('./data/loginData.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(userData =>
        userData[0].name.length > 0
          ? setUserName(nameMasking(userData[0].name))
          : navigate('/signUp')
      );
  };

  function nameMasking(name) {
    setIsEmailValidPass(true);
    if (name.length === 2) {
      return name[0] + '*';
    } else {
      return name[0] + '*'.repeat(name.length - 2) + name.substr(-1);
    }
  }

  const passwordlValidation = e => {
    e.preventDefault();
    fetch('./data/loginData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(userData => {
        if (userData[0].password === userId.password) {
          localStorage.setItem('token', userData.token);
          navigate('/main');
        } else {
          setWrongPassword(true);
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
