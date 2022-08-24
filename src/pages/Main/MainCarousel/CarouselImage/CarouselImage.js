import './CarouselImage.scss';

const CarouselImage = ({ src, active, prev, next }) => {
  const moveStatus = prev ? 'movePrev' : next ? 'moveNext' : '';
  return (
    <img
      src={src}
      className={`img active-${active} ${moveStatus}`}
      alt="제품 이름"
      style={{ width: '100vw', height: '600px' }}
    />
  );
};

export default CarouselImage;
