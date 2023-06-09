import type { Config } from 'tailwindcss';
import {
	rapidStylesPath,
	rapidTailwindTheme,
	rapidPlugin,
} from '@rapid-web/ui';
import { globalStyles } from './app/styles/globals';

export default {
	content: ['./app/**/*.{js,jsx,ts,tsx}', rapidStylesPath],
	theme: {
		extend: rapidTailwindTheme({
			// Extend the default rapid tailwind theme here (documentation coming soon)
			fontFamily: {
				archivo: ['Archivo'],
			},
			colors: {
				background: '#1D2125',
				backgroundSecondary: '#31383F',
				star: '#E3B341',
			},
		}),
	},
	plugins: [
		rapidPlugin({
			// Configure global styles variants here (documentation coming soon)
			...globalStyles,
		}),
	],
} satisfies Config;
