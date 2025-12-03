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
		default: 'Darren Baldwin - Founder & Product Builder',
		template: '%s | Darren Baldwin',
	},
	description: 'Founder & Product Builder working on Tembo, an AI agent tool for software engineering teams. Previously worked at various venture-backed startups.',
	keywords: ['Darren Baldwin', 'founder', 'product builder', 'Tembo', 'AI agents', 'software engineering'],
	authors: [{ name: 'Darren Baldwin', url: 'https://darrenbaldwin.dev' }],
	creator: 'Darren Baldwin',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://darrenbaldwin.dev',
		siteName: 'Darren Baldwin',
		title: 'Darren Baldwin - Founder & Product Builder',
		description: 'Founder & Product Builder working on Tembo, an AI agent tool for software engineering teams.',
	},
	twitter: {
		card: 'summary_large_image',
		site: '@darrenbaldwinjr',
		creator: '@darrenbaldwinjr',
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
