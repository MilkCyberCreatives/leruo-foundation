import { absoluteUrl, getSitemapEntries } from '@/lib/seo';

export default function SitemapXml() {
  return null;
}

export async function getServerSideProps({ res }) {
  const urls = getSitemapEntries()
    .map(
      (entry) => `
  <url>
    <loc>${absoluteUrl(entry.pathname)}</loc>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join('');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
  res.setHeader('X-Robots-Tag', 'noindex, follow');
  res.write(body);
  res.end();

  return {
    props: {},
  };
}
