import './CarouselButton.scss';

const CarouselButton = ({ btnType, handleCarousel }) => {
  return <div className={`button ${btnType}`} onClick={handleCarousel} />;
};

export default CarouselButton;
