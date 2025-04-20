import React, { useEffect, useRef, useState } from 'react';
import { images } from '../images';
import { TypeAnimation } from 'react-type-animation';

const CardCarousel = () => {
  const [active, setActive] = useState(3);
  const itemsRef = useRef([]);

  const loadShow = () => {
    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      item.style.transition = 'all 0.5s ease';

      if (index === active) {
        item.style.transform = `translateX(0px) scale(1) perspective(800px) rotateY(0deg)`;
        item.style.zIndex = 10;
        item.style.opacity = 1;
        item.style.filter = 'none';
      } else if (index > active) {
        const offset = index - active;
        item.style.transform = `translateX(${220 * offset}px) scale(${1 - 0.1 * offset}) perspective(800px) rotateY(-5deg)`;
        item.style.zIndex = 10 - offset;
        item.style.opacity = offset > 2 ? 0 : 0.4;
        item.style.filter = 'blur(2px)';
      } else {
        const offset = active - index;
        item.style.transform = `translateX(${-220 * offset}px) scale(${1 - 0.1 * offset}) perspective(800px) rotateY(5deg)`;
        item.style.zIndex = 10 - offset;
        item.style.opacity = offset > 2 ? 0 : 0.4;
        item.style.filter = 'blur(2px)';
      }
    });
  };

  useEffect(() => {
    loadShow();
  }, [active]);

  // ✨ Sparkle Layer (Tailwind only)
  const SparkleBackground = () => {
    const sparkleCount = 50;
    const colors = ['bg-white', 'bg-pink-200', 'bg-pink-400'];
    const sizes = ['w-[10px] h-[10px]', 'w-[7px] h-[7px]', 'w-[5px] h-[5px]'];
    const animations = [
      'animate-[pulse_1s_linear_infinite]',
      'animate-[pulse_1.1s_300ms_linear_infinite]',
      'animate-[pulse_0.8s_600ms_linear_infinite]',
      'animate-[pulse_1.3s_900ms_linear_infinite]',
    ];

    const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const getRandomPercent = () => `${Math.floor(Math.random() * 100)}%`;

    return (
      <div className="absolute inset-0 z-0 pointer-events-none">
        {Array.from({ length: sparkleCount }).map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${getRandom(colors)} ${getRandom(sizes)} ${getRandom(animations)}`}
            style={{
              top: getRandomPercent(),
              left: getRandomPercent(),
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden flex flex-col items-center justify-center bg-marielaPink px-4 font-mono">
      <SparkleBackground />

      <h1 className="text-4xl md:text-5xl text-white text-center font-bold mb-8">
        🎉 Happy Birthday Mariela! 🎂
      </h1>

      <TypeAnimation
        className="text-2xl text-white text-center font-semibold"
        sequence={[
          'Independent', 1200,
          'Reina', 1200,
          'Beautiful', 1200,
          'Caring (sometimes)', 1200,
          'Selfless', 1200,
          'Thoughtful', 1200,
          'Hardworker', 1200,
          'Ambitious', 1200,
          'Matcha Lover', 1200,
        ]}
        speed={50}
        repeat={Infinity}
      />

      <div className="relative w-full max-w-7xl h-[500px] flex justify-center items-center overflow-visible z-10">
        {images.map((img, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className="absolute w-[280px] h-[400px] md:w-[350px] md:h-[500px] rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden border-4 border-white bg-white"
          >
            <img src={img} alt={`slide-${index}`} className="w-full h-full object-cover" />
          </div>
        ))}

        {/* Prev Button */}
        <button
          onClick={() => setActive((prev) => (prev > 0 ? prev - 1 : prev))}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold z-20 hover:scale-125 transition"
        >
          &lt;
        </button>

        {/* Next Button */}
        <button
          onClick={() => setActive((prev) => (prev < images.length - 1 ? prev + 1 : prev))}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold z-20 hover:scale-125 transition"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CardCarousel;
