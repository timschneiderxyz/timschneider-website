/*  ========================================================================
    # Sitemap
    ========================================================================  */

import { MetadataRoute } from 'next';

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: 'https://timschneider.xyz',
      lastModified: new Date()
    }
  ];
};

export default sitemap;
