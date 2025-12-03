interface SectionHeadingProps {
	children: React.ReactNode;
	className?: string;
	id?: string;
}

export default function SectionHeading({
	children,
	className = '',
	id,
}: SectionHeadingProps) {
	return (
		<h2 id={id} className={`text-white font-medium text-md ${className}`}>
			{children}
		</h2>
	);
}
