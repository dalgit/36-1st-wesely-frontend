import ReviewList from './ReviewList/ReviewList';
import ReviewRange from './ReviewRange/ReviewRange';
import PaginationButton from './PaginationButton/PaginationButton';
import './Review.scss';

function Review({ product, offset, setOffset, LIMIT }) {
  console.log('pr', product);
  const displayRating =
    Math.floor(product?.optionData?.map(list => list.avgRating) * 10) / 10;

  const totalReview = product?.reviewsData?.length;

  const changeOffset = id => {
    console.log(id);
    setOffset(id * 7);
  };

  const buttonCount =
    product?.reviewsDistribution?.reduce(
      (prev, curr) => prev + Number(curr.countRating),
      0
    ) / LIMIT;

  const buttonRender = () => {
    const array = [];
    for (let i = 0; i < buttonCount; i++) {
      array.push(
        <PaginationButton
          key={i}
          id={i + 1}
          changeOffset={changeOffset}
          offset={offset}
        />
      );
    }
    return array;
  };

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
              <strong>{`${displayRating}`}</strong>/5
            </h1>
            <p>★★★★☆</p>
          </div>
          <span>
            <strong>{`${totalReview}개`}</strong>의 후기
          </span>
        </div>
        <div className="reviewBarAverage">
          {product?.reviewsDistribution?.map(list => {
            return (
              <ReviewRange
                key={list.rating}
                list={list}
                totalReview={totalReview}
              />
            );
          })}
        </div>
      </div>
      {product?.reviewsData?.map((list, idx) => (
        <ReviewList key={idx} list={list} />
      ))}
      <div className="reviewPaginationContainer">{buttonRender()}</div>
    </div>
  );
}

export default Review;
