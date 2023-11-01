/*  ========================================================================
    # Sitemap
    ========================================================================  */

import { MetadataRoute } from 'next';

const sitemap = (): MetadataRoute.Sitemap => {
  const routes = [''].map(route => ({
    url: `https://timschneider.xyz${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }));

  return [...routes];
};

export default sitemap;
