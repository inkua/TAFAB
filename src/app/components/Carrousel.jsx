'use client';

import React, { useState } from "react";

const Carrousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "/bannerprincipal.svg",
      buttonText: "Haz clic para conocer más",
      buttonLink: "#", // Cambia por la URL a la que debe llevar el botón
    },
    {
      image: "https://via.placeholder.com/800x400?text=Slide+2",
      buttonText: "Descubre más aquí",
      buttonLink: "#", // Cambia por la URL a la que debe llevar el botón
    },
    {
      image: "https://via.placeholder.com/800x400?text=Slide+3",
      buttonText: "Aprende más",
      buttonLink: "#", // Cambia por la URL a la que debe llevar el botón
    },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-[90%] mx-auto -z-10">
      {/* Carrusel */}
      <div className="flex overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full flex-shrink-0 flex items-center justify-center relative"
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover"
              />
              {/* Botón del slide */}
              <a
                href={slide.buttonLink}
                className="absolute top-[70%] w-[25%] text-center  left-[15%] bg-yellow-400 text-black py-4 px-4 rounded-lg shadow-md hover:bg-yellow-500 transition-all"
              >
                {slide.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-6 h-6 rounded-full border-2 ${
              currentIndex === index
                ? "bg-purple-500 border-purple-500" // Indicador activo
                : "bg-white border-purple-300" // Indicadores inactivos
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
