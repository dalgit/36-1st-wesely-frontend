import './Login.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [userId, setuserId] = useState({
    email: '',
    password: '',
  });

  const [loginEnabled, setLoginEnabled] = useState(false);

  const [viewPassword, setViewPassword] = useState(false);

  const [userName, setUserName] = useState('');

  const navigate = useNavigate();

  function emailValidation(e) {
    e.preventDefault();
    fetch('data/loginData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(emailDatas =>
        emailDatas.forEach((emailData, idx) =>
          emailData.email === userId.email
            ? (setUserName(emailData.name), setLoginEnabled(true))
            : idx === emailDatas.length - 1
            ? navigate('/signUp')
            : null
        )
      );
  }

  const validation = () => {
    if (userId.email === '') {
      return '필수 입력창입니다.';
    } else if (!regEmail.test(userId.email)) {
      return '이메일 형식을 확인해주세요.';
    }
  };

  function passwordInputShow(e) {
    e.preventDefault();
    setLoginEnabled(true);
  }
  return (
    <div className="login">
      <div className="loginContainer">
        {userName ? (
          <div className="loginTitle">
            <span className="fontBold">{userName}회원님</span>
            <div>다시 만나서 반가워요!</div>
          </div>
        ) : (
          <div className="loginTitle">
            <span className="fontBold">로그인 및 회원가입</span>
            <span>을</span>
            <div>시작합니다.</div>
          </div>
        )}
        <form className="loginBox">
          <div className="emailBox">
            <input
              onChange={e => {
                setuserId({ ...userId, [e.target.name]: e.target.value });
              }}
              type="text"
              placeholder="이메일"
              name="email"
              className={`email ${validation() !== undefined}`}
              onClick={() => {
                setLoginEnabled(false);
                setuserId({ ...userId, password: '' });
                setUserName(userName.name);
              }}
              onBlur={() => console.log('블러테스트')}
              autoFocus
            />
            {validation() === undefined ? (
              <i className="fa-solid fa-check" />
            ) : null}
          </div>
          <div className="plzCheck">{validation()}</div>
          {loginEnabled ? (
            <div className="passwordBox">
              <input
                onChange={e => {
                  setuserId({
                    ...userId,
                    [e.target.className]: e.target.value,
                  });
                }}
                type={viewPassword ? 'text' : 'password'}
                placeholder="비밀번호 (6자 이상)"
                className="password"
                autoFocus
              />
              <div
                className="eyeBox"
                onClick={() => setViewPassword(!viewPassword)}
              >
                {viewPassword ? (
                  <i className="fa-solid fa-eye" />
                ) : (
                  <i className="fa-solid fa-eye-slash" />
                )}
              </div>
            </div>
          ) : null}

          {loginEnabled ? (
            <button
              className={`loginBtn ${userId.password.length > 0}`}
              disabled={userId.password === ''}
              onClick={passwordInputShow}
            >
              로그인
            </button>
          ) : (
            <button
              className={`loginBtn ${validation() === undefined}`}
              disabled={validation()}
              onClick={emailValidation}
            >
              다음
            </button>
          )}
        </form>
        <div>위즐리컴퍼니 통합 회원으로 진행됩니다.</div>
      </div>
    </div>
  );
}

export default Login;

const regEmail =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[a-zA-Z])*\.[a-zA-Z]{2,}$/;
