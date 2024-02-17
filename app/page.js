import React from 'react';
import Carousel from './carousel';
export default function Home() {
  // Carousel에 표시될 이미지 배열
  const images = [
    { src: 'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg', alt: 'Image 1' },
    { src: 'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg', alt: 'Image 2' },
    { src: 'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(21).jpg', alt: 'Image 3' },
  ];

  return (
    <div>
      <div className="m-5">
        <Carousel images={images} />
      </div>
    </div>
  );
}