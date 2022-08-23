import { useState } from 'react';
import BuyModal from '../BuyModal/BuyModal';
import './OverView.scss';

function OverView({ product }) {
  const [buyModalToggle, setBuyModalToggle] = useState(false);
  console.log(product);
  const optionArray = product[0]?.options.slice('');
  console.log(optionArray);

  const displayRating = Math.floor(product[2]?.avgRating * 10) / 10;

  return (
    <>
      <div className="overView">
        <div className="overViewContainer">
          <h1 className="productImage">
            <img src={product[0]?.thumbImg} alt="" />
          </h1>
          <div className="productInfoWrap">
            <div className="productInfo">
              <h2>해비추얼</h2>
              <h3>{product[0]?.productName}</h3>
              <p>{product[0]?.description}</p>
            </div>
            <div className="productMain">
              <div className="productLike">
                <div className="totalReview">
                  <p className="star">★★★★☆</p>
                  <p className="number">
                    {Number(displayRating).toLocaleString()}
                  </p>
                  <span>
                    ({Number(product[0]?.countRating).toLocaleString()})
                  </span>
                </div>
                <span className="price">
                  {Number(product[0]?.price).toLocaleString()}
                </span>
              </div>
              <div className="productBuy">
                <button
                  className="productBuyButton"
                  onClick={() => setBuyModalToggle(!buyModalToggle)}
                >
                  구매
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {buyModalToggle && (
        <BuyModal setBuyModalToggle={setBuyModalToggle} product={product} />
      )}
    </>
  );
}

export default OverView;
