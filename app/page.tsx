import Link from 'next/link';
import Image from 'next/image';

const BLOG_POSTS = [
	{
		title: 'clerk-rs: The Community-Maintained Clerk SDK for Rust',
		slug: 'clerk-rs',
		description: 'Integrating Clerk authentication in Rust applications',
	},
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
					i&apos;m working on pivoting{' '}
					<a href='https://tembo.io' className='underline' target='_blank'>
						Tembo
					</a>
					, my company thats building an ai agent tool for software engineering
					teams—&quot;Monitoring to Pull Requests, autonomously.&quot;
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
					href='https://github.com/DarrenBaldwin07'
					target='_blank'
					className='underline'>
					Github
				</a>{' '}
				and contact me via{' '}
				<a
					href='https://x.com/darrenbaldwinjr'
					target='_blank'
					className='underline'>
					X
				</a>{' '}
				or{' '}
				<a href='mailto:darren@darrenbaldwin.dev' className='underline'>
					email
				</a>
				.
			</p>
		</div>
	);
}
