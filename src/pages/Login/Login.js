import './Login.scss';
import { useState } from 'react';
function Login() {
  const [userId, setuserId] = useState({
    email: '',
    password: '',
  });

  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginTitle">
          <span className="fontBold">로그인 및 회원가입</span>
          <span>을</span>
          <div>시작합니다.</div>
        </div>
        <form className="loginBox">
          <input type="text" placeholder="이메일" className="email" />
          <div className="plzCheck">이메일 형식을 확인해주세요.</div>
          <button className="loginBtn">다음</button>
        </form>
        <div>위즐리컴퍼니 통합 회원으로 진행됩니다.</div>
      </div>
    </div>
  );
}

export default Login;
