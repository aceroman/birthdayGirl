export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      transformOrigin: {
        'center': 'center',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.preserve-3d': { transformStyle: 'preserve-3d' },
        '.backface-hidden': { backfaceVisibility: 'hidden' },
        '.rotate-y-180': { transform: 'rotateY(180deg)' },
        '.rotate-y-0': { transform: 'rotateY(0deg)' },
        '.clip-left': {
          clipPath: 'polygon(0 0, 100% 100%, 0 100%)',
        },
        '.clip-right': {
          clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
        },
        '.clip-top': {
          clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
        },
        '.clip-bottom': {
          clipPath: 'polygon(0 100%, 50% 0, 100% 100%)',
        },
      });
    },
  ],
};
