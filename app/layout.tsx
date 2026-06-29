import type { Metadata, Viewport } from 'next';
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
};

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: '#000000',
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
