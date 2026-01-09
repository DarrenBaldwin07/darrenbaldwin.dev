export default function Layout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return <div className='prose prose-md'>{children}</div>;
}
