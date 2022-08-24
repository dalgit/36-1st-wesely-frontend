import { useState } from 'react';
import './QuantityButton.scss';

function QuantityButton({ totalCount, setTotalCount, listId }) {
  const [count, setCount] = useState(1);

  const countUp = ({ target }) => {
    console.log('countUp', target.id);
    setCount(count + 1);
    if (target.id === '1') {
      setTotalCount({ ...totalCount, total1: totalCount.total1 + 1 });
    } else if (target.id === '2') {
      setTotalCount({ ...totalCount, total2: totalCount.total2 + 1 });
    } else if (target.id === '3') {
      setTotalCount({ ...totalCount, total3: totalCount.total3 + 1 });
    } else if (target.id === '4') {
      setTotalCount({ ...totalCount, total4: totalCount.total4 + 1 });
    }
  };

  const countDown = ({ target }) => {
    console.log('countDown', target.id);
    if (count === 1) return;
    setCount(count - 1);
    if (target.id === '1') {
      setTotalCount({ ...totalCount, total1: totalCount.total1 - 1 });
    } else if (target.id === '2') {
      setTotalCount({ ...totalCount, total2: totalCount.total2 - 1 });
    } else if (target.id === '3') {
      setTotalCount({ ...totalCount, total3: totalCount.total3 - 1 });
    } else if (target.id === '4') {
      setTotalCount({ ...totalCount, total4: totalCount.total4 - 1 });
    }
  };
  return (
    <>
      <button id={listId} onClick={countDown} className="quantityDownButton">
        -
      </button>
      <span className="quantityCount">{count}</span>
      <button id={listId} onClick={countUp} className="quantityUpButton">
        +
      </button>
    </>
  );
}

export default QuantityButton;
