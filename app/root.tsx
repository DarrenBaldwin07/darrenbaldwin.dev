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
