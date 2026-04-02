import { NextResponse } from 'next/server';
import { getBlogPostsSortedByDate } from '@/lib/blog-posts';
import { getSiteUrl } from '@/lib/site';

export const dynamic = 'force-static';

function escapeXml(text: string): string {
	return text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

function formatRssDate(iso: string): string {
	return new Date(iso).toUTCString();
}

function buildRssXml(): string {
	const siteUrl = getSiteUrl();
	const posts = getBlogPostsSortedByDate();
	const latest = posts[0];
	const lastBuildDate = latest
		? formatRssDate(latest.publishedAt)
		: formatRssDate(new Date().toISOString());

	const items = posts
		.map((post) => {
			const url = `${siteUrl}/blog/${post.slug}`;
			const pubDate = formatRssDate(post.publishedAt);
			return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapeXml(post.description)}</description>
    </item>`;
		})
		.join('');

	return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>darren baldwin</title>
    <link>${escapeXml(siteUrl)}</link>
    <description>Writing from darren baldwin.</description>
    <language>en</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${escapeXml(`${siteUrl}/feed.xml`)}" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;
}

export function GET() {
	const body = buildRssXml();
	return new NextResponse(body, {
		headers: {
			'Content-Type': 'application/rss+xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600, s-maxage=3600',
		},
	});
}
