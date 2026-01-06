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
	description: 'i like building companies',
	authors: [{ name: 'Darren Baldwin' }],
	creator: 'Darren Baldwin',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		siteName: 'darren baldwin',
		title: 'darren baldwin',
		description: 'i like building companies',
	},
	twitter: {
		card: 'summary',
		title: 'darren baldwin',
		description: 'i like building companies',
		creator: '@darrenbaldwin07',
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
