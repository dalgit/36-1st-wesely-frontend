import { useState } from 'react';
import ItemList from './ItemList';
import './BuyModal.scss';

function BuyModal({ setBuyModalToggle, product }) {
  const [arrowToggle, setArrowToggle] = useState(true);
  const [selectedItem, setSelectedItem] = useState([]);

  const selectItem = ({ target }) => {
    if (!selectedItem.includes(product.productDetail[Number(target.id)])) {
      setSelectedItem([
        ...selectedItem,
        Object.assign(product.productDetail[Number(target.id)], {
          quantity: 1,
        }),
      ]);
    }
  };

  const deleteItem = id => {
    const filteredItem = [...selectedItem].filter(item => item.imageId !== id);
    setSelectedItem(filteredItem);
  };

  const buyModalToggleChange = () => {
    setArrowToggle(!arrowToggle);
  };

  const closeBuyModal = () => {
    setBuyModalToggle(false);
  };

  return (
    <div className="buyModalBox">
      <div className="toast">
        <div className="toastContainer">
          <div className="closeBox" onClick={closeBuyModal}>
            ×
          </div>
          <section>
            <h1>탄력/잡티/모공/세럼</h1>
            <div className="selectBox">
              <div className="boxHandle">
                <span className="defaultText">타입</span>
                <span className="arrowButton" onClick={buyModalToggleChange}>
                  ˅
                </span>
              </div>
              {arrowToggle && (
                <div className="selectOption">
                  {product.productDetail.map((list, idx) => {
                    return (
                      <div
                        className="option"
                        key={list.imageId}
                        id={idx}
                        onClick={selectItem}
                      >
                        {list.options}
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
