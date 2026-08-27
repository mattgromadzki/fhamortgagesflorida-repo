import { getCollection } from 'astro:content';

export async function GET() {
  const site = 'https://fhamortgagesflorida.com';
  const pages = await getCollection('pages', ({ data }) => !data.draft && data.slug !== 'index' && data.slug !== '404');
  const blog = await getCollection('blog', ({ data }) => !data.draft);
  const urls: string[] = [`${site}/`, `${site}/blog`];
  for (const p of pages) urls.push(`${site}/${p.data.slug}`);
  for (const b of blog) urls.push(`${site}/${b.slug}`);
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n') +
    `\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
