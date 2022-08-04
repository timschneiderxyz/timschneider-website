/*  ========================================================================
    # Tailwind CSS - Config
    ========================================================================  */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  corePlugins: {
    preflight: false,
    container: false
  },
  plugins: [],
  theme: {
    fontFamily: {
      sans: ['Rubik', ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono]
    },
    extend: {
      colors: {
        'tim-black': '#060606',
        'tim-coal': '#0f1012',
        'tim-gray': '#8e9ba8',
        'tim-primary': '#f8484e'
      },
      listStyleType: {
        square: 'square'
      },
      keyframes: {
        'skeleton-loader': {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(100%)'
          }
        }
      }
    }
  }
};
