import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

// Log environment variables at build/config time
console.log('=== Build-time Environment Variables ===');
console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`NEXT_PUBLIC_ENV: ${process.env.NEXT_PUBLIC_ENV || 'not set'}`);
console.log('=========================================\n');

const nextConfig: NextConfig = {
	pageExtensions: ['ts', 'tsx', 'mdx'],
	/* config options here */
	experimental: {
		mdxRs: true,
	},
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
