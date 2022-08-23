import ProductContent from './ProductContent/ProductContent';

import MainCarousel from './MainCarousel/MainCarousel';
import MainCategory from './MainCategory/MainCategory';

import './Main.scss';

function Main() {
  return (
    <div className="Main">
      <h1>Header</h1>
      <MainCarousel />
      <MainCategory />
      <ProductContent />
    </div>
  );
}

export default Main;
