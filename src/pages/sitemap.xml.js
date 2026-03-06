import { absoluteUrl, getSitemapEntries } from '@/lib/seo';

export default function SitemapXml() {
  return null;
}

export async function getServerSideProps({ res }) {
  const lastModified = new Date().toISOString();
  const urls = getSitemapEntries()
    .map(
      (entry) => `
  <url>
    <loc>${absoluteUrl(entry.pathname)}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join('');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.write(body);
  res.end();

  return {
    props: {},
  };
}
