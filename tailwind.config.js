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
    extend: {
      fontFamily: {
        sans: ['Rubik', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'tim-black': '#060606',
        'tim-gray': '#8e9ba8',
        'tim-coal': '#0f1012',
        'tim-primary': '#e67066'
      }
    }
  }
};
