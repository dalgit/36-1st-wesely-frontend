import React from 'react';
import './Cart.scss';
import CartItem from './CartItem/CartItem';

const Cart = () => {
  return (
    <div className="cartContainer">
      <div className="cartTitle">장바구니</div>
      <div className="cartMenu">
        일반구매 <span className="itemTotal">2</span>
      </div>
      <dvi className="cartSpace">
        <div className="cartBox">
          <div className="subscribeBox">
            <div className="subscribeTitle">정기 구독 주기</div>
            <ul className="subscribeList">
              <li className="subscribe">4주</li>
              <li className="subscribe">8주</li>
              <li className="subscribe">12주</li>
              <li className="subscribe">16주</li>
            </ul>
          </div>
          <CartItem />
          <CartItem />
          <div className="billBox">
            <div className="bill">
              <sapn>합계</sapn>
              <sapn className="billPrice">17,000원</sapn>
            </div>
            <div className="bill">
              <sapn>배송비</sapn>
              <sapn className="billPrice">2,500원</sapn>
            </div>
            <div className="billGuide">
              23,100원 추가 주문 시, <span className="fontBold">무료배송</span>
            </div>
            <div className="totalBill">
              <sapn>결제 예정 금액</sapn>
              <sapn>9,400원</sapn>
            </div>
          </div>
          <div className="cartBtnBox">
            <button className="KeepBtn"> 더 담으러 가기</button>
            <button className="purchaseBtn"> 구매하기</button>
          </div>
        </div>
      </dvi>
    </div>
  );
};

export default Cart;
