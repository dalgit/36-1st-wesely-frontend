import ReviewList from './ReviewList';
import './Review.scss';

function Review() {
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
              <strong>4.6</strong>/5
            </h1>
            <p>★★★★☆</p>
          </div>
          <span>
            <strong>172개</strong>의 후기
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
      <ReviewList />
      <ReviewList />
      <ReviewList />
      <ReviewList />
      <ReviewList />
    </div>
  );
}

export default Review;
