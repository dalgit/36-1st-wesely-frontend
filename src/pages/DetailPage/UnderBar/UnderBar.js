import './UnderBar.scss';

function UnderBar() {
  return (
    <div className="UnderBarContainer">
      <div className="UnderBarBox">
        <h1>탈모 고민용 부스터 100ml</h1>
        <div className="UnderBarMainContent">
          <div className="UnderBarAverage">
            <div className="UnderBarAverageStar">★★★★☆</div>
            <div className="UnderBarAverageRating">4.6</div>
            <div className="UnderBarAverageTotalReview">(327)</div>
            <div className="UnderBarAveragePrice">4,900원</div>
          </div>
          <div className="UnderBarBuyButtonWrap">
            <button className="UnderBarSubscribeButton">정기구독</button>
            <button className="UnderBarBuyButton">일반구매</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnderBar;
