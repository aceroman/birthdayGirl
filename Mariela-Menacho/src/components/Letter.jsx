import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Letter = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 to-purple-200 flex items-center justify-center px-4 font-serif">
      <div
        className="relative w-[320px] h-[240px] sm:w-[420px] sm:h-[300px] cursor-pointer"
        onClick={() => setOpen(true)}
      >
        {/* Back flap (envelope body) */}
        <div className="absolute inset-0 bg-gray-200 border-4 border-red-900 rounded-md z-10" />

        {/* Left flap */}
        <div className="absolute left-0 top-0 w-1/2 h-full bg-gray-300 border-t-4 border-l-4 border-red-900 clip-left z-20" />

        {/* Right flap */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gray-300 border-t-4 border-r-4 border-red-900 clip-right z-20" />

        {/* Bottom flap */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gray-100 border-b-4 border-red-900 clip-bottom z-30" />

        {/* Top flap (triangle pointing down) */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gray-100 border-t-4 border-red-900 clip-top z-40" />

        {/* Heart Seal */}
        <div className="absolute top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-6 h-6 bg-pink-500 rotate-45 rounded-sm relative">
            <div className="absolute top-[-50%] left-0 w-6 h-6 bg-pink-500 rounded-full" />
            <div className="absolute left-[-50%] top-0 w-6 h-6 bg-pink-500 rounded-full" />
          </div>
        </div>

        {/* Letter that slides out */}
        <div
          className={`absolute top-1/2 left-1/2 w-[90%] sm:w-[320px] bg-white rounded-lg shadow-lg p-4 text-gray-800 transform -translate-x-1/2 transition-all duration-700 ease-in-out z-50 ${
            open ? '-translate-y-[200px] opacity-100' : 'opacity-0'
          }`}
        >
          <h1 className="text-xl text-pink-500 font-bold mb-2">Dear Mariela,</h1>
          <p className="text-sm mb-3 text-justify">
            You may not know it, but I do care about you a lot! Even when I was away for 4.5 years, and I was more vocal about missing Andres, Mom and Dad. I still missed you most of all. 
            Never forget that I'm always here behind your back and we'll face some hardships, but we'll do it together. 
          </p>
          <p className="text-sm mb-3">
            One of your gifts is that I made you a website! I created this to showcase you to your friends can see it live! You can see some of the your past memories of them in by clicking the button below! 💜
          </p>
          <p className="text-sm mb-2">With love,</p>
          <p className="italic text-sm">Your Older Brother,<br></br> Adrian Menacho</p>

          <button
            onClick={(e) => {
              e.stopPropagation(); // don't re-trigger click
              navigate('/carousel');
            }}
            className="mt-4 bg-purple-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-purple-700 transition"
          >
            See the Memories 🎁
          </button>
        </div>
      </div>
    </div>
  );
};

export default Letter;
