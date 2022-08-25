import { useState, useEffect } from 'react';
import Nav from '../../../components/Nav/Nav';
import './UnderBar.scss';

function UnderBar() {
  const [barState, setUnderBarState] = useState('');

  useEffect(() => {
    window.addEventListener('wheel', e => navHandleScroll(e));
    return () => {
      window.removeEventListener('wheel', e => navHandleScroll(e));
    };
  }, []);

  const navHandleScroll = e => {
    e.deltaY > 0 && setUnderBarState('noHeader');
    window.scrollY > 689 && setUnderBarState('underBar');
    e.deltaY < 0 && setUnderBarState('fixed');
  };

  return (
    <>
      {barState === '' || barState === 'noHeader' || barState === 'fixed' ? (
        <Nav navState={barState} />
      ) : (
        ''
      )}
      {barState === 'underBar' && (
        <div className={`underBarContainer ${barState}`}>
          <div className="underBarBox">
            <h1>탈모 고민용 부스터 100ml</h1>
            <div className="underBarMainContent">
              <div className="underBarAverage">
                <div className="underBarAverageStar">★★★★☆</div>
                <div className="underBarAverageRating">4.6</div>
                <div className="underBarAverageTotalReview">(327)</div>
                <div className="underBarAveragePrice">4,900원</div>
              </div>
              <div className="underBarBuyButtonWrap">
                <button className="underBarSubscribeButton">정기구독</button>
                <button className="underBarBuyButton">일반구매</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UnderBar;
