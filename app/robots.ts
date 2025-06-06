import type { MetadataRoute } from 'next';

import { getBaseUrl } from '@/lib/urls/get-base-url';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: `${getBaseUrl()}/sitemap.xml`
  };
}
