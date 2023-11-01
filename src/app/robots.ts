/*  ========================================================================
    # Robots
    ========================================================================  */

import { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      disallow: []
    },
    sitemap: 'https://timschneider.xyz/sitemap.xml',
    host: 'https://timschneider.xyz'
  };
};

export default robots;
