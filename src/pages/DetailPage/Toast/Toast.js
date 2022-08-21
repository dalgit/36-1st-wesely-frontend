import { useState } from 'react';
import ItemList from './ItemList';
import './Toast.scss';

function Toast({ setToast, location }) {
  const [arrow, setArrow] = useState(true);
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
    // const removeItem = selectedItem.splice(Number(id)); // mutable
    /* console.log('filteredItem : ', filteredItem); */
    setSelectedItem(filteredItem);
    /* Number(itemInfoWrap.parentElement.id); */
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
          <section className="itemContainer">
            <ItemList selectedItem={selectedItem} deleteItem={deleteItem} />
            <div className="itemBuy">
              <button
                className="cartButton"
                /* onClick={() => setToast(!toast)} */
              >
                장바구니
              </button>
              <button
                className="buyButton"
                /* onClick={() => setToast(!toast)} */
              >
                일반구매
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Toast;
