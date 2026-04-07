/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0B0F14',
        panel: 'rgba(255, 255, 255, 0.06)',
        neon: '#5CFF7A',
        gold: '#F5C96A',
        line: 'rgba(255, 255, 255, 0.08)'
      },
      boxShadow: {
        glow: '0 0 24px rgba(92, 255, 122, 0.2)',
        gold: '0 0 24px rgba(245, 201, 106, 0.18)'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif']
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at top left, rgba(92,255,122,0.14), transparent 30%), radial-gradient(circle at top right, rgba(245,201,106,0.12), transparent 25%), linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        ticker: 'ticker 25s linear infinite'
      }
    }
  },
  plugins: []
};
