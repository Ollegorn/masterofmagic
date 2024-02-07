import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

const Slider = ({children}) => {
  return (
    <Swiper
          slidesPerView={1.8}
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