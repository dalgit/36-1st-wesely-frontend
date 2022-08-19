import './Main.scss';
import ProductContent from './ProductContent/ProductContent';

function Main() {
  return (
    <div className="Main">
      <h1>Header</h1>
      <div>Carousel</div>
      <div>
        <h1>카테고리</h1>
      </div>
      <ProductContent />
    </div>
  );
}

export default Main;
