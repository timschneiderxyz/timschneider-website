/*  ========================================================================
    # Tailwind CSS - Config
    ========================================================================  */

import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/app/**/*.{js,jsx,ts,tsx,mdx}', './src/components/**/*.{js,jsx,ts,tsx,mdx}'],
  corePlugins: {
    preflight: false,
    container: false
  },
  plugins: [],
  theme: {
    // Replace the default config.
    fontFamily: {
      sans: ['var(--font-geist-sans)'],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono]
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px'
    },
    // Extend the default config.
    extend: {}
  }
} satisfies Config;
