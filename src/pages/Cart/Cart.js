import React from 'react';
import './Cart.scss';
import CartItem from './CartItem/CartItem';
import { useState, useEffect } from 'react';

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('data/cartData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(setProducts);
  }, []);

  if (setProducts.length === 0) return;

  return (
    <div className="cartContainer">
      <div className="cartTitle">장바구니</div>
      <div className="cartMenu">
        일반구매 <span className="itemTotal">{products.length}</span>
      </div>
      <div className="cartSpace">
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
          {products.map(product => {
            return <CartItem key={product.id} {...product} />;
          })}

          <div className="billBox">
            <div className="bill">
              <span>합계</span>
              <span className="billPrice">17,000원</span>
            </div>
            <div className="bill">
              <span>배송비</span>
              <span className="billPrice">2,500원</span>
            </div>
            <div className="billGuide">
              23,100원 추가 주문 시, <span className="fontBold">무료배송</span>
            </div>
            <div className="totalBill">
              <span>결제 예정 금액</span>
              <span>9,400원</span>
            </div>
          </div>
          <div className="cartBtnBox">
            <button className="KeepBtn"> 더 담으러 가기</button>
            <button className="purchaseBtn"> 구매하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
