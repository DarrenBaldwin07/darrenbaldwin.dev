import Link from 'next/link';
import { BlogPost } from '@/lib/types';

interface BlogPostCardProps {
	post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
	return (
		<Link
			href={`/blog/${post.slug}`}
			className='-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-[#161616] sm:py-3 transition-all duration-100'>
			<h3 className='text-white font-medium text-md'>{post.title}</h3>
			<p className='text-gray-400'>{post.description}</p>
		</Link>
	);
}
