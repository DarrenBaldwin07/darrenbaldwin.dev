import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
	title: string;
	slug: string;
	description: string;
}

const SOCIAL_LINKS = {
	tembo: 'https://tembo.io',
	github: 'https://github.com/DarrenBaldwin07',
	x: 'https://x.com/darrenbaldwinjr',
	email: 'mailto:darren@darrenbaldwin.dev',
} as const;

const BLOG_POSTS: BlogPost[] = [
	{
		title: 'hello world',
		slug: 'hello-world',
		description: 'an empty blog post',
	},
];

export default function Home() {
	return (
		<div className='text-gray-400'>
			<div className='flex flex-col'>
				<Link href='/' className='text-white font-medium text-md'>
					Darren Baldwin
				</Link>
				<p className='font-medium text-md'>Founder & Product Builder</p>
			</div>
			<Image
				src='/blue.png'
				alt='blue gradient'
				width={25}
				height={25}
				className='mt-2 rounded-[4px] w-full h-[20px]'
			/>
			<div className='flex flex-col gap-6 mt-32'>
				<h2 className='text-white font-medium text-md'>Currently</h2>
				<p>
					i&apos;m working on{' '}
					<a
						href={SOCIAL_LINKS.tembo}
						className='underline'
						target='_blank'
						rel='noopener noreferrer'>
						Tembo
					</a>
					, my company thats building an ai agent tool for software engineering
					teams—&quot;the background coding agents company&quot;
				</p>
			</div>
			<p className='mt-4'>
				previously worked at various venture-backed startups since 2019. No wins
				yet :)
			</p>

			<div className='flex flex-col gap-6 mt-20'>
				<h2 className='text-white font-medium text-md'>Writing</h2>
				{BLOG_POSTS.map((post) => (
					<Link
						href={`/blog/${post.slug}`}
						key={post.slug}
						className='-mx-3 flex flex-col rounded-md px-3 no-underline hover:bg-[#161616] sm:py-3 transition-all duration-100'>
						<h3 className='text-white font-medium text-md'>{post.title}</h3>
						<p className='text-gray-400'>{post.description}</p>
					</Link>
				))}
			</div>

			<p className='mt-16'>
				you can find more of my work on{' '}
				<a
					href={SOCIAL_LINKS.github}
					target='_blank'
					rel='noopener noreferrer'
					className='underline'>
					Github
				</a>{' '}
				and contact me via{' '}
				<a
					href={SOCIAL_LINKS.x}
					target='_blank'
					rel='noopener noreferrer'
					className='underline'>
					X
				</a>{' '}
				or{' '}
				<a href={SOCIAL_LINKS.email} className='underline'>
					email
				</a>
				.
			</p>
		</div>
	);
}
