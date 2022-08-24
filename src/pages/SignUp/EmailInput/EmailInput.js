import React from 'react';
import './EmailInput.scss';
import { useNavigate } from 'react-router-dom';

const EmailInput = ({ email }) => {
  const navigate = useNavigate();

  function emailDelivery() {
    navigate('/login', {
      state: {
        email: email,
      },
    });
  }

  return (
    <div className="emailInput">
      <div className="inputTitle">아이디</div>
      <div className="inputSpace" onClick={emailDelivery}>
        <div className="input">{email}</div>
      </div>
    </div>
  );
};

export default EmailInput;
