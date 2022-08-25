import { useState, useEffect } from 'react';

import Nav from './Nav/Nav';
import SubHeader from './Nav/subHeader/subHeader';

const NavScroll = () => {
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
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {navState === '' || navState === 'noHeader' || navState === 'fixed' ? (
        <Nav navState={navState} />
      ) : (
        <SubHeader />
      )}
    </>
  );
};

export default NavScroll;
