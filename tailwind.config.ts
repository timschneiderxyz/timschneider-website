/*  ========================================================================
    # Tailwind CSS - Config
    ========================================================================  */

import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

export default {
  content: ['./src/app/**/*.{js,jsx,ts,tsx,mdx}', './src/components/**/*.{js,jsx,ts,tsx,mdx}'],
  corePlugins: {
    preflight: false,
    container: false
  },
  plugins: [require('@tailwindcss/typography')],
  theme: {
    // Replace the default config.
    fontFamily: {
      sans: ['var(--font-geist-sans)'],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono]
    },
    // Extend the default config.
    extend: {
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': colors.neutral[300],
            '--tw-prose-headings': colors.white,
            '--tw-prose-lead': colors.neutral[400],
            '--tw-prose-links': colors.white,
            '--tw-prose-bold': colors.white,
            '--tw-prose-counters': colors.neutral[400],
            '--tw-prose-bullets': colors.neutral[600],
            '--tw-prose-hr': colors.neutral[700],
            '--tw-prose-quotes': colors.neutral[100],
            '--tw-prose-quote-borders': colors.neutral[700],
            '--tw-prose-captions': colors.neutral[400],
            '--tw-prose-kbd': colors.white,
            '--tw-prose-kbd-shadows': colors.white,
            '--tw-prose-code': colors.white,
            '--tw-prose-pre-code': colors.neutral[300],
            '--tw-prose-pre-bg': colors.black,
            '--tw-prose-th-borders': colors.neutral[600],
            '--tw-prose-td-borders': colors.neutral[700],
            h1: {
              fontWeight: defaultTheme.fontWeight.bold,
              letterSpacing: defaultTheme.letterSpacing.tight
            },
            h2: {
              fontWeight: defaultTheme.fontWeight.bold,
              letterSpacing: defaultTheme.letterSpacing.tight
            },
            h3: {
              fontWeight: defaultTheme.fontWeight.bold
            },
            h4: {
              fontWeight: defaultTheme.fontWeight.bold
            },
            a: {
              fontWeight: defaultTheme.fontWeight.bold,
              textUnderlineOffset: defaultTheme.textUnderlineOffset[4],
              textDecorationColor: colors.neutral[600],
              transitionProperty: defaultTheme.transitionProperty.colors,
              transitionTimingFunction: defaultTheme.transitionTimingFunction.DEFAULT,
              transitionDuration: defaultTheme.transitionDuration.DEFAULT
            },
            'a:hover': {
              textDecorationColor: colors.white
            }
          }
        }
      }
    }
  }
} satisfies Config;
