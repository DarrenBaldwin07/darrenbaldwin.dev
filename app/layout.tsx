import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Container from '@/components/Container';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

export const metadata: Metadata = {
	title: {
		default: 'darren baldwin',
		template: '%s | darren baldwin',
	},
	description: 'Founder & Product Builder. Building Tembo, the background coding agents company.',
	keywords: ['founder', 'product builder', 'tembo', 'software engineering', 'ai agents'],
	authors: [{ name: 'Darren Baldwin' }],
	openGraph: {
		title: 'Darren Baldwin',
		description: 'Founder & Product Builder. Building Tembo, the background coding agents company.',
		url: 'https://darrenbaldwin.dev',
		siteName: 'Darren Baldwin',
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary',
		title: 'Darren Baldwin',
		description: 'Founder & Product Builder. Building Tembo, the background coding agents company.',
		creator: '@darrenjr',
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${inter.variable} font-sans antialiased overscroll-none`}>
				<Container>{children}</Container>
			</body>
		</html>
	);
}
