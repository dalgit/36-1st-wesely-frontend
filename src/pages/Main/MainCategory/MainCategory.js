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
    connectURL: '#',
  },
  {
    id: 1,
    categoryName: '면도용품',
    connectURL: '#',
  },
  {
    id: 2,
    categoryName: '스킨케어',
    connectURL: '#',
  },
  {
    id: 3,
    categoryName: '두피케어',
    connectURL: '#',
  },
  {
    id: 4,
    categoryName: '영양제',
    connectURL: '#',
  },
  {
    id: 5,
    categoryName: '덴탈케어',
    connectURL: '#',
  },
  {
    id: 6,
    categoryName: '바디케어',
    connectURL: '#',
  },
  {
    id: 7,
    categoryName: '생리대',
    connectURL: '#',
  },
];
