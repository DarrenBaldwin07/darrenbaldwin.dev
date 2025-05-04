import Link from 'next/link';
export default function Home() {
	return (
		<div className=''>
			<div className='flex flex-col'>
				<Link href='/' className='text-white font-medium text-md'>
					Darren Baldwin
				</Link>
				<p className='text-gray-400 font-medium text-md'>
					Founder & Product Builder
				</p>
			</div>
		</div>
	);
}
