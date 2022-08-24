import React from 'react';
import './CartItem.scss';

const CartItem = ({
  image_id,
  name,
  options,
  price,
  totalQuantity,
  image_url,
  products,
  setProducts,
}) => {
  function quantityPlus() {
    setProducts(
      products.map(product =>
        product.image_id === image_id
          ? { ...product, totalQuantity: Number(totalQuantity) + 1 }
          : product
      )
    );
  }

  function quantityMinus() {
    setProducts(
      products.map(product =>
        product.image_id === image_id && product.totalQuantity > 1
          ? { ...product, totalQuantity: Number(totalQuantity) - 1 }
          : product
      )
    );
  }

  function productDelete() {
    setProducts(products.filter(product => product.image_id !== image_id));
  }

  return (
    <div className="itemContainer">
      <div className="imgCover">
        <img src={image_url} alt="itemImg" className="itemImg" />
      </div>
      <div className="itemBox">
        <div className="itemInfo">
          <div>
            <div className="itemName">{name}</div>
            <div className="itemType">{options}</div>
          </div>
          <div className="itemPrice">
            {Number(price * totalQuantity).toLocaleString() + '원'}
          </div>
        </div>
        <div className="iconBox">
          <div>
            <i className="fa-solid fa-xmark" onClick={productDelete} />
          </div>
          <div className="quantityBox">
            <button className="minusBtn" onClick={quantityMinus}>
              <i className="fa-solid fa-minus" />
            </button>
            <div className="quantityNum">{totalQuantity}</div>
            <button className="plusBtn" onClick={quantityPlus}>
              <i className="fa-solid fa-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
