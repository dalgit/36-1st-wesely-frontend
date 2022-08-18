import { useState } from 'react';
import Toast from '../Toast/Toast';
import './OverView.scss';

function ImageAutoSlide() {
  const [toast, setToast] = useState(false);
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
                <p>☆☆☆☆☆ 4.7(630)</p>
                <span>5,800원</span>
              </div>
              <div className="productBuy">
                <button onClick={() => setToast(!toast)}>정기구독</button>
                <button onClick={() => setToast(!toast)}>일반구매</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {toast === true && <Toast />}
    </>
  );
}

export default ImageAutoSlide;
