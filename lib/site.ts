export function getSiteUrl(): string {
	const raw =
		process.env.NEXT_PUBLIC_SITE_URL ?? process.env.VERCEL_URL ?? null;
	if (!raw) {
		return 'https://darrenbaldwin.dev';
	}
	if (raw.startsWith('http://') || raw.startsWith('https://')) {
		return raw.replace(/\/$/, '');
	}
	return `https://${raw.replace(/\/$/, '')}`;
}
