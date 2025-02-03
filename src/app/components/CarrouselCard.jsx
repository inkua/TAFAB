'use client';

import React, { useState } from "react";

const CarrouselCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);

  const slides = [
    {
      image: "/Frame9.png",
      date: "Setiembre 12, 2025.",
      title: "MARCHAMOS POR DERECHOS",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      image: "/Frame10.png",
      date: "Setiembre 12, 2025.",
      title: "LOGRAMOS QUE NOS ESCUCHARAN",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      image: "/Frame9.png",
      date: "Setiembre 12, 2025.",
      title: "MARCHAMOS POR DERECHOS",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
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

  // Dragging functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const distance = e.clientX - startX;
    setDragDistance(distance);
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    if (dragDistance > 50) {
      handlePrevious(); 
    } else if (dragDistance < -50) {
      handleNext(); 
    }

    setDragDistance(0);
  };

  return (
    <div
      className="relative w-full m-auto overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} // Asegura que el drag termine al salir del carrusel
    >
      {/* Carrusel */}
      <div className="flex relative">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(calc(-${currentIndex * 100}%))`,
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full flex flex-col sm:flex-row items-start gap-6 cursor-grab p-4 sm:p-8"
              style={{ pointerEvents: isDragging ? "none" : "auto" }} // Evita interacción durante el arrastre
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full sm:w-[60%] h-auto object-cover rounded-md" 
              />
              <div className="flex flex-col gap-3 w-full sm:w-[40%]">
                <p className="text-sm text-gray-500">{slide.date}</p>
                <h3 className="text-lg font-bold leading-6 sm:leading-10">{slide.title}</h3>
                <p className="text-sm text-gray-700 leading-6">
                  {slide.text}
                </p>

                <a
                  className="text-purple-600 underline font-bold hover:text-purple-800 transition"
                  href="#"
                >
                  Leer más
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controles */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 z-10">
        <button
          onClick={handlePrevious}
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          &#9664;
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 z-10">
        <button
          onClick={handleNext}
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
        >
          &#9654;
        </button>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-purple-600 scale-110"
                : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarrouselCard;
