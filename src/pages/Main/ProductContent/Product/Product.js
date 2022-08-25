import { Link } from 'react-router-dom';

import './product.scss';

const Product = ({ thumbImg, name, price, id }) => {
  return (
    <Link to={`/DetailPage/${id}`}>
      <li className="productRigth">
        <div className="product">
          <img className="productImg" src={thumbImg} alt="" />
          <p className="productInfo">{name}</p>
          <h2 className="productTitle">
            {price.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
          </h2>
        </div>
      </li>
    </Link>
  );
};

export default Product;
