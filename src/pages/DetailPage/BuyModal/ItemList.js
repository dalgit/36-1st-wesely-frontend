import { useState } from 'react';
import QuantityButton from './QuantityButton';
import './ItemList.scss';

function ItemList({ selectedItem, deleteItem }) {
  const [totalCount, setTotalCount] = useState({
    total1: 0,
    total2: 0,
    total3: 0,
    total4: 0,
  });
  console.log('selectedItem', selectedItem);

  const deleteCount = id => {
    if (id === 1) {
      return setTotalCount({ ...totalCount, total1: 0 });
    } else if (id === 2) {
      return setTotalCount({ ...totalCount, total2: 0 });
    } else if (id === 3) {
      return setTotalCount({ ...totalCount, total3: 0 });
    } else if (id === 4) {
      return setTotalCount({ ...totalCount, total4: 0 });
    }
  };

  const total = Object.keys(totalCount).reduce(
    (previousValue, currentValue) => {
      return previousValue + totalCount[currentValue];
    },
    0
  );
  console.log(totalCount);
  const totalQuantity =
    selectedItem.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.quantity;
    }, 0) + total;

  const totalPrice =
    selectedItem.reduce((previousValue, currentValue) => {
      return currentValue.price;
    }, 0) * totalQuantity;

  return (
    <div className="itemContentBox">
      {selectedItem.map(list => {
        return (
          <div key={list.imageId} className="itemMain">
            <h1 className="itemImage">
              <img src={list.optionImg} alt="" />
            </h1>
            <div className="itemInfoWrap">
              <div>
                <div className="titleWrap">
                  <h3>{list.productName}</h3>
                  <button
                    onClick={() => {
                      deleteItem(list.imageId);
                      deleteCount(list.imageId);
                    }}
                  >
                    ×
                  </button>
                </div>
                <p>{list.description}</p>
              </div>
              <div>
                <div className="itemCount">
                  <span className="price">{list.price}</span>
                  <div className="count">
                    <QuantityButton
                      totalCount={totalCount}
                      setTotalCount={setTotalCount}
                      listId={list.imageId}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="itemTotal">
        <span>
          총 수량 <strong>{totalQuantity}</strong>개
        </span>
        <span>{totalPrice}원</span>
      </div>
    </div>
  );
}

export default ItemList;
