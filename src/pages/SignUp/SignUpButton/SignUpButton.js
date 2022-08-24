import React from 'react';
import API from '../../../config';
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
        name: name,
        phoneNumber: phoneNumber.replace(/\-/g, ''),
      }),
    })
      .then(response => response.json())
      .then(validData => {
        if (validData.message === 'success') {
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
