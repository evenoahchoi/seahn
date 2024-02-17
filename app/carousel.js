"use client";

import React, { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3초마다 이미지 변경

    return () => clearInterval(interval);
  }, [images.length]);

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div
        className="overflow-hidden w-2/3 mx-auto"
        style={{ height: "500px" }}
      >
        {" "}
        {/* 이미지의 높이를 조절해주세요 */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`transition-transform ease-in-out duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0 absolute"
            }`}
            style={{
              transform: `translateX(${100 * (index - currentIndex)}%)`,
              width: "100%", // 이미지의 너비를 100%로 설정해주세요
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="block h-full w-full object-cover"
            />{" "}
            {/* 이미지의 사이즈를 조정해주세요 */}
          </div>
        ))}
      </div>
      {/* Indicator 버튼들 */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((image, index) => (
          <button
            key={index}
            style={{
              height: "4px",
              width: "50px",
              marginBottom: "12px",
              backgroundColor: currentIndex === index ? "white" : "gray",
            }} // style 속성으로 직접 스타일 적용
            onClick={() => goToIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
