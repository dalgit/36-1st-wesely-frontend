import React from 'react';
import './NameInput.scss';

const NameInput = ({
  inputUpdate,
  inputVaildMsg,
  signUpinput,
  validStartUpdate,
}) => {
  return (
    <div className="nameInput">
      <div className="inputTitle">이름</div>
      <div className="inputSpace">
        <input
          type="text"
          placeholder="이름"
          name="name"
          className="input"
          maxLength="20"
          onChange={inputUpdate}
          onBlur={validStartUpdate}
        />
        <div className="plzCheck">
          {inputVaildMsg(
            'name',
            NAME_REG,
            validMassages.emptyMsg,
            validMassages.errorMsg
          )}
        </div>
        {NAME_REG.test(signUpinput.name) && <i className="fa-solid fa-check" />}
      </div>
    </div>
  );
};

export default NameInput;

const NAME_REG = /^[가-힣]{2,4}$/;
const validMassages = {
  emptyMsg: '이름은 필수 입력 창입니다.',
  errorMsg: '이름을 올바르게 입력해 주세요.',
};
