import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../css/SlideShow.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

function SlideShow({ imageList }) {
  return (
    <Swiper
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="sscomp"
    >
      {imageList.map((image) => (
        <SwiperSlide>
          <img src={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SlideShow;
