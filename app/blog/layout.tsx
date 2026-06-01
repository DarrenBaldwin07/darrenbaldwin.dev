import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Link
				href='/'
				className='text-gray-400 hover:text-white text-sm mb-8 inline-block transition-colors'>
				← back
			</Link>
			<div className='prose prose-md'>{children}</div>
		</div>
	);
}
