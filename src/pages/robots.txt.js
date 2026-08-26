import { absoluteUrl } from '@/lib/seo';

export default function RobotsTxt() {
  return null;
}

export async function getServerSideProps({ res }) {
  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /api/',
    '',
    `Sitemap: ${absoluteUrl('/sitemap.xml')}`,
  ].join('\n');

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
  res.setHeader('X-Robots-Tag', 'noindex, follow');
  res.write(body);
  res.end();

  return {
    props: {},
  };
}
