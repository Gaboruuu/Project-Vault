import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../css/Coverflow.css";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";

function Coverflow({ images }) {
  const [coverflowStretch, setCoverflowStretch] = useState(
    window.innerWidth < 500 ? 1 : window.innerWidth < 1200 ? 120 : 60
  );

  const handleResize = () => {
    const newStretch =
      window.innerWidth < 800 ? 1 : window.innerWidth < 1200 ? 120 : 60;
    setCoverflowStretch(newStretch);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="cover-container">
      <Swiper
        key={coverflowStretch}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: coverflowStretch,
          depth: 200,
          modifier: 2,
        }}
        pagination={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} alt={`slide_image_${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Coverflow;
