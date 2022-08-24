import React from 'react';
import CartItem from './CartItem/CartItem';
import './ProductsCart.scss';
import { Link } from 'react-router-dom';

const ProductsCart = ({
  products,
  setProducts,
  subscriptionCycle,
  setSubscriptionCycle,
}) => {
  const totalPrice = products?.reduce(
    (acc, cur) => acc + Number(cur.price * cur.totalQuantity),
    0
  );

  const totalWon = totalPrice.toLocaleString() + '원';

  return (
    <>
      <div className="subscribeBox">
        <div className={`subscribeTitle ${subscriptionCycle !== ''}`}>
          정기 구독 주기
        </div>
        <ul className="subscribeList">
          {PERIOD_LIST.map(info => {
            return (
              <button
                className={`subscribe ${subscriptionCycle === info.id}`}
                key={info.id}
                onClick={() =>
                  subscriptionCycle === info.id
                    ? setSubscriptionCycle('')
                    : setSubscriptionCycle(info.id)
                }
              >
                {info.period}
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
          <span className="billPrice">{totalWon}</span>
        </div>
        <div className="bill">
          <span>배송비</span>
          <span className="billPrice">무료</span>
        </div>
        <div className="totalBill">
          <span>결제 예정 금액</span>
          <span>{totalWon}</span>
        </div>
      </div>
      <div className="cartBtnBox">
        <Link to="/">
          <button className="keepBtn"> 더 담으러 가기</button>
        </Link>
        <button className="purchaseBtn"> 구매하기</button>
      </div>
    </>
  );
};

export default ProductsCart;

const PERIOD_LIST = [
  { id: 1, period: '4주' },
  { id: 2, period: '8주' },
  { id: 3, period: '12주' },
  { id: 5, period: '16주' },
];
