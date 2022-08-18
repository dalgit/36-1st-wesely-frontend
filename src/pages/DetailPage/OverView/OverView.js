import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Toast from '../Toast/Toast';
import './OverView.scss';

function OverView() {
  const [toast, setToast] = useState(false);

  const { state } = useLocation();

  return (
    <>
      <div className="overView">
        <div className="overViewContainer">
          <h1 className="productImage">
            <img
              src="http://holtzforman.com/shopimages/holtzforma/0010000000102.jpg"
              alt=""
            />
          </h1>
          <div className="productInfoWrap">
            <div className="productInfo">
              <h2>해비추얼</h2>
              <h3>활력충전 멀티 비타민</h3>
              <p>필수 영양소 멀티비타민</p>
            </div>
            <div className="productMain">
              <div className="productLike">
                <div className="totalReview">
                  <p className="star">★★★★☆</p>
                  <p className="number">4.7</p>
                  <span>(630)</span>
                </div>
                <span className="price">5,800원</span>
              </div>
              <div className="productBuy">
                <button
                  className="subscribeButton"
                  onClick={() => setToast(!toast)}
                >
                  정기구독
                </button>
                <button className="normalButton" Click={() => setToast(!toast)}>
                  일반구매
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {toast === true && <Toast />}
    </>
  );
}

export default OverView;
