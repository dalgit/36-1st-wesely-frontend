import { Link } from 'react-router-dom';

import './Nav.scss';

const Nav = () => {
  return (
    <header className="mainHeader">
      <div className="headerGroup">
        <div className="navLeft">
          <div className="logo">
            <h1 className="logoTitle">
              <Link
                to="/"
                style={{ color: 'inherit', textDecoration: 'inherit' }}
              >
                WESELY
              </Link>
            </h1>
          </div>
          <nav className="navGroup">
            <ul className="navWrapper">
              <li className="navItem">
                <Link
                  to="/product/home"
                  style={{ color: 'inherit', textDecoration: 'inherit' }}
                >
                  제품보기
                </Link>
              </li>
              <li className="navItem">브랜드 스토리</li>
              <li className="navItem">블로그</li>
              <li className="navItem">고객센터</li>
            </ul>
          </nav>
        </div>
        <div className="navRight">
          <div className="login">로그인</div>
          <div className="cart">
            <i class="fa-solid fa-cart-shopping" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
