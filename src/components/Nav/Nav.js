import { Link } from 'react-router-dom';

import './Nav.scss';

const Nav = ({ navState }) => {
  return (
    <header className={`mainHeader ${navState}`}>
      <div className="headerGroup">
        <div className="navLeft">
          <div className="logo">
            <h1 className="logoTitle">
              <Link to="/">WESELY</Link>
            </h1>
          </div>
          <nav className="navGroup">
            <ul className="navWrapper">
              <li className="navItem">
                <Link to="/product/all">제품보기</Link>
              </li>
              <li className="navItem">브랜드 스토리</li>
              <li className="navItem">블로그</li>
              <li className="navItem">고객센터</li>
            </ul>
          </nav>
        </div>
        <div className="navRight">
          <Link to="/login">
            <div className="login">로그인</div>
          </Link>
          <Link to="/Cart">
            <div className="cart">
              <i className="fa-solid fa-cart-shopping" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Nav;
