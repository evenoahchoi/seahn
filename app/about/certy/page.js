"use client";

import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Certy() {
  const [activeTab, setActiveTab] = useState("인증서");
  const [hoveredIndex, setHoveredIndex] = useState(null); // 마우스 오버된 항목의 인덱스를 추적하기 위한 상태

  // 임시로 이미지 경로와 인증서 정보를 설정합니다.
  // 실제 데이터와 이미지 경로는 프로젝트에 맞게 수정해야 합니다.
  const certificates = [
    {
      title: "청년친화강소기업 선정서(2023)",
      src: "/cert1.png",
      category: "인증서",
    },
    { title: "디자인등록증", src: "/cert2.png", category: "특허증" },
    {
      title: "청년친화강소기업 선정서",
      src: "/cert3.png",
      category: "디자인등록증",
    },
    {
      title: "청년친화강소기업 선정서",
      src: "/cert4.png",
      category: "인증서",
    },
    // ... 추가 인증서 데이터
  ];

  const tabs = ["인증서", "특허증", "디자인등록증", "기타"];

  return (
    <>
      <Head>
        <title>인증서 - 세안전자 주식회사</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xl font-semibold mx-2 px-4 py-2 rounded ${
                activeTab === tab
                  ? "bg-red-500 text-white"
                  : "text-gray-600 hover:bg-red-500 hover:text-white"
              } transition-colors duration-300`}
            >
              {tab}
            </button>
          ))}
        </div>
        <h1 className="text-4xl font-bold text-center mb-12">{activeTab}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-start px-11">
          {certificates
            .filter((cert) => cert.category === activeTab)
            .map((cert, index) => (
              <div
                key={index}
                className={`bg-white shadow-lg rounded-lg p-4 text-center transition-transform duration-300 ${
                  index === hoveredIndex ? "scale-105 shadow-2xl" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image
                  src={cert.src}
                  alt={cert.title}
                  width={80}
                  height={120}
                  layout="responsive"
                  className="rounded-md"
                />
                <p className="mt-4 font-semibold">{cert.title}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
