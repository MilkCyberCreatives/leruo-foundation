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
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch(baseUrl, { redirect: 'manual' });
      if (response.status >= 200 && response.status < 500) return;
    } catch {}

    await sleep(250);
  }

  throw new Error(`Next.js production server did not start. ${stderr}`);
}

async function assertRoute(path, expectedType, requiredText = []) {
  const response = await fetch(`${baseUrl}${path}`);
  if (!response.ok) {
    throw new Error(`${path} returned HTTP ${response.status}`);
  }

  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes(expectedType)) {
    throw new Error(`${path} returned unexpected content type: ${contentType}`);
  }

  const body = await response.text();
  for (const expected of requiredText) {
    if (!body.includes(expected)) {
      throw new Error(`${path} is missing expected content: ${expected}`);
    }
  }

  return body;
}

try {
  await waitForServer();

  await assertRoute('/', 'text/html', [
    'Empowering the Next Generation',
    'Featured Events',
    'Leruo Foundation',
  ]);

  await assertRoute('/graduation-2026', 'text/html', [
    'Changemakers Incubation Programme',
    'Graduation Ceremony',
    'Three-Course Luncheon',
    'Peppermint Crisp Tart',
    'Congratulations, Class of 2026',
  ]);

  await assertRoute('/privacy', 'text/html', ['Privacy &amp; POPIA', 'Web3Forms', 'Yoco']);

  const robots = await assertRoute('/robots.txt', 'text/plain', ['Sitemap:']);
  if (!robots.includes('/sitemap.xml')) {
    throw new Error('robots.txt does not reference the sitemap.');
  }

  const sitemap = await assertRoute('/sitemap.xml', 'application/xml', [
    '<urlset',
    '/graduation-2026',
    '/privacy',
  ]);

  if (sitemap.includes('<lastmod>')) {
    throw new Error('Sitemap contains dynamic lastmod values that can create false freshness signals.');
  }

  await assertRoute('/site.webmanifest', 'application/manifest+json', ['Leruo Foundation']);
  await assertRoute('/llms.txt', 'text/plain', ['Leruo Foundation', 'graduation-2026']);

  console.log('E2E smoke passed: core routes, graduation programme, privacy, metadata and discovery files are healthy.');
} finally {
  server.kill('SIGTERM');
  await Promise.race([
    new Promise((resolve) => server.once('exit', resolve)),
    sleep(2000),
  ]);
}
