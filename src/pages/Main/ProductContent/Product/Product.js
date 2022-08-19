import './product.scss';

const Product = ({ imgUrl, desc, price }) => {
  return (
    <li className="productRigth">
      <div className="product">
        <img className="productImg" src={imgUrl} alt="" />
        <p className="productInfo">{desc}</p>
        <h2 className="productTitle">{price}</h2>
      </div>
    </li>
  );
};

export default Product;
