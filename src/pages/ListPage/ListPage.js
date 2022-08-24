import { useEffect, useState } from 'react';
import './ListPage.scss';
import ProductCard from './ContentItem/ProductCard';
import { useSearchParams } from 'react-router-dom';
import PageBtn from './PageBtn/PageBtn';

import API from '../../config';

function ListPage() {
  const [productData, setProductData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(0);
  const [offset, setOffSet] = useState(0);

  const maxLimit = 6;

  useEffect(() => {
    const checkStatus = res => {
      if (!res.ok) throw new Error(`Again Check Status: ${res.status}`);
      return res.json();
    };
    const uploadProductData = data => {
      setProductData(data);
    };

    fetch(
      `${API.product}?${
        category === 0
          ? `offset=${offset}&limit=${maxLimit}`
          : `offset=${offset}&limit=${maxLimit}&categoryId=${category}`
      }`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then(checkStatus)
      .then(uploadProductData)
      .catch(error => console.error(error));
  }, [category, offset]);

  const movePage = pageNumber => {
    const settingOffset = (pageNumber - 1) * 6;
    searchParams.set('offset', settingOffset);
    searchParams.set('limit', maxLimit);
    setOffSet(settingOffset);
    setSearchParams(searchParams);
  };

  const moveCategory = categoryId => {
    if (categoryId !== 0) {
      searchParams.set('category', categoryId);
      searchParams.set('offset', 0);
      searchParams.set('limit', maxLimit);
      setOffSet(0);
    } else {
      searchParams.delete('category');
    }
    setCategory(categoryId);
    setSearchParams(searchParams);
  };

  return (
    <div className="listPage">
      <div className="contentTitle">
        <h1>제품보기</h1>
      </div>
      <nav className="contentCategory">
        <ul className="categoryWrapper">
          {categoryData.map(cateData => (
            <li
              className={`categoryName ${
                cateData.id === category && 'currentCategory'
              }`}
              key={cateData.id}
              onClick={() => {
                moveCategory(cateData.id);
              }}
            >
              {cateData.categoryName}
            </li>
          ))}
        </ul>
      </nav>
      <main className="productWrapper">
        <div className="productList">
          {productData.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <PageBtn movePage={movePage} />
      </main>
    </div>
  );
}

export default ListPage;

const categoryData = [
  {
    id: 0,
    categoryName: '전체',
  },
  {
    id: 1,
    categoryName: '면도용품',
  },
  {
    id: 2,
    categoryName: '스킨케어',
  },
  {
    id: 3,
    categoryName: '두피케어',
  },
  {
    id: 4,
    categoryName: '영양제',
  },
  {
    id: 5,
    categoryName: '덴탈케어',
  },
  {
    id: 6,
    categoryName: '바디케어',
  },
  {
    id: 7,
    categoryName: '생리대',
  },
];
