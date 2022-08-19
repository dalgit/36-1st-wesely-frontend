import { useState } from 'react';

function Item({ item, setItem }) {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
  };

  const countDown = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <section className="itemContainer">
      <div className="itemContent">
        {item.map((list, idx) => {
          return (
            <div key={idx} className="itemMain">
              <h1 className="itemImage">
                <img
                  src="http://holtzforman.com/shopimages/holtzforma/0010000000102.jpg"
                  alt=""
                />
              </h1>
              <div className="itemInfoWrap">
                <div>
                  <div className="titleWrap">
                    <h3>활력충전 멀티 비타민</h3>
                    <button>×</button>
                  </div>
                  <p>필수 영양소 멀티비타민</p>
                </div>
                <div>
                  <div className="itemCount">
                    <span className="price">5,800원</span>
                    <div className="count">
                      <button onClick={countDown}>-</button>
                      <span>{count}</span>
                      <button onClick={countUp}>+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="itemTotal">
          <span>
            총 수량 <strong>{count}</strong>개
          </span>
          <span>4,900원</span>
        </div>
      </div>
      <div className="itemBuy">
        <button
          className="cartButton"
          /* onClick={() => setToast(!toast)} */
        >
          장바구니
        </button>
        <button
          className="buyButton"
          /* onClick={() => setToast(!toast)} */
        >
          일반구매
        </button>
      </div>
    </section>
  );
}

export default Item;
