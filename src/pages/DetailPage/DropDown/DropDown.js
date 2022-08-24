import { useState } from 'react';
import './DropDown.scss';

function DropDown() {
  const [dropDown, setDropDown] = useState(false);

  const dropDownToggleChange = () => {
    setDropDown(!dropDown);
  };
  return (
    <>
      <div className="dropDownBox" onClick={dropDownToggleChange}>
        <div>주문 및 배송 안내</div>
        <button>˅</button>
      </div>
      {dropDown && (
        <div className="modalImage">
          <img
            src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FSxGti%2FbtrJ3ivvswo%2FrjlGV9AUTUXbmZVCsiRlMk%2Fimg.png"
            alt=""
          />
        </div>
      )}
    </>
  );
}

export default DropDown;
