/*  ========================================================================
    # Fonts
    ========================================================================  */

import localFont from 'next/font/local';

export const GeistSans = localFont({
  src: [
    {
      path: './geist-regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './geist-bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-geist-sans'
});
