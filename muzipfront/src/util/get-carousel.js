import carousel1 from '../assets/carousel1.svg';
import carousel2 from '../assets/carousel2.svg';
import carousel3 from '../assets/carousel3.svg';

export function getCarouselImage(CarouselId) {
  switch (CarouselId) {
    case 1:
      return carousel1;
    case 2:
      return carousel2;
    case 3:
      return carousel3;
    default:
      return null;
  }
}
