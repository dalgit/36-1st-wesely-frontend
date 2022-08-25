import { useState, useEffect } from 'react';
import OverView from './OverView/OverView';
import OpenDetailView from './OpenDetailView/OpenDetailView';
import API from '../../config';
import Review from '../DetailPage/Review/Review';
import { useParams } from 'react-router-dom';
function DetailPage() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  console.log(product);
  const LIMIT = 7;
  const OFFSET = LIMIT + offset;
  useEffect(() => {
    setIsLoading(prev => true);
    fetch(`${API.detail}/${params.id}?limit=${LIMIT}&offset=${OFFSET - 7}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
      });
    setIsLoading(prev => false);
  }, [OFFSET, params.id]);

  return (
    !isLoading && (
      <div>
        <h1>header</h1>
        <OverView product={product} />
        <OpenDetailView product={product} />
        <Review
          product={product}
          offset={offset}
          setOffset={setOffset}
          LIMIT={LIMIT}
        />
      </div>
    )
  );
}

export default DetailPage;
