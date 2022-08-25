import Nav from '../../components/Nav/Nav';
import ProductContent from './ProductContent/ProductContent';
import MainCarousel from './MainCarousel/MainCarousel';
import MainCategory from './MainCategory/MainCategory';
import Footer from '../../components/Footer/Footer';

import './Main.scss';

function Main() {
  return (
    <div className="Main">
      <Nav />
      <MainCarousel />
      <MainCategory />
      <ProductContent />
      <Footer />
    </div>
  );
}

export default Main;
