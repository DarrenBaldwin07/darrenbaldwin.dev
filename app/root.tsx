import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';
import Layout from './components/Layout';
import styles from './styles/index.css';

// TODO: we should use wakatime api to show all time stats: https://wakatime.com/developers#all_time_since_today (these stats could be the three points on the homepage)

export function links() {
	return [{ rel: 'stylesheet', href: styles }];
}

export default function App() {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta
					name='viewport'
					content='width=device-width,initial-scale=1'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
				<meta name='description' content="Darren Baldwin's portfolio" />
				<meta name='twitter:card' content='summary_large_image' />
				<meta
					name='twitter:description'
					content="Darren Baldwin's portfolio."
				/>
				<meta name='twitter:site' content='https://darrenbaldwin.dev' />
				<meta name='twitter:title' content='Darren Baldwin' />
				<meta
					name='twitter:image'
					content='https://storage.googleapis.com/cv-framework/ui-banner%20(6).jpg'
				/>
				<meta
					property='og:image'
					content='https://storage.googleapis.com/cv-framework/ui-banner%20(6).jpg'
				/>
				<meta property='og:title' content='Darren Baldwin' />
				<meta
					property='og:description'
					content="Darren Baldwin's portfolio"
				/>
				<meta property='og:type' content='website' />
				<Meta />
				<Links />
			</head>
			<body>
				<Layout>
					<Outlet />
				</Layout>
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
