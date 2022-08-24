import ReviewList from './ReviewList/ReviewList';
import './Review.scss';

function Review({ product }) {
  const displayRating =
    Math.floor(product?.optionData?.map(list => list.avgRating) * 10) / 10;

  return (
    <div className="reviewContainer">
      <div className="reviewHeader">
        <h1>믿을 수 있는 리뷰</h1>
        <p>실제 구매한 고객분들만 작성 가능합니다.</p>
        <span>
          <strong>조작없이 100% 클린한 후기</strong>를 확인해보세요.
        </span>
      </div>
      <div className="reviewAverage">
        <div className="reviewStarAverage">
          <div className="reviewStarAverageColor">
            <h1>
              <strong>{displayRating}</strong>/5
            </h1>
            <p>★★★★☆</p>
          </div>
          <span>
            <strong>{`${product?.reviewsData?.length}개`}</strong>의 후기
          </span>
        </div>
        <div className="reviewBarAverage">
          <input type="range" />
          <input type="range" />
          <input type="range" />
          <input type="range" />
          <input type="range" />
        </div>
      </div>
      {product?.reviewsData?.map((list, idx) => {
        return <ReviewList key={idx} list={list} />;
      })}
    </div>
  );
}

export default Review;
