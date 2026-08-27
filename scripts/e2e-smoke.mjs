import { spawn } from 'node:child_process';

const port = 4011;
const host = '127.0.0.1';
const baseUrl = `http://${host}:${port}`;
const nextBin = new URL('../node_modules/next/dist/bin/next', import.meta.url);

const server = spawn(
  process.execPath,
  [nextBin.pathname, 'start', '-p', String(port), '-H', host],
  {
    cwd: process.cwd(),
    env: { ...process.env, NODE_ENV: 'production' },
    stdio: ['ignore', 'pipe', 'pipe'],
  },
);

let stderr = '';
server.stderr.on('data', (chunk) => {
  stderr += chunk.toString();
});

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function waitForServer() {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(baseUrl, { redirect: 'manual' });
      if (response.status >= 200 && response.status < 500) return;
    } catch {}

    await sleep(250);
  }

  throw new Error(`Next.js production server did not start. ${stderr}`);
}

async function fetchRoute(path, options = {}) {
  const response = await fetch(`${baseUrl}${path}`, options);
  return {
    response,
    body: await response.text(),
  };
}

async function assertRoute(path, expectedType, requiredText = []) {
  const { response, body } = await fetchRoute(path);
  if (!response.ok) {
    throw new Error(`${path} returned HTTP ${response.status}`);
  }

  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes(expectedType)) {
    throw new Error(`${path} returned unexpected content type: ${contentType}`);
  }

  for (const expected of requiredText) {
    if (!body.includes(expected)) {
      throw new Error(`${path} is missing expected content: ${expected}`);
    }
  }

  return body;
}

function countMatches(body, pattern) {
  return (body.match(pattern) || []).length;
}

function assertMetadata(path, body, { noindex = false } = {}) {
  if (!/<title[^>]*>.+?<\/title>/i.test(body)) {
    throw new Error(`${path} is missing a title`);
  }
  if (!/<meta[^>]+name=["']description["'][^>]+content=["'][^"']+["']/i.test(body)) {
    throw new Error(`${path} is missing a meta description`);
  }

  const canonicalPath = path === '/' ? '' : path;
  const canonical = `https://leruofoundation.org${canonicalPath}`;
  if (!body.includes(`rel="canonical" href="${canonical}"`)) {
    throw new Error(`${path} has an unexpected canonical URL`);
  }

  const h1Count = countMatches(body, /<h1\b/gi);
  if (h1Count !== 1) {
    throw new Error(`${path} should render exactly one H1 but rendered ${h1Count}`);
  }

  const expectedRobots = noindex ? 'noindex,follow' : 'index,follow';
  if (!body.includes(`name="robots" content="${expectedRobots}`)) {
    throw new Error(`${path} has unexpected robots metadata`);
  }
}

const indexableRoutes = [
  '/',
  '/about',
  '/bankingdetails',
  '/becomesponsor',
  '/brandingcircle',
  '/contact',
  '/eventgallery',
  '/graduation-2026',
  '/privacy',
  '/sponsorshippackages',
  '/womenceo',
  '/youthpreneurs-gallery',
  '/youthpreneurs',
];

const noindexRoutes = ['/gallerydrive'];

try {
  await waitForServer();

  const pageBodies = new Map();

  for (const route of indexableRoutes) {
    const body = await assertRoute(route, 'text/html');
    assertMetadata(route, body);
    pageBodies.set(route, body);
  }

  for (const route of noindexRoutes) {
    const body = await assertRoute(route, 'text/html');
    assertMetadata(route, body, { noindex: true });
    pageBodies.set(route, body);
  }

  const home = pageBodies.get('/');
  for (const text of ['Empowering the Next Generation', 'Featured Events', 'Leruo Foundation']) {
    if (!home.includes(text)) throw new Error(`Home page is missing expected content: ${text}`);
  }

  const graduation = pageBodies.get('/graduation-2026');
  for (const text of [
    'Changemakers Incubation Programme',
    'Graduation Ceremony',
    'Three-Course Luncheon',
    'Peppermint Crisp Tart',
    'Congratulations, Class of 2026',
  ]) {
    if (!graduation.includes(text)) {
      throw new Error(`Graduation programme is missing expected content: ${text}`);
    }
  }

  const legacy = await fetch(`${baseUrl}/youthpreneurs2025`, { redirect: 'manual' });
  if (legacy.status !== 308) {
    throw new Error(`/youthpreneurs2025 should permanently redirect with 308, got ${legacy.status}`);
  }
  if (legacy.headers.get('location') !== '/youthpreneurs') {
    throw new Error('/youthpreneurs2025 redirects to the wrong destination');
  }

  const robots = await assertRoute('/robots.txt', 'text/plain', [
    'User-agent: *',
    'Allow: /',
    'Sitemap: https://leruofoundation.org/sitemap.xml',
  ]);
  if (!robots.includes('Disallow: /api/')) {
    throw new Error('robots.txt should keep API routes out of crawler discovery');
  }

  const sitemap = await assertRoute('/sitemap.xml', 'application/xml', ['<urlset']);
  for (const route of indexableRoutes) {
    const expected = route === '/' ? 'https://leruofoundation.org</loc>' : `https://leruofoundation.org${route}</loc>`;
    if (!sitemap.includes(expected)) {
      throw new Error(`Sitemap is missing ${route}`);
    }
  }
  for (const excluded of ['/gallerydrive', '/youthpreneurs2025']) {
    if (sitemap.includes(`https://leruofoundation.org${excluded}</loc>`)) {
      throw new Error(`Sitemap should not include ${excluded}`);
    }
  }
  if (sitemap.includes('<lastmod>')) {
    throw new Error('Sitemap contains dynamic lastmod values that can create false freshness signals.');
  }

  await assertRoute('/site.webmanifest', 'application/manifest+json', ['Leruo Foundation']);
  await assertRoute('/llms.txt', 'text/plain', ['Leruo Foundation', 'graduation-2026']);
  await assertRoute('/images/leruofoundationicon.png', 'image/png');

  const internalLinks = new Set();
  for (const body of pageBodies.values()) {
    for (const match of body.matchAll(/href=["'](\/[^"'?#]*)/g)) {
      const href = match[1];
      if (
        href.startsWith('/_next/') ||
        href.startsWith('/images/') ||
        href.startsWith('/pdfs/') ||
        href === '/site.webmanifest'
      ) {
        continue;
      }
      internalLinks.add(href || '/');
    }
  }

  for (const href of internalLinks) {
    const response = await fetch(`${baseUrl}${href}`, { redirect: 'manual' });
    if (response.status >= 400) {
      throw new Error(`Internal link ${href} returned HTTP ${response.status}`);
    }
  }

  console.log(
    `E2E smoke passed: ${pageBodies.size} public pages, SEO metadata, redirect, discovery files, icon and ${internalLinks.size} internal links are healthy.`,
  );
} finally {
  server.kill('SIGTERM');
  await Promise.race([
    new Promise((resolve) => server.once('exit', resolve)),
    sleep(2000),
  ]);
}
