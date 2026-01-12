interface LayoutProps {
	readonly children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return <div className='prose prose-md'>{children}</div>;
}
