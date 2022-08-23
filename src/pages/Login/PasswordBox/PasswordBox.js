import React from 'react';
import { useState } from 'react';
import './PasswordBox.scss';

const PasswordBox = ({ userId, setUserId, wrongPassword }) => {
  const [viewPassword, setViewPassword] = useState(false);

  return (
    <div className="passwordBox">
      <div className="passwordInput">
        <input
          onChange={e => {
            setUserId({
              ...userId,
              [e.target.className]: e.target.value,
            });
          }}
          type={viewPassword ? 'text' : 'password'}
          placeholder="비밀번호 (6자 이상)"
          className="password"
          autoFocus
        />
        <div className="eyeBox" onClick={() => setViewPassword(!viewPassword)}>
          {viewPassword ? (
            <i className="fa-solid fa-eye" />
          ) : (
            <i className="fa-solid fa-eye-slash" />
          )}
        </div>
      </div>
      <div className="plzCheck">
        {wrongPassword && '패스워드가 잘못되었습니다.'}
      </div>
    </div>
  );
};

export default PasswordBox;
