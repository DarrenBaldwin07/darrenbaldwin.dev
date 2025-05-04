import Link from 'next/link';
import Image from 'next/image';

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
				className='mt-2 rounded-sm w-full h-[20px]'
			/>

			<div className='flex flex-col gap-6 mt-32'>
				<h2 className='text-white font-medium text-md'>Currently</h2>
				<p>
					I&apos;m working on pivoting{' '}
					<a href='https://tembo.io' className='underline'>
						tembo
					</a>
					, my company thats building an ai agent tool for software engineering
					teams—&quot;Monitoring to Pull Requests, autonomously.&quot;
				</p>
			</div>
			<p className='mt-4'>
				Previously worked at various venture-backed startups since 2019. No wins
				yet :)
			</p>
		</div>
	);
}
