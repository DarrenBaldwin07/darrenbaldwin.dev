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
	metadataBase: new URL('https://darrenbaldwin.dev'),
	openGraph: {
		title: 'darren baldwin',
		description: 'i like building companies',
		siteName: 'darren baldwin',
		locale: 'en_US',
		type: 'website',
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
