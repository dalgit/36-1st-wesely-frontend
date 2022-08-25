import ProductContent from './ProductContent/ProductContent';
import MainCarousel from './MainCarousel/MainCarousel';
import MainCategory from './MainCategory/MainCategory';
import Footer from '../../components/Footer/Footer';

import './Main.scss';
import NavScroll from '../../components/NavScroll/NavScroll';

function Main() {
  return (
    <div className="Main">
      <NavScroll />
      <MainCarousel />
      <MainCategory />
      <ProductContent />
      <Footer />
    </div>
  );
}

export default Main;
