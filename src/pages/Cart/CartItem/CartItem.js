import React from 'react';
import './CartItem.scss';

const CartItem = () => {
  return (
    <div className="itemContainer">
      <img src="images\item1.png" alt="" className="itemImg" />
      <div className="itemBox">
        <div className="itemInfo">
          <div>
            <div className="itemName">유기농 순면 생리대 중형/대형</div>
            <div className="itemType">중형(14개입)</div>
          </div>
          <div className="itemPrice">2,300원</div>
        </div>
        <div className="iconBox">
          <div>
            <img src="images/close.png" alt="close" className="closeImg" />
          </div>
          <div className="quantityBox">
            <button className="minusBtn">
              <img src="images/minus.png" alt="minus" />
            </button>
            <div className="quantityNum">1</div>
            <button className="plusBtn">
              <img src="images/plus.png" alt="plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
