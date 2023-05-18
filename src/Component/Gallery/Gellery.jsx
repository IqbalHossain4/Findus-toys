import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./styles.css";

import { EffectCoverflow, Pagination } from "swiper";

export default function Gallery() {
  return (
    <>
      <h1 className="mt-24 mb-12 text-center font-bold text-5xl">
        Our Gallery
      </h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="img-wrap">
          <img
            src={
              "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1631805748-educational-toys-for-toddlers-desk-1631805697.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide className="img-wrap">
          <img
            src={
              "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-720w,f_auto,q_auto:best/newscms/2023_18/1509206/41tpunfxm0l-5dd40073ad532.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide className="img-wrap">
          <img
            src={
              "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1594908357-410VeJnKctL.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide className="img-wrap">
          <img
            src={
              "https://images.othoba.com/images/thumbs/0338346_educational-computer-abc-and-123-learning-kids-toy-mixed_400.jpeg"
            }
          />
        </SwiperSlide>
        <SwiperSlide className="img-wrap">
          <img
            src={
              "https://static-01.daraz.com.bd/p/c8957071f5b61b8f042a7b410beae493.jpg_720x720.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide className="img-wrap">
          <img
            src={
              "https://myhappyhelpers.com.au/cdn/shop/products/wooden-educational-language-development-cards-my-happy-helpers.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide className="img-wrap">
          <img
            src={
              "https://m.media-amazon.com/images/I/71jBqnyZWWL._AC_SL1500_.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide className="img-wrap">
          <img
            src={
              "https://besttoys4toddlers.com/wp-content/uploads/2015/10/Educational-Insights-Design-Drill-Take-Along-Toolkit.jpg"
            }
          />
        </SwiperSlide>
        <SwiperSlide className="img-wrap">
          <img
            src={
              "https://lzd-img-global.slatic.net/g/p/54b75201342c51e88437f761147b84c5.jpg_720x720q80.jpg"
            }
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
