import type { APIRoute } from 'astro';
import { site } from '../data/site';

/** Hand-rolled sitemap — nine known routes, no integration needed. */
const routes = [
  '/',
  '/jasa/',
  '/training/',
  '/konsultasi/',
  '/audit/',
  '/rekam-jejak/',
  '/klien/',
  '/artikel/',
  '/kontak/',
];

export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);

  const urls = routes
    .map(
      (route) => `  <url>
    <loc>${site.url}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`,
    )
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
