import './ProductButton.scss';

const ProductButton = ({ btnType, handleSlide }) => {
  return <div className={`button ${btnType}`} onClick={handleSlide} />;
};

export default ProductButton;
