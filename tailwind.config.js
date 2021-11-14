/*  ========================================================================
    # Tailwind CSS
    ========================================================================  */

module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    layers: ['components', 'utilities'],
    options: {
      whitelist: []
    }
  },
  darkMode: false,
  theme: {
    // Replace
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    // Extend
    extend: {
      colors: {}
    }
  },
  variants: {},
  plugins: []
};
