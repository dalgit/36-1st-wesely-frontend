import { useState, useEffect } from 'react';
import OverView from './OverView/OverView';
import OpenDetailView from './OpenDetailView/OpenDetailView';
import Review from './Review/Review';
import { useParams } from 'react-router-dom';
function DetailPage() {
  const params = useParams();
  const [product, setProduct] = useState([]);
  console.log('product', product);
  useEffect(() => {
    fetch(`http://10.58.0.224:3000/product/detail/${params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [params.id]);
  /* useEffect(() => {
    fetch('/data/mockData.json')
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []); */

  return (
    <div>
      <h1>header</h1>
      <OverView product={product} />
      <OpenDetailView product={product} />
      <Review />
    </div>
  );
}

export default DetailPage;
