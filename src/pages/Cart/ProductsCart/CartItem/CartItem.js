import React from 'react';
import './CartItem.scss';

const CartItem = ({
  id,
  products_name,
  type,
  price,
  quantity,
  thumb_img_url,
  products,
  setProducts,
}) => {
  function quantityPlus() {
    setProducts(
      products.map(product =>
        product.id === id
          ? { ...product, quantity: Number(quantity) + 1 }
          : product
      )
    );
  }

  function quantityMinus() {
    setProducts(
      products.map(product =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: Number(quantity) - 1 }
          : product
      )
    );
  }

  return (
    <div className="itemContainer">
      <div className="imgCover">
        <img src={thumb_img_url} alt="itemImg" className="itemImg" />
      </div>
      <div className="itemBox">
        <div className="itemInfo">
          <div>
            <div className="itemName">{products_name}</div>
            <div className="itemType">{type}</div>
          </div>
          <div className="itemPrice">
            {Number(price * quantity).toLocaleString() + '원'}
          </div>
        </div>
        <div className="iconBox">
          <div>
            <i
              className="fa-solid fa-xmark"
              onClick={() =>
                setProducts(products.filter(product => product.id !== id))
              }
            />
          </div>
          <div className="quantityBox">
            <button className="minusBtn" onClick={quantityMinus}>
              <i className="fa-solid fa-minus" />
            </button>
            <div className="quantityNum">{quantity}</div>
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
