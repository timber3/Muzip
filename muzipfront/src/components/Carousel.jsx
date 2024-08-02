import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getCarouselImage } from '../util/get-carousel.js';
import '../css/Slick.css';

const Carousel = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    dotsClass: 'dots_custom',
  };
  return (
    <div className="max-w-full mx-auto">
      <Slider {...settings}>
        <div>
          <img src={getCarouselImage(1)} />
        </div>
        <div>
          <img src={getCarouselImage(2)} />
        </div>
        <div>
          <img src={getCarouselImage(3)} />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
