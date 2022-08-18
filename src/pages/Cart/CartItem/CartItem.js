import React from 'react';
import './CartItem.scss';

const CartItem = ({ products_name, type, price, thumb_img_url }) => {
  console.log('다현님사랑해', type);
  return (
    <div className="itemContainer">
      <div className="imgCover">
        <img src={thumb_img_url} alt="" className="itemImg" />
      </div>
      <div className="itemBox">
        <div className="itemInfo">
          <div>
            <div className="itemName">{products_name}</div>
            <div className="itemType">{type}</div>
          </div>
          <div className="itemPrice">{price}</div>
        </div>
        <div className="iconBox">
          <div>
            <img src="images/close.png" alt="close" className="closeImg" />
          </div>
          <div className="quantityBox">
            <button className="minusBtn">
              <i className="fa-solid fa-minus" />
            </button>
            <div className="quantityNum">1</div>
            <button className="plusBtn">
              <i className="fa-solid fa-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
