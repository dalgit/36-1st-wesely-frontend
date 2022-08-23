import { useState, useEffect } from 'react';
import OverView from './OverView/OverView';
import OpenDetailView from './OpenDetailView/OpenDetailView';
import Review from './Review/Review';
import { useParams } from 'react-router-dom';
function DetailPage() {
  const id = useParams();
  const [product, setProduct] = useState([]);
  console.log('id', id);
  console.log('product', product);
  useEffect(() => {
    fetch(`http://10.58.0.224/product/detail/:${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  return (
    <div>
      <h1>header</h1>
      <OverView location={id} />
      <OpenDetailView location={id} />
      <Review />
    </div>
  );
}

export default DetailPage;
