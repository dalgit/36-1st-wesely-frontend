import './Login.scss';
import { useState } from 'react';
import LoginTitle from './LoginTitle/LoginTitle';
import EmailBox from './EmailBox/EmailBox';
import PasswordBox from './PasswordBox/PasswordBox';
import LoginButton from './LoginButton/LoginButton';

function Login() {
  const [isBasicValidPass, setIsBasicValidPass] = useState(false);
  const [isEmailValidPass, setIsEmailValidPass] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState({
    email: '',
    password: '',
  });

  return (
    <div className="login">
      <div className="loginContainer">
        <LoginTitle userName={userName} />
        <form className="loginBox">
          <EmailBox
            userId={userId}
            setUserId={setUserId}
            setUserName={setUserName}
            isBasicValidPass={isBasicValidPass}
            setIsBasicValidPass={setIsBasicValidPass}
            setIsEmailValidPass={setIsEmailValidPass}
          />

          {isEmailValidPass && (
            <PasswordBox
              userId={userId}
              setUserId={setUserId}
              wrongPassword={wrongPassword}
            />
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
