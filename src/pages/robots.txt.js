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

  res.setHeader('Content-Type', 'text/plain');
  res.write(body);
  res.end();

  return {
    props: {},
  };
}
