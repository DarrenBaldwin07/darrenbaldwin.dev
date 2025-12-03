export interface BlogPost {
	title: string;
	slug: string;
	description: string;
	date?: string;
	tags?: string[];
}

export interface SocialLink {
	name: string;
	url: string;
	label: string;
}
