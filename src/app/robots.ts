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
    sitemap: 'https://timschneider.xyz/sitemap.xml'
  };
};

export default robots;
