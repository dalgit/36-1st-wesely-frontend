import { useState } from 'react';
import './QuantityButton.scss';

function QuantityButton({
  imageId,
  setImageId,
  totalCount,
  setTotalCount,
  listId,
}) {
  const [count, setCount] = useState(1);

  const countUp = ({ target }) => {
    console.log('countUp', target.id);
    setCount(count + 1);
    if (target.id === '1') {
      setTotalCount({ ...totalCount, total1: totalCount.total1 + 1 });
      //setImageId({ ...imageId, imageId1: target.id });
    } else if (target.id === '2') {
      setTotalCount({ ...totalCount, total2: totalCount.total2 + 1 });
      //setImageId({ ...imageId, imageId2: target.id });
    } else if (target.id === '3') {
      setTotalCount({ ...totalCount, total3: totalCount.total3 + 1 });
      //setImageId({ ...imageId, imageId3: target.id });
    } else if (target.id === '4') {
      setTotalCount({ ...totalCount, total4: totalCount.total4 + 1 });
      //setImageId({ ...imageId, imageId4: target.id });
    }
  };

  const countDown = ({ target }) => {
    console.log('countDown', target.id);
    if (count === 1) return;
    setCount(count - 1);
    if (target.id === '1') {
      setTotalCount({ ...totalCount, total1: totalCount.total1 - 1 });
      //setImageId({ ...imageId, imageId1: target.id });
    } else if (target.id === '2') {
      setTotalCount({ ...totalCount, total2: totalCount.total2 - 1 });
      //setImageId({ ...imageId, imageId2: target.id });
    } else if (target.id === '3') {
      setTotalCount({ ...totalCount, total3: totalCount.total3 - 1 });
      //setImageId({ ...imageId, imageId3: target.id });
    } else if (target.id === '4') {
      setTotalCount({ ...totalCount, total4: totalCount.total4 - 1 });
      //setImageId({ ...imageId, imageId4: target.id });
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
