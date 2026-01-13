export default function Layout({ children }: { children: React.ReactNode }) {
	return <div className='prose prose-md dark:prose-invert'>{children}</div>;
}
