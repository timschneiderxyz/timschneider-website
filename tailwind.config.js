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
    // Replace the default config.
    fontFamily: {
      sans: ['Rubik', ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono]
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1600px'
    },
    // Extend the default config.
    extend: {
      colors: {
        'tim-black': '#060606',
        'tim-coal': '#0d0e10',
        'tim-gray': '#808CA0',
        'tim-primary': '#f8484e'
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
