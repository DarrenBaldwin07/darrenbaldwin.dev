import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'blog');

export interface BlogPost {
	slug: string;
	title: string;
	date: string;
	excerpt: string;
	author: string;
	tags: string[];
	content: string;
}

export function getAllPosts(): BlogPost[] {
	const fileNames = fs.readdirSync(postsDirectory);
	const allPostsData = fileNames
		.filter((fileName) => fileName.endsWith('.md'))
		.map((fileName) => {
			const slug = fileName.replace(/\.md$/, '');
			const fullPath = path.join(postsDirectory, fileName);
			const fileContents = fs.readFileSync(fullPath, 'utf8');
			const { data, content } = matter(fileContents);

			return {
				slug,
				title: data.title,
				date: data.date,
				excerpt: data.excerpt,
				author: data.author,
				tags: data.tags || [],
				content,
			};
		});

	return allPostsData.sort((a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	});
}

export function getPostBySlug(slug: string): BlogPost | null {
	try {
		const fullPath = path.join(postsDirectory, `${slug}.md`);
		const fileContents = fs.readFileSync(fullPath, 'utf8');
		const { data, content } = matter(fileContents);

		return {
			slug,
			title: data.title,
			date: data.date,
			excerpt: data.excerpt,
			author: data.author,
			tags: data.tags || [],
			content,
		};
	} catch (_error) {
		console.error(`Error getting post by slug: ${slug}`, _error);
		return null;
	}
}
