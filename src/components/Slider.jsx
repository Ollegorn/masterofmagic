import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

const Slider = ({children}) => {
  
  let slidesPerView = 1.8;

  if (window.innerWidth >= 650 && window.innerWidth < 1024) {
    slidesPerView = 3;
  } else if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
    slidesPerView = 4;
  } else if (window.innerWidth >= 1280) {
    slidesPerView = 5;
  }

  return (
    <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
        {React.Children.map(children, (child, index) => (
          <SwiperSlide key={index}>
            {child}
          </SwiperSlide>
        ))}
        </Swiper>
  )
}

export default Slider