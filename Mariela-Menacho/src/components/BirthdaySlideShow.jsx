import React, { useState, useEffect } from 'react';
import { images } from '../images'; // Adjust path based on your structure

const BirthdayCarousel = () => {
    const [angle, setAngle] = useState(0);
    const total = images.length;
  
    useEffect(() => {
      const interval = setInterval(() => {
        setAngle((prev) => prev - 360 / total);
      }, 3000);
  
      return () => clearInterval(interval);
    }, [total]);
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-300 to-purple-500 flex flex-col items-center justify-center overflow-hidden">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-10">🎂 Happy Birthday! 🎉</h1>
  
        <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] perspective-1000">
          <div
            className="absolute w-full h-full transition-transform duration-1000"
            style={{
              transform: `translateZ(-400px) rotateY(${angle}deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            {images.map((img, index) => {
              const rotation = (360 / total) * index;
              return (
                <div
                  key={index}
                  className="absolute w-[180px] h-[120px] md:w-[300px] md:h-[200px] rounded-xl overflow-hidden shadow-lg border-4 border-white"
                  style={{
                    transform: `rotateY(${rotation}deg) translateZ(400px)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <img
                    src={img}
                    alt={`slide-${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

export default BirthdaySlideShow;
