import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './SubNav.scss';

const SubNav = () => {
  const [navState, setNavState] = useState('');
  useEffect(() => {
    window.addEventListener('wheel', e => handleScroll(e));
    return () => {
      window.removeEventListener('wheel', e => handleScroll(e));
    };
  }, []);
  const handleScroll = e => {
    e.deltaY > 0 && setNavState('noHeader');
    window.scrollY > 689 && setNavState('subHeader');
    e.deltaY < 0 && setNavState('fixed');
  };
  return (
    <header className={`subNav ${navState}`}>
      <div className="headerGroup">
        <div className="navLeft">
          <div className="logo">
            <h1 className="logoTitle">
              <Link to="/">WESELY</Link>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SubNav;
