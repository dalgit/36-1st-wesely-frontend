import { useState } from 'react';
import Item from './ItemInfo';
import './Toast.scss';

function Toast({ setToast }) {
  const [arrow, setArrow] = useState(true);
  const [item, setItem] = useState([]);
  const [parentCount, setParentCount] = useState(0);

  const selectItem = ({ target }) => {
    if (item.includes(target.id)) {
      setParentCount(parentCount + 1);
    } else {
      setItem([...item, target.id]);
      setParentCount(parentCount + 1);
    }
  };

  return (
    <>
      <div className="closeBox" onClick={() => setToast(false)}>
        ×
      </div>
      <div className="toast">
        <div className="toastContainer">
          <section>
            <h1>탄력/잡티/모공/세럼</h1>
            <div className="selectBox">
              <div className="boxHandle">
                <span className="defaultText">타입</span>
                <span className="arrowButton" onClick={() => setArrow(!arrow)}>
                  ∨
                </span>
              </div>
              {arrow === true && (
                <div className="selectOption">
                  <div className="option" id="1" onClick={selectItem}>
                    item01
                  </div>
                  <div className="option" id="2" onClick={selectItem}>
                    item02
                  </div>
                  <div className="option" id="3" onClick={selectItem}>
                    item03
                  </div>
                  <div className="option" id="4" onClick={selectItem}>
                    item04
                  </div>
                </div>
              )}
            </div>
          </section>
          <Item item={item} />
        </div>
      </div>
    </>
  );
}

export default Toast;
