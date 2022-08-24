import Nav from '../../components/Nav/Nav';
import ProductContent from './ProductContent/ProductContent';
import MainCarousel from './MainCarousel/MainCarousel';
import MainCategory from './MainCategory/MainCategory';

import './Main.scss';

function Main() {
  return (
    <div className="Main">
      <Nav />
      <MainCarousel />
      <MainCategory />
      <ProductContent />
    </div>
  );
}

export default Main;
