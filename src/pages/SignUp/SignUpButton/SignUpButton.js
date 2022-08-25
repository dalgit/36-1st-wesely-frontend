import React from 'react';
import API from '../../../config';
import './SignUpButton.scss';
import { useNavigate } from 'react-router';

const SignUpButton = ({ email, password, name, phoneNumber }) => {
  const navigate = useNavigate();
  const signUpValid = e => {
    e.preventDefault();
    fetch(API.signUp, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
        phone_number: phoneNumber.replace(/\-/g, ''),
        name: name,
      }),
    })
      .then(response => response.json())
      .then(validData => {
        if (validData.message === 'USER_CREATED') {
          alert('회원가입이 완료되었습니다.');
          navigate('/login');
        }
      });
  };

  return (
    <button className="loginBtn" onClick={signUpValid}>
      가입완료
    </button>
  );
};

export default SignUpButton;
