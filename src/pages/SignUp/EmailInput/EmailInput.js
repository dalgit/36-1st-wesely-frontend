import React from 'react';
import './EmailInput.scss';

import { useNavigate } from 'react-router-dom';

const EmailInput = email => {
  const navigate = useNavigate();
  return (
    <div className="emailInput">
      <div className="inputTitle">아이디</div>
      <div className="inputSpace" onClick={() => navigate('/login')}>
        <div className="input">hahahoho33@navvar.com</div>
      </div>
    </div>
  );
};

export default EmailInput;
