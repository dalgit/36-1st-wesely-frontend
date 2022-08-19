import React from 'react';
import './Cart.scss';
import CartItem from './CartItem/CartItem';
import { useState, useEffect } from 'react';

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [isSubscribe, setIsSubscribe] = useState('');

  useEffect(() => {
    fetch('data/cartData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(setProducts);
  }, []);

  if (setProducts.length === 0) return;
  console.log(products);
  return (
    <div className="cartContainer">
      <div className="cartTitle">장바구니</div>
      <div className="cartMenu">
        {isSubscribe === '' ? '일반구매' : '정기구독'}
        <span className="itemTotal">{products.length}</span>
      </div>
      <div className="cartSpace">
        <div className="cartBox">
          <div className="subscribeBox">
            <div className={`subscribeTitle ${isSubscribe !== ''}`}>
              정기 구독 주기
            </div>
            <ul className="subscribeList">
              {periods.map((period, idx) => {
                return (
                  <button
                    className={`subscribe ${isSubscribe === idx}`}
                    key={idx}
                    onClick={() =>
                      isSubscribe === idx
                        ? setIsSubscribe('')
                        : setIsSubscribe(idx)
                    }
                  >
                    {period}
                  </button>
                );
              })}
            </ul>
          </div>
          {products.map(product => {
            return (
              <CartItem
                key={product.id}
                {...product}
                products={products}
                setProducts={setProducts}
              />
            );
          })}

          <div className="billBox">
            <div className="bill">
              <span>합계</span>
              <span className="billPrice">19,000원</span>
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

const periods = ['4주', '8주', '12주', '16주'];
