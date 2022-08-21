import { useState } from 'react';

function Item({ totalCount, setTotalCount, listId }) {
  const [count, setCount] = useState(1);

  const countUp = ({ target }) => {
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
    /* setTotalCount(totalCount + 1); */
  };

  const countDown = ({ target }) => {
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
      <button id={listId} onClick={countDown}>
        -
      </button>
      <span>{count}</span>
      <button id={listId} onClick={countUp}>
        +
      </button>
    </>
  );
}

export default Item;
