import { useEffect, useState } from 'react';

import Nav from '../../components/Nav/Nav';
import SubHeader from './subHeader/subHeader';
import ProductContent from './ProductContent/ProductContent';
import MainCarousel from './MainCarousel/MainCarousel';
import MainCategory from './MainCategory/MainCategory';

import './Main.scss';

function Main() {
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
    <div className="Main">
      {navState === '' || navState === 'noHeader' || navState === 'fixed' ? (
        <Nav navState={navState} />
      ) : (
        <SubHeader />
      )}
      <MainCarousel />
      <MainCategory />
      <ProductContent />
    </div>
  );
}

export default Main;
