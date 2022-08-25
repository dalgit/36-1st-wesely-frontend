import { useState } from 'react';
import DropDown from '../DropDown/DropDown';
import './OpenDetailView.scss';

function OpenDetailView({ product }) {
  const [buttonToggle, setButtonToggle] = useState(false);

  const openDetailViewToggleChange = () => {
    setButtonToggle(!buttonToggle);
  };
  return (
    <div className="openDetailViewContainer">
      <div className={buttonToggle ? '' : 'openDetailViewClose'}>
        <div className="openDetailViewImage">
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FSxGti%2FbtrJ3ivvswo%2FrjlGV9AUTUXbmZVCsiRlMk%2Fimg.png"
            alt=""
          />
        </div>
      </div>
      <div className="openDetailViewButton">
        <button onClick={openDetailViewToggleChange}>
          {buttonToggle ? '상세페이지 접기' : '상세페이지 펼쳐 보기'}
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
