import './ReviewList.scss';

function ReviewList({ list, rating, maxScore, displayRating }) {
  return (
    <div className="reviewListContainer">
      <div className="reviewListStar">
        {[...Array(maxScore)].map((_, i) => rating(displayRating, i))}
      </div>
      <div className="reviewListText">{list.content}</div>
      <div className="reviewListUserInfo">
        <div className="reviewListUser">
          <div className="user">{list.name}</div>
          <div className="option">{list.options}</div>
        </div>
        <div className="reviewListUserDate">{list.postReviewDate}</div>
      </div>
    </div>
  );
}

export default ReviewList;
