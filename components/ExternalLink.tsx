import { AnchorHTMLAttributes } from 'react';

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	children: React.ReactNode;
}

export default function ExternalLink({
	href,
	children,
	className = 'underline',
	...props
}: ExternalLinkProps) {
	const isExternal = href.startsWith('http');

	return (
		<a
			href={href}
			target={isExternal ? '_blank' : undefined}
			rel={isExternal ? 'noopener noreferrer' : undefined}
			className={className}
			{...props}>
			{children}
		</a>
	);
}
