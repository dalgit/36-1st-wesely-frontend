import { useEffect, useState } from 'react';
import './ListPage.scss';
import ProductCard from './ContentItem/ProductCard';
import { useSearchParams } from 'react-router-dom';
import PageBtn from './PageBtn/PageBtn';

function ListPage() {
  const [productData, setProductData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(0);
  const [offset, setOffSet] = useState(0);

  useEffect(() => {
    const checkStatus = res => {
      if (!res.ok) throw new Error(`Again Check Status: ${res.status}`);
      return res.json();
    };
    const uploadProductData = data => {
      setProductData(data);
    };

    fetch(
      `http://10.58.0.224:3000/product/home?${
        category === 0
          ? `offset=${offset}&limit=6`
          : `offset=${offset}&limit=6&category=${category}`
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
    const maxLimit = 6;
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
      searchParams.set('limit', 6);
      setOffSet(0);
    } else {
      searchParams.delete('category');
    }
    setCategory(categoryId);
    setSearchParams(searchParams);
  };

  return (
    <div className="ListPage">
      <div className="contentTitle">
        <h1>제품보기</h1>
      </div>
      <nav className="contentCategory">
        <ul className="categoryWrapper">
          {categoryData.map(category => (
            <li
              className="categoryName"
              key={category.id}
              onClick={() => {
                moveCategory(category.id);
              }}
              id={category.id}
            >
              {category.categoryName}
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
