import Link from 'next/link';
import Image from 'next/image';
import { BLOG_POSTS, SOCIAL_LINKS, SITE_INFO } from '@/lib/constants';
import SectionHeading from '@/components/SectionHeading';
import BlogPostCard from '@/components/BlogPostCard';
import ExternalLink from '@/components/ExternalLink';

export default function Home() {
	return (
		<main className='text-gray-400'>
			<header className='flex flex-col'>
				<h1 className='text-white font-medium text-md'>
					<Link href='/' className='text-white font-medium text-md'>
						{SITE_INFO.name}
					</Link>
				</h1>
				<p className='font-medium text-md'>{SITE_INFO.role}</p>
			</header>
			<Image
				src='/blue.png'
				alt='Decorative blue gradient banner'
				width={25}
				height={25}
				className='mt-2 rounded-[4px] w-full h-[20px]'
				priority
			/>
			<section className='flex flex-col gap-6 mt-32' aria-labelledby='currently-heading'>
				<SectionHeading id='currently-heading'>Currently</SectionHeading>
				<p>
					i&apos;m working on pivoting{' '}
					<ExternalLink href={SITE_INFO.temboUrl}>
						Tembo
					</ExternalLink>
					, my company thats building an ai agent tool for software engineering
					teams—&quot;background agents for technical teams.&quot;
				</p>
				<p>
					previously worked at various venture-backed startups since 2019. No wins
					yet :)
				</p>
			</section>

			<section className='flex flex-col gap-6 mt-20' aria-labelledby='writing-heading'>
				<SectionHeading id='writing-heading'>Writing</SectionHeading>
				{BLOG_POSTS.map((post) => (
					<BlogPostCard key={post.slug} post={post} />
				))}
			</section>

			<footer className='mt-16'>
				<p>
				you can find more of my work on{' '}
				{SOCIAL_LINKS.map((link, index) => (
					<span key={link.name}>
						<ExternalLink href={link.url}>
							{link.label}
						</ExternalLink>
						{index === 0 && ' and contact me via '}
						{index === 1 && ' or '}
						{index === SOCIAL_LINKS.length - 1 && '.'}
					</span>
				))}
				</p>
			</footer>
		</main>
	);
}
