import './ReviewList.scss';

function ReviewList() {
  return (
    <div className="reviewListContainer">
      <div className="reviewListStar">★★★★☆</div>
      <div className="reviewListText">
        좋아요!! 피부에 부드럽게 발리고 트러블 없이 잘 쓰고 왔어요 민감성이라
        그런지 부스터 바르고 사용하니 약간 끈적임이 있네요 습도 높은 여름이라
        그럴 수 있어서 건조한 겨울에 바르면 다를 지도 모르겠네요.
      </div>
      <div className="reviewListUserInfo">
        <div className="reviewListUser">
          <div className="user">hyukskee</div>
          <div className="option">지성용</div>
        </div>
        <div className="reviewListUserDate">22.08.21</div>
      </div>
    </div>
  );
}

export default ReviewList;
