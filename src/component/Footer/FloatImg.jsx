"use client";
// components/FloatingImage.js
import { useState, useEffect } from "react";
import ImgW from "../../assets/whatsapp.png";

const FloatingImage = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 10000); // 1 minuto

    return () => clearTimeout(timer);
  }, []);
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 120000); // 1 minuto

      return () => clearTimeout(timer);
    }, []);

  return (
    <div className="fixed bottom-0 right-0 mb-4 mr-1 hover:translate-x-1">
      <div className="relative z-50 bg-white rounded-full ">
        <a href="https://wa.me/5491134635997?text=" target="_blank">
          <img src={ImgW} alt="Whatsapp" />
        </a>
        {showMessage && (
          <div className="absolute bottom-9 right-0 mb-[-51px] mr-11 p-1 bg-[#1e6ed6]  rounded-2xl shadow z-0">
            <p className="text-center text-white text-sm">Contactame</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingImage;
