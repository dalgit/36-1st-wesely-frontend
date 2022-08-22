import { useState } from 'react';
import Item from './Item';
import './ItemList.scss';

function ItemList({ selectedItem, deleteItem }) {
  const [totalCount, setTotalCount] = useState({
    total1: 0,
    total2: 0,
    total3: 0,
    total4: 0,
  });

  /*  const [quantity, setQuantity] = useState(0); */
  /* console.log('vvv', item); */

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
          <div key={list.id} className="itemMain">
            <h1 className="itemImage">
              <img src={list.image} alt="" />
            </h1>
            <div className="itemInfoWrap">
              <div>
                <div className="titleWrap">
                  <h3>{list.title}</h3>
                  <button
                    onClick={() => {
                      deleteItem(list.id);
                      deleteCount(list.id);
                    }}
                  >
                    ×
                  </button>
                </div>
                <p>{list.subTitle}</p>
              </div>
              <div>
                <div className="itemCount">
                  <span className="price">{list.price}</span>
                  <div className="count">
                    <Item
                      totalCount={totalCount}
                      setTotalCount={setTotalCount}
                      listId={list.id}
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
