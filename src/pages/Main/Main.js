import Nav from '../../components/Nav/Nav';
import MainCarousel from './MainCarousel/MainCarousel';
import MainCategory from './MainCategory/MainCategory';

import './Main.scss';

function Main() {
  return (
    <div className="Main">
      <Nav />
      <MainCarousel />
      <MainCategory />
    </div>
  );
}

export default Main;
