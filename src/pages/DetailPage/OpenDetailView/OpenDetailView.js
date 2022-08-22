import { useState } from 'react';
import './OpenDetailView.scss';

function OpenDetailView({ location }) {
  const [buttonToggle, setButtonToggle] = useState(false);
  return (
    <div className="OpenDetailViewContainer">
      <div className={buttonToggle === true ? '' : 'OpenDetailViewClose'}>
        <div className="OpenDetailViewImage">
          <img src={location.state.image} alt="" />
        </div>
      </div>
      <div className="OpenDetailViewButton">
        <button
          onClick={() => {
            setButtonToggle(!buttonToggle);
          }}
        >
          {buttonToggle === true ? '상세페이지 접기' : '상세페이지 펼쳐 보기'}
        </button>
      </div>
    </div>
  );
}
export default OpenDetailView;
