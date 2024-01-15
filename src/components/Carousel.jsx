import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Carousel = ({ children }) => {
  const handleClick = (index) => {
    swiper.current.slideTo(index);
  };

  const swiper = React.useRef(null);

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      initialSlide={Math.floor(children.length / 2)}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
      onSwiper={(swiperInstance) => (swiper.current = swiperInstance)}
    >
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index} onClick={() => handleClick(index)}>
          {child}
        </SwiperSlide>
      ))}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
};

export default Carousel;
