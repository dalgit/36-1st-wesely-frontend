import { useState } from 'react';
import DropDown from '../DropDown/DropDown';
import './OpenDetailView.scss';

function OpenDetailView({ location }) {
  const [buttonToggle, setButtonToggle] = useState(false);
  return (
    <div className="openDetailViewContainer">
      <div className={buttonToggle === true ? '' : 'openDetailViewClose'}>
        <div className="openDetailViewImage">
          <img src={location.state.image} alt="" />
        </div>
      </div>
      <div className="openDetailViewButton">
        <button
          onClick={() => {
            setButtonToggle(!buttonToggle);
          }}
        >
          {buttonToggle === true ? '상세페이지 접기' : '상세페이지 펼쳐 보기'}
        </button>
      </div>
      <div className="dropDownContainer">
        <DropDown />
        <DropDown />
      </div>
    </div>
  );
}
export default OpenDetailView;
