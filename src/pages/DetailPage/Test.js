import { useState, useEffect } from 'react';
import Card from './Testcard';

function Test() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('data/mockData.json')
      .then(res => res.json())
      .then(data => {
        const newData = data.map(item => ({ ...item, quantity: 1 }));
        setList(newData);
      });

    // data 의 형식은 []
  }, []);

  return <Card list={list} />;
}
export default Test;
