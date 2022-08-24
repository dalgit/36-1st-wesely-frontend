import { useState, useEffect } from 'react';
import Review from './Review/Review';
import { useParams } from 'react-router-dom';
function DetailPage() {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(prev => true);
    fetch(`http://10.58.0.224:3000/product/detail/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
      });
    setIsLoading(prev => false);
  }, [params.id]);

  return (
    !isLoading && (
      <div>
        <h1>header</h1>
        <Review product={product} />
      </div>
    )
  );
}

export default DetailPage;
