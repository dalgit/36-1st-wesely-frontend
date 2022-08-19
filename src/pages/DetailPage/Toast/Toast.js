import { useState } from 'react';
import Item from './ItemInfo';
import './Toast.scss';

function Toast({ setToast }) {
  const [arrow, setArrow] = useState(true);

  const [item, setItem] = useState(false);

  return (
    <>
      <div className="closeBox" onClick={() => setToast(false)}>
        ×
      </div>
      <div className="toast">
        <div className="toastContainer">
          <section>
            <h1>탄력/잡티/모공/세럼</h1>
            <div className="selectBox" onClick={() => setArrow(!arrow)}>
              <div className="boxHandle">
                <span className="defaultText">타입</span>
                <span className="arrowButton">∨</span>
              </div>
              {arrow === true && (
                <div className="selectOption">
                  <div className="option" onClick={() => setItem(!item)}>
                    item01
                  </div>
                  <div className="option" onClick={() => setItem(!item)}>
                    item02
                  </div>
                  <div className="option" onClick={() => setItem(!item)}>
                    item03
                  </div>
                  <div className="option" onClick={() => setItem(!item)}>
                    item04
                  </div>
                </div>
              )}
            </div>
          </section>
          {item === true && <Item setItem={setItem} />}
        </div>
      </div>
    </>
  );
}

export default Toast;
