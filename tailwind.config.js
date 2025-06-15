 /** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      screens: {
        xs: '475px',
      },

      /** ✨ Perspective Utility */
      perspective: {
        none: 'none',
        500: '500px',
        750: '750px',
        1000: '1000px',
        1500: '1500px',
      },

      /** ✨ Custom Animations */
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'tilt': 'tilt 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        tilt: {
          '0%, 100%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '25%': { transform: 'rotateX(5deg) rotateY(5deg)' },
          '50%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '75%': { transform: 'rotateX(-5deg) rotateY(-5deg)' },
        },
      },

      /** ✨ Glow Effect */
      boxShadow: {
        glow: '0 0 20px rgba(99, 102, 241, 0.6)', // soft indigo glow
        'glow-lg': '0 0 40px rgba(147, 51, 234, 0.7)', // large purple glow
      },
    },
  },

  /** ✅ Use perspective plugin if using custom classnames */
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.perspective-500': { perspective: '500px' },
        '.perspective-1000': { perspective: '1000px' },
        '.perspective-1500': { perspective: '1500px' },
      });
    },
  ],
};
