export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        marielaPink: "#f8cfd4"
      },
      transformOrigin: {
        center: 'center',
      },
      keyframes: {
        glitter: {
          '0%, 100%': { backgroundPosition: '0% 0%' },
          '50%': { backgroundPosition: '100% 100%' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(0.45)' },
          '90%': { transform: 'scale(0.1)' },
        },
      },
      animation: {
        glitter: 'glitter 6s linear infinite',
        pulse: 'pulse 1s linear infinite',
        'pulse-1': 'pulse 1.1s 300ms linear infinite',
        'pulse-2': 'pulse 0.8s 600ms linear infinite',
        'pulse-3': 'pulse 1.3s 900ms linear infinite',
      },
      backgroundImage: {
        glitter: "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
      },
      backgroundSize: {
        glitter: '3px 3px',
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
