/*  ========================================================================
    # Tailwind CSS
    ========================================================================  */

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  corePlugins: {
    preflight: false
  },
  plugins: [],
  theme: {
    fontFamily: {
      sans: ['Rubik', 'Arial', 'sans-serif'],
      serif: ['Georgia', 'Times New Roman', 'serif'],
      mono: ['Consolas', 'Monaco', 'Ubuntu Mono', 'monospace']
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    extend: {
      colors: {
        'tim-white': '#f8f8f8',
        'tim-gray': '#8e9ba8',
        'tim-black': '#060606',
        'tim-coal': '#0f1012',
        'tim-primary': '#e67066'
      }
    }
  }
};
