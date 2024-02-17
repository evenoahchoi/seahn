import React from 'react';
import Carousel from './carousel';
export default function Home() {
  // Carousel에 표시될 이미지 배열
  const images = [
    { src: '/img1.jpg', alt: 'Image 1' },
    { src: '/img2.jpg', alt: 'Image 2' },
    { src: '/img3.jpg', alt: 'Image 3' },
  ];

  return (
    <div>
      <div className="m-5">
        <Carousel images={images} />
      </div>
    </div>
  );
}