import { BlogPost, SocialLink } from './types';

export const BLOG_POSTS: BlogPost[] = [
	{
		title: 'hello world',
		slug: 'hello-world',
		description: 'an empty blog post',
	},
];

export const SOCIAL_LINKS: SocialLink[] = [
	{
		name: 'GitHub',
		url: 'https://github.com/DarrenBaldwin07',
		label: 'Github',
	},
	{
		name: 'X',
		url: 'https://x.com/darrenbaldwinjr',
		label: 'X',
	},
	{
		name: 'Email',
		url: 'mailto:darren@darrenbaldwin.dev',
		label: 'email',
	},
];

export const SITE_INFO = {
	name: 'Darren Baldwin',
	role: 'Founder & Product Builder',
	temboUrl: 'https://tembo.io',
} as const;
