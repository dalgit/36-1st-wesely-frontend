import React from 'react';

const PhoneNumInput = ({
  inputUpdate,
  inputVaildMsg,
  signUpinput,
  validStartUpdate,
}) => {
  function hyphenNumber(number) {
    number = number.replace(/\-/g, '');
    if (number.length >= 8) {
      return (
        number.slice(0, 3) + '-' + number.slice(3, 7) + '-' + number.slice(7)
      );
    } else if (number.length >= 4) {
      return number.slice(0, 3) + '-' + number.slice(3);
    }
    return number;
  }

  return (
    <div className="signUpInputBox">
      <div className="inputTitle">휴대폰번호</div>
      <div className="inputSpace">
        <input
          type="text"
          placeholder="휴대폰 번호 ('-'제외)"
          name="phoneNumber"
          className="input"
          maxLength="13"
          onChange={inputUpdate}
          onBlur={validStartUpdate}
          value={hyphenNumber(signUpinput.phoneNumber)}
        />
        <div className="plzCheck">
          {inputVaildMsg(
            'phoneNumber',
            PHONE_REG,
            validMassages.emptyMsg,
            validMassages.errorMsg
          )}
        </div>
        {PHONE_REG.test(signUpinput.phoneNumber) && (
          <i className="fa-solid fa-check" />
        )}
      </div>
    </div>
  );
};

export default PhoneNumInput;

const PHONE_REG = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
const validMassages = {
  emptyMsg: '휴대폰 번호는 필수 입력 창입니다.',
  errorMsg: '휴대폰 번호를 올바르게 입력해 주세요.',
};
