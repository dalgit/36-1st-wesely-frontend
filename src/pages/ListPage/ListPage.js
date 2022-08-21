import { useEffect, useState } from 'react';
import './ListPage.scss';
import ProductCard from './ContentItem/ProductCard';

function ListPage() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const checkStatus = res => {
      if (!res.ok) throw new Error(`Again Check Status: ${res.status}`);
      return res.json();
    };
    const uploadProductData = data => {
      setProductData(data);
    };

    fetch('/data/sample.json', {
      method: 'GET',
    })
      .then(checkStatus)
      .then(uploadProductData)
      .catch(error => console.error(error));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ListPage">
      <div className="contentTitle">
        <h1>제품보기</h1>
      </div>
      <nav className="contentCategory">
        <ul className="categoryWrapper">
          <li className="categoryName categorySelector">전체</li>
          <li className="categoryName">면도용품</li>
          <li className="categoryName">스킨케어</li>
          <li className="categoryName">두피케어</li>
          <li className="categoryName">영양제</li>
          <li className="categoryName">덴탈케어</li>
          <li className="categoryName">바디케어</li>
          <li className="categoryName">생리대</li>
        </ul>
      </nav>
      <main className="productWrapper">
        <div className="productList">
          {productData.map(product => (
            <ProductCard key={product.categoryId} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default ListPage;
