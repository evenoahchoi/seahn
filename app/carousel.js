"use client";

import React from 'react';
// Swiper React 컴포넌트와 스타일을 임포트합니다.
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Swiper 기본 스타일
import 'swiper/css/navigation'; // 네비게이션 기능 스타일
import SwiperCore, { Navigation } from 'swiper'; // 필요한 Swiper 모듈을 임포트합니다.
import { Autoplay } from 'swiper/modules';

// Swiper 모듈을 사용 설정합니다.
SwiperCore.use([Navigation, Autoplay]);

const SwiperExample = () => {
  const images = [
    { src: '/img1.jpg', alt: 'Image 1' },
    { src: '/img2.jpg', alt: 'Image 2' },
    { src: '/img3.jpg', alt: 'Image 3' },
  ];

  return (
    <Swiper // 슬라이드 사이의 간격
      slidesPerView={1} // 한 번에 보여줄 슬라이드 개수
      autoplay={{ delay: 4000 }} // 자동 재생 설정: 4초 간격
      loop={true} // 무한 루프
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src={image.src} alt={image.alt} style={{ width: '50%', height: 'auto' }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperExample;
