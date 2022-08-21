import { useState } from 'react';
import Toast from '../Toast/Toast';
import './OverView.scss';

function OverView({ location }) {
  const [toast, setToast] = useState(false);

  return (
    <>
      <div className="overView">
        <div className="overViewContainer">
          <h1 className="productImage">
            <img src={location.state.image} alt="" />
          </h1>
          <div className="productInfoWrap">
            <div className="productInfo">
              <h2>{location.state.title}</h2>
              <h3>{location.state.subTitle}</h3>
              <p>{location.state.p}</p>
            </div>
            <div className="productMain">
              <div className="productLike">
                <div className="totalReview">
                  <p className="star">★★★★☆</p>
                  <p className="number">4.7</p>
                  <span>(630)</span>
                </div>
                <span className="price">{location.state.price}</span>
              </div>
              <div className="productBuy">
                <button
                  className="productBuyButton"
                  onClick={() => setToast(!toast)}
                >
                  구매
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {toast === true && (
        <Toast setToast={setToast} location={location.state} />
      )}
    </>
  );
}

export default OverView;
