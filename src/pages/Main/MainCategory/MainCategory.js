import { Link } from 'react-router-dom';

import './MainCategory.scss';

const MainCategory = () => {
  return (
    <section className="MainCategory">
      <nav>
        <ul className="categoryWrapper">
          {categoryData.map(category => (
            <li key={category.id} className="categoryName">
              <Link to={category.connectURL}>{category.categoryName}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default MainCategory;

const categoryData = [
  {
    id: 0,
    categoryName: '전체',
    connectURL: '/product/home',
  },
  {
    id: 1,
    categoryName: '면도용품',
    connectURL: '/product/home?offset=0&limit=6&category=1',
  },
  {
    id: 2,
    categoryName: '스킨케어',
    connectURL: '/product/home?offset=0&limit=6&category=2',
  },
  {
    id: 3,
    categoryName: '두피케어',
    connectURL: '/product/home?offset=0&limit=6&category=3',
  },
  {
    id: 4,
    categoryName: '영양제',
    connectURL: '/product/home?offset=0&limit=6&category=4',
  },
  {
    id: 5,
    categoryName: '덴탈케어',
    connectURL: '/product/home?offset=0&limit=6&category=5',
  },
  {
    id: 6,
    categoryName: '바디케어',
    connectURL: '/product/home?offset=0&limit=6&category=6',
  },
  {
    id: 7,
    categoryName: '생리대',
    connectURL: '/product/home?offset=0&limit=6&category=7',
  },
];
