import './ContentCarousel.scss';
import Product from '../Product/Product';
import ProductButton from '../productButton/ProductButton';

const ContentCarousel = ({
  carouselData,
  setProductPos,
  carouselMoveSize,
  productList,
  productPos,
}) => {
  const movePrev = () => {
    setProductPos(prov => prov + carouselMoveSize);
  };

  const moveNext = () => {
    setProductPos(prov => prov - carouselMoveSize);
  };

  return (
    <>
      <ul className="productList" ref={productList}>
        {carouselData?.map(data => (
          <Product key={data.id} {...data} />
        ))}
      </ul>
      {productPos === 0 ? (
        <ProductButton btnType="next" handleSlide={moveNext} />
      ) : productPos >= -1084 ? (
        <>
          <ProductButton btnType="prev" handleSlide={movePrev} />
          <ProductButton btnType="next" handleSlide={moveNext} />
        </>
      ) : (
        <ProductButton btnType="prev" handleSlide={movePrev} />
      )}
    </>
  );
};

export default ContentCarousel;
