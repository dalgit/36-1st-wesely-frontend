import React from 'react';
import { useState } from 'react';
const EyeBtn = ({ viewPassword, setViewPassword }) => {
  return (
    <span className="eyeBtn" onClick={() => setViewPassword(!viewPassword)}>
      {viewPassword ? (
        <i className="fa-solid fa-eye" />
      ) : (
        <i className="fa-solid fa-eye-slash" />
      )}
    </span>
  );
};

export default EyeBtn;
