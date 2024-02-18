"use client";

// emailform.js

import React, { useState } from "react";
import emailjs from "emailjs-com";

const EmailForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // 자동으로 늘어나는 텍스트 박스를 위한 높이 조절
    if (e.target.name === "message") {
      e.target.style.height = "inherit";
      e.target.style.height = `${e.target.scrollHeight}px`; // 스크롤 높이만큼 높이 설정
    }
  };

  const handleFocus = (e) => {
    if (e.target.name === "message") {
      e.target.style.height = "inherit";
      e.target.style.height = `${e.target.scrollHeight}px`; // 포커스 시 스크롤 높이만큼 높이 설정
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qwjn64p", "template_2gfglth", e.target, "0RNcJ11USAvUfX8zq")
      .then(
        (result) => {
          alert("메세지를 성공적으로 전송하였습니다.");
          console.log(result.text);
        },
        (error) => {
          alert("메세지 전송에 실패하였습니다. 다시 시도해 주시기 바랍니다.");
          console.log(error.text);
        }
      );

    // 폼 초기화
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="email-form-container">
      <h1 className="text-3xl">샘플 신청</h1>
      <p>샘플을 신청하실 고객님께서는 아래 양식을 작성해 주시기 바랍니다.</p>
      <form onSubmit={handleSubmit} className="email-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="성함"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="이메일"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="phone"
            placeholder="연락처"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="메세지"
            value={formData.message}
            onChange={handleChange}
            onFocus={handleFocus}
            style={{
              overflow: "hidden", // 스크롤 바 숨기기
              resize: "none", // 사용자가 크기를 조절하지 못하게 설정
              minHeight: "200px", // 최소 높이 설정
              lineHeight: "1.5", // 줄 간격 설정
            }}
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          신청하기
        </button>
      </form>
      <div className="contact-info"></div>
    </div>
  );
};

export default EmailForm;
