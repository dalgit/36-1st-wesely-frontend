import './SignUp.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import InputForm from './InputForm/InputForm';
const SignUp = () => {
  const navigate = useNavigate();
  const [signUpinput, setSignUpinput] = useState({
    password: '',
    phoneNumber: '',
    name: '',
  });

  const [validStartList, setValidStartList] = useState({
    password: false,
    phoneNumber: false,
    name: false,
  });

  function nameVaild() {
    if (validStartList.name === true) {
      return signUpinput.name === ''
        ? '이름은 필수 입력 창입니다.'
        : !NAME_REG.test(signUpinput.name)
        ? '이름을 올바르게 입력해주세요.'
        : '';
    }
  }

  const a = e => {
    setSignUpinput({
      ...signUpinput,
      [e.target.name]: e.target.value.replace(/\-/g, ''),
    });
  };

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

  const valid = e => {
    e.preventDefault();
    fetch('./data/loginData.json', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: signUpinput.email,
        password: signUpinput.password,
        name: signUpinput.name,
      }),
    })
      .then(response => response.json())
      .then(validData => {
        if (validData.message === 'success') {
          navigate('/main');
        } else if (validData.message === 'invalid') {
          alert('필수 입력창을 확인해주세요');
        }
      });
  };

  return (
    <div className="signUp">
      <div className="signUpContainer">
        <div className="signUpTitle">
          <div>처음이시군요</div>
          <span className="fontBold">가입을 진행합니다.</span>
        </div>
        <form className="singUpBox">
          <div className="signUpInputBox">
            <div className="inputTitle">아이디</div>
            <div className="inputSpace">
              <div className="input">hahahoho33@navvar.com</div>
            </div>
          </div>
          <InputForm
            inputType="password"
            signUpinput={signUpinput}
            setSignUpinput={setSignUpinput}
            validStartList={validStartList}
            setValidStartList={setValidStartList}
          />
          <InputForm
            inputType="phoneNumber"
            signUpinput={signUpinput}
            setSignUpinput={setSignUpinput}
            validStartList={validStartList}
            setValidStartList={setValidStartList}
          />
          <div className="signUpInputBox">
            <div className="inputTitle">이름</div>
            <div className="inputSpace">
              <input
                type="text"
                placeholder="이름"
                name="name"
                className="input"
                maxLength="20"
                onChange={e => {
                  setSignUpinput({
                    ...signUpinput,
                    [e.target.name]: e.target.value,
                  });
                }}
                onBlur={e => {
                  setValidStartList({
                    ...validStartList,
                    [e.target.name]: true,
                  });
                }}
              />
              <div className="plzCheck">{nameVaild()}</div>
              {NAME_REG.test(signUpinput.name) && (
                <i className="fa-solid fa-check" />
              )}
            </div>
          </div>
          <button className="loginBtn" onClick={valid}>
            가입완료
          </button>
        </form>
        <div>위즐리컴퍼니 통합 회원으로 진행됩니다.</div>
      </div>
    </div>
  );
};
export default SignUp;

const NAME_REG = /^[가-힣]{2,4}$/;
