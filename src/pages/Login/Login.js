import './Login.scss';
import { useState } from 'react';
function Login() {
  const [userId, setuserId] = useState({
    email: '',
    password: '',
  });

  function validation() {
    if (userId.email === '') {
      return '필수 입력창입니다.';
    } else if (!regEmail.test(userId.email)) {
      return '이메일 형식을 확인해주세요.';
    }
  }
  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginTitle">
          <span className="fontBold">로그인 및 회원가입</span>
          <span>을</span>
          <div>시작합니다.</div>
        </div>
        <form className="loginBox">
          <input
            onChange={e => {
              setuserId({ ...userId, [e.target.className]: e.target.value });
            }}
            type="text"
            placeholder="이메일"
            className="email"
          />
          <div className="plzCheck">{validation()}</div>
          <button
            className={`loginBtn ${validation() === undefined}`}
            disabled={validation() !== undefined}
          >
            다음
          </button>
        </form>
        <div>위즐리컴퍼니 통합 회원으로 진행됩니다.</div>
      </div>
    </div>
  );
}

export default Login;

const regEmail =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[a-zA-Z])*\.[a-zA-Z]{2,}$/;
