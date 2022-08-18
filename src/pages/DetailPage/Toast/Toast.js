import { useState } from 'react';
import './Toast.scss';

function Toast({ setToast }) {
  const [arrow, setArrow] = useState(true);
  const [count, setCount] = useState(1);

  const countUp = () => {
    setCount(count + 1);
  };

  const countDown = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className="closeBox" onClick={() => setToast(false)}>
        ×
      </div>
      <div className="toast">
        <div className="toastContainer">
          <section>
            <h1>탄력/잡티/모공/세럼</h1>
            <div className="selectBox" onClick={() => setArrow(!arrow)}>
              <div className="boxHandle">
                <span className="defaultText">타입</span>
                <span className="arrowButton">∨</span>
              </div>
              {arrow === true && (
                <div className="selectOption">
                  <div className="option">item01</div>
                  <div className="option">item02</div>
                  <div className="option">item03</div>
                  <div className="option">item04</div>
                </div>
              )}
            </div>
          </section>
          <section className="itemContainer">
            <div>
              <div className="itemMain">
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
                정기구독
              </button>
              <button
                className="buyButton"
                /* onClick={() => setToast(!toast)} */
              >
                일반구매
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Toast;
