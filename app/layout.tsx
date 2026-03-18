import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Container from '@/components/Container';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

export const metadata: Metadata = {
	metadataBase: new URL('https://darrenbaldwin.dev'),
	title: {
		default: 'darren baldwin',
		template: '%s | darren baldwin',
	},
	description: 'i like building companies',
	openGraph: {
		title: 'darren baldwin',
		description: 'i like building companies',
		url: 'https://darrenbaldwin.dev',
		siteName: 'darren baldwin',
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary',
		title: 'darren baldwin',
		description: 'i like building companies',
		creator: '@darrenjr',
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
