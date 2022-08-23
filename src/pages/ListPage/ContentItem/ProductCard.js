import './ProductCard.scss';

const ProductCard = ({
  name,
  description,
  avgRating,
  price,
  thumbImg,
  countRating,
}) => {
  const displayRating = Math.floor(avgRating * 10) / 10;

  const maxScore = 5;

  const rating = (rating, i) => {
    if (rating > i) {
      if (rating - i === 0.5) {
        return (
          <img
            key={i}
            src="/images/star-half2.png"
            alt=""
            style={{ width: '15px' }}
          />
        );
      } else {
        return (
          <img
            key={i}
            src="/images/star2.png"
            alt=""
            style={{ width: '15px' }}
          />
        );
      }
    } else {
      return (
        <img
          key={i}
          src="/images/star-empty.png"
          alt=""
          style={{ width: '15px' }}
        />
      );
    }
  };

  return (
    <article className="productCard">
      <div
        className="productImage"
        style={{
          background: `url(${thumbImg})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
        }}
      />

      <div className="productInfo">
        <div className="productInfoTop">
          <h1 className="productName">{name}</h1>
          <p className="productDesc">{description}</p>
        </div>
        <div className="productInfoBottom">
          <div className="ratingWrapper">
            <div className="ratings">
              {[...Array(maxScore)].map((_, i) => rating(displayRating, i))}
            </div>
            <span className="sales">
              (
              {countRating
                .toLocaleString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              )
            </span>
          </div>
          <strong className="productPrice">
            {price.toLocaleString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
          </strong>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
