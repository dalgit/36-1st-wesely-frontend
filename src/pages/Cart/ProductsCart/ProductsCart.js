import React from 'react';
import CartItem from './CartItem/CartItem';
import './ProductsCart.scss';

const ProductsCart = ({
  products,
  setProducts,
  isSubscribe,
  setIsSubscribe,
}) => {
  const totalPrice = products.reduce(
    (acc, cur) => acc + Number(cur.price * cur.quantity),
    0
  );

  const parcel = totalPrice < 30000 ? 2500 : 0;

  return (
    <>
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
                  isSubscribe === idx ? setIsSubscribe('') : setIsSubscribe(idx)
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
          <span className="billPrice">
            {totalPrice.toLocaleString() + '원'}
          </span>
        </div>
        <div className="bill">
          <span>배송비</span>
          <span className="billPrice">
            {parcel !== 0 ? parcel.toLocaleString() + '원' : '무료'}
          </span>
        </div>
        <div className="billGuide">
          {totalPrice < 30000 ? (
            <span>
              {(30000 - totalPrice).toLocaleString()}원 추가 주문 시
              <span className="fontBold"> 무료배송</span>
            </span>
          ) : null}
        </div>
        <div className="totalBill">
          <span>결제 예정 금액</span>
          <span>{(totalPrice + parcel).toLocaleString() + '원'}</span>
        </div>
      </div>
      <div className="cartBtnBox">
        <button className="KeepBtn"> 더 담으러 가기</button>
        <button className="purchaseBtn"> 구매하기</button>
      </div>
    </>
  );
};

export default ProductsCart;

const periods = ['4주', '8주', '12주', '16주'];
