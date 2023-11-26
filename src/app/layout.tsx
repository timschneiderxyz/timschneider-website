/*  ========================================================================
    # Layout
    ========================================================================  */

import '@/styles/main.scss';
import type { Metadata, Viewport } from 'next';
import clsx from 'clsx';
import { GeistSans } from '@/fonts/fonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://timschneider.xyz'),
  title: 'Tim Schneider',
  description:
    'Developer Portfolio of Tim Schneider. Creating exceptional websites and optimizing workflows with DevOps expertise.',
  icons: {
    icon: [
      {
        url: '/favicons/favicon.ico',
        sizes: '32x32'
      },
      {
        url: '/favicons/favicon.svg',
        type: 'image/svg+xml'
      }
    ],
    apple: {
      url: '/favicons/apple-touch-icon.png',
      type: 'image/png'
    }
  },
  manifest: '/favicons/manifest.webmanifest',
  openGraph: {
    title: 'Tim Schneider',
    description:
      'Developer Portfolio of Tim Schneider. Creating exceptional websites and optimizing workflows with DevOps expertise.',
    url: 'https://timschneider.xyz',
    type: 'website',
    locale: 'de_DE'
  },
  twitter: {
    title: 'Tim Schneider',
    description:
      'Developer Portfolio of Tim Schneider. Creating exceptional websites and optimizing workflows with DevOps expertise.',
    site: '@timschneiderxyz',
    card: 'summary_large_image'
  }
};

// Viewport
export const viewport: Viewport = {
  themeColor: '#000000'
};

// JSON-LD
const jsonLd = {
  '@context': 'http://schema.org',
  '@type': 'Person',
  gender: 'Male',
  name: 'Tim Schneider',
  description: 'Developer from Germany.',
  jobTitle: 'Developer',
  url: 'https://timschneider.xyz',
  sameAs: ['https://github.com/timschneiderxyz', 'https://x.com/timschneiderxyz']
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={clsx(
          'bg-black font-sans text-neutral-300 overflow-x-hidden selection:bg-emerald-400 selection:text-black',
          GeistSans.variable
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
