import { useEffect, useRef, useState } from 'react';
import './ProductContent.scss';

import ContentCarousel from './ContentCarousel/ContentCarousel';
import API from '../../../config';

const ProductContent = () => {
  const [productData, setProductData] = useState([]);

  const [productPos1, setProductPos1] = useState(0);
  const [productPos2, setProductPos2] = useState(0);

  const { ratingTop9, salesTop9 } = productData;
  const carouselMoveSize = 284;

  const productList1 = useRef();
  const productList2 = useRef();

  useEffect(() => {
    productList1.current.style.transform = `translateX(${productPos1}px)`;
  }, [productPos1]);

  useEffect(() => {
    productList2.current.style.transform = `translateX(${productPos2}px)`;
  }, [productPos2]);

  useEffect(() => {
    const checkStatus = res => {
      if (!res.ok) throw new Error(`Again Check Status: ${res.status}`);
      return res.json();
    };
    const uploadProductData = data => {
      setProductData(data);
    };
    const getProductData = url =>
      fetch(url, {
        method: 'GET',
      });

    getProductData(`${API.home}`)
      .then(checkStatus)
      .then(uploadProductData)
      .catch(error => console.error(error));
  }, []);

  return (
    <main className="ProductContent">
      <section className="content">
        <h1 className="contentTitle">와이즐리 베스트 TOP9</h1>
        <p className="contentInfo">지난 달 가장 많은 판매량을 기록했어요</p>
        <ContentCarousel
          setProductPos={setProductPos1}
          carouselData={ratingTop9}
          carouselMoveSize={carouselMoveSize}
          productList={productList1}
          productPos={productPos1}
        />
      </section>
      <section className="content">
        <h1 className="contentTitle">30대 고객의 현명한 선택</h1>
        <p className="contentInfo">지난 한 달 장바구니에 가장 많이 담았어요</p>
        <ContentCarousel
          setProductPos={setProductPos2}
          carouselData={salesTop9}
          carouselMoveSize={carouselMoveSize}
          productList={productList2}
          productPos={productPos2}
        />
      </section>
    </main>
  );
};

export default ProductContent;
