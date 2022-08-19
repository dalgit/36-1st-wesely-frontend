import { useEffect, useRef, useState } from 'react';
import './ProductContent.scss';

import Product from './Product/Product';
import ProductButton from './productButton/ProductButton';

const ProductContent = () => {
  const [productData, setProductData] = useState([]);
  const [productPos, setProductPos] = useState(0);

  const container_Carousel = useRef();
  useEffect(() => {
    container_Carousel.current.style.transform = `translateX(${productPos}px)`;
  }, [productPos]);

  useEffect(() => {
    const checkStatus = res => {
      if (!res.ok) throw new Error(`Again Check Status: ${res.status}`);
      return res.json();
    };
    const uploadProductData = data => {
      setProductData([...data]);
    };
    const getProductData = url =>
      fetch(url, {
        method: 'GET',
      });

    getProductData('/data/ProductContent.json')
      .then(checkStatus)
      .then(uploadProductData)
      .catch(error => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const movePrev = () => {
    setProductPos(prop => prop + 271);
  };

  const moveNext = () => {
    setProductPos(prop => prop - 271);
  };

  return (
    <main className="ProductContent">
      <section className="content">
        <h1 className="contentTitle">와이즐리 베스트 TOP6</h1>
        <p className="contentInfo">지난 달 가장 많은 판매량을 기록했어요</p>
        <ul className="productList" ref={container_Carousel}>
          {productData.map(data => (
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
      </section>
    </main>
  );
};

export default ProductContent;
