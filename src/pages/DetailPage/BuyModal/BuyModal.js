import { useState } from 'react';
import ItemList from './ItemList';
import './BuyModal.scss';

function BuyModal({ setBuyModalToggle, location }) {
  const [arrowToggle, setArrowToggle] = useState(true);
  const [selectedItem, setSelectedItem] = useState([]);

  const selectItem = ({ target }) => {
    if (!selectedItem.includes(location.option[Number(target.id)])) {
      setSelectedItem([
        ...selectedItem,
        Object.assign(location.option[Number(target.id)], {
          quantity: 1,
          price: location.price,
        }),
      ]);
    }
  };

  const deleteItem = id => {
    const filteredItem = [...selectedItem].filter(item => item.id !== id);
    setSelectedItem(filteredItem);
  };

  return (
    <div className="buyModalBox">
      <div className="toast">
        <div className="toastContainer">
          <div className="closeBox" onClick={() => setBuyModalToggle(false)}>
            ×
          </div>
          <section>
            <h1>탄력/잡티/모공/세럼</h1>
            <div className="selectBox">
              <div className="boxHandle">
                <span className="defaultText">타입</span>
                <span
                  className="arrowButton"
                  onClick={() => setArrowToggle(!arrowToggle)}
                >
                  ˅
                </span>
              </div>
              {arrowToggle === true && (
                <div className="selectOption">
                  {location.option.map((list, idx) => {
                    return (
                      <div
                        className="option"
                        key={idx}
                        id={idx}
                        onClick={selectItem}
                      >
                        {list.option}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
          <section className="itemContainerWrap">
            <ItemList selectedItem={selectedItem} deleteItem={deleteItem} />
            <div className="itemBuy">
              <button className="cartButton">장바구니</button>
              <button className="buyButton">일반구매</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default BuyModal;
