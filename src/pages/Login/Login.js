import './Login.scss';
import { useState } from 'react';
import LoginTitle from './LoginTitle/LoginTitle';
import EmailBox from './EmailBox/EmailBox';
import PasswordBox from './PasswordBox/PasswordBox';
import LoginButton from './LoginButton/LoginButton';
import SubNav from '../../components/SubNav/SubNav';

function Login() {
  const [isBasicValidPass, setIsBasicValidPass] = useState(false);
  const [isEmailValidPass, setIsEmailValidPass] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState({
    email: '',
    password: '',
  });

  function idUpdate(e) {
    setUserId({ ...userId, [e.target.name]: e.target.value });
  }

  return (
    <div className="loginComponent">
      <SubNav />
      <div className="loginContainer">
        <LoginTitle userName={userName} />
        <form className="loginBox">
          <EmailBox
            idUpdate={idUpdate}
            userId={userId}
            setUserId={setUserId}
            setUserName={setUserName}
            isBasicValidPass={isBasicValidPass}
            setIsBasicValidPass={setIsBasicValidPass}
            setIsEmailValidPass={setIsEmailValidPass}
          />

          {isEmailValidPass && (
            <PasswordBox idUpdate={idUpdate} wrongPassword={wrongPassword} />
          )}

          <LoginButton
            userId={userId}
            setUserName={setUserName}
            isBasicValidPass={isBasicValidPass}
            isEmailValidPass={isEmailValidPass}
            setIsEmailValidPass={setIsEmailValidPass}
            setWrongPassword={setWrongPassword}
          />
        </form>
        <div>위즐리컴퍼니 통합 회원으로 진행됩니다.</div>
      </div>
    </div>
  );
}

export default Login;
