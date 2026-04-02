export interface BlogPost {
	title: string;
	slug: string;
	description: string;
	publishedAt: string;
}

export const blogPosts: BlogPost[] = [
	{
		title: 'hello world',
		slug: 'hello-world',
		description: 'an empty blog post',
		publishedAt: '2025-01-08T12:00:00.000Z',
	},
];

export function getBlogPostsSortedByDate(): BlogPost[] {
	return [...blogPosts].sort(
		(a, b) =>
			new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
	);
}
