import './ReviewRange.scss';

function ReviewRange({ list, totalReview }) {
  const countRating = Number(list.countRating);

  const percent = parseInt((countRating / totalReview) * 100);

  return (
    <div className="reviewRangeContainer">
      <div className="reviewRangePercent">{Number(percent)}</div>
      <input type="range" defaultValue={percent} disabled />
      <div className="reviewRangeRating">{list.rating}</div>
    </div>
  );
}

export default ReviewRange;
