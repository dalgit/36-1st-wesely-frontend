import { useEffect, useRef, useState } from 'react';

import CarouselButton from './CarouselButton/CarouselButton';
import CarouselImage from './CarouselImage/CarouselImage';

import './MainCarousel.scss';

const MainCarousel = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const totalImage = 3;

  const isMoving = useRef(false);

  const movePrev = () => {
    if (!isMoving.current) {
      if (carouselIndex === 0) {
        setCarouselIndex(totalImage - 1);
      } else {
        setCarouselIndex(carouselIndex - 1);
      }
    }
  };

  const moveNext = () => {
    if (!isMoving.current) {
      if (carouselIndex === totalImage - 1) {
        setCarouselIndex(0);
      } else {
        setCarouselIndex(carouselIndex + 1);
      }
    }
  };

  useEffect(() => {
    isMoving.current = true;
    setTimeout(() => {
      isMoving.current = false;
    }, 500);
  }, [carouselIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex(carouselIndex =>
        carouselIndex === totalImage - 1 ? 0 : carouselIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = carouselIndex === 0 ? totalImage - 1 : carouselIndex - 1;
  const next = carouselIndex === totalImage - 1 ? 0 : carouselIndex + 1;

  return (
    <div className="MainCarousel">
      <div className="carousel">
        {imgData.map((imgData, idx) => (
          <CarouselImage
            key={idx}
            src={imgData.imgUrl}
            active={idx === carouselIndex}
            prev={idx === prev}
            next={idx === next}
          />
        ))}
        <CarouselButton btnType="prev" handleCarousel={movePrev} />
        <CarouselButton btnType="next" handleCarousel={moveNext} />
        <div className="currentIndex">
          <span>{carouselIndex + 1}</span>
          <span>/</span>
          <span>{totalImage}</span>
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;

const imgData = [
  {
    id: 0,
    imgUrl: '/images/carousel-1.jpg',
  },
  {
    id: 1,
    imgUrl: '/images/carousel-2.jpg',
  },
  {
    id: 2,
    imgUrl: '/images/carousel-3.jpg',
  },
];
