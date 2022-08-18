import { useState, useEffect } from 'react';
import Card from './Testcard';

function Test() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('data/mockdata.json')
      .then(res => res.json())
      .then(setList);
  }, []);

  return <Card list={list} />;
}
export default Test;
