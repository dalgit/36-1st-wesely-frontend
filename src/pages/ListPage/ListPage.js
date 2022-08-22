import { useEffect, useState } from 'react';
import './ListPage.scss';
import ProductCard from './ContentItem/ProductCard';
import { useSearchParams } from 'react-router-dom';

function ListPage() {
  const [productData, setProductData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [offset, setOffSet] = useState(0);

  console.log(offset);

  // setOffSet(prev => searchParams.set(prev + 10));

  useEffect(() => {
    const checkStatus = res => {
      if (!res.ok) throw new Error(`Again Check Status: ${res.status}`);
      return res.json();
    };
    const uploadProductData = data => {
      setProductData(data);
    };
    //* `http://10.58.0.28:3000/product/home?_start=${offset}&_limit=10`
    fetch(`http://10.58.0.28:3000/product/home?category=1`, {
      method: 'GET',
    })
      .then(checkStatus)
      .then(uploadProductData)
      .catch(error => console.error(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);
  console.log(productData);

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
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default ListPage;
