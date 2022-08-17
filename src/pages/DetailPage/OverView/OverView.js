import './OverView.scss';

function ImageAutoSlide() {
  return (
    <div className="overView">
      <h1 className="slideList">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQghyogVq5_ZwJcuVDG0WhP4ejmhm95wPRZcg&usqp=CAU"
          alt=""
        />
      </h1>
      <div className="productInfoWrap">
        <div className="productInfo">
          <h2>해비추얼</h2>
          <p>필수 영양소 멀티비타민</p>
        </div>
        <div className="productLike">
          <p>☆☆☆☆☆ 4.7(630)</p>
          <span>5,800원</span>
        </div>
        <div className="productBuy">
          <button>정기구독</button>
          <button>일반구매</button>
        </div>
      </div>
    </div>
  );
}

export default ImageAutoSlide;
