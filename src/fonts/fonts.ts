/*  ========================================================================
    # Fonts
    ========================================================================  */

import localFont from 'next/font/local';

export const rubik = localFont({
  variable: '--font-rubik',
  src: [
    {
      path: './rubik-regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './rubik-500.woff2',
      weight: '500',
      style: 'normal'
    }
  ],
  display: 'swap'
});
