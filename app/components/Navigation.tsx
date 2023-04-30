import React from 'react';
import { NavLink } from '@remix-run/react';

const Navigation: React.FC = () => {
	return (
		<div className='flex flex-row lg:flex-col space-x-6 lg:space-y-6 lg:space-x-0'>
			<NavLink
				className={({ isActive }) =>
					isActive
						? 'backdrop-blur border-2 px-4 py-2 z-10 text-white rounded-xl text-center'
						: 'bg-none px-4 py-2 z-10 text-white text-center'
				}
				to='/'
			>
				About
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					isActive
						? 'backdrop-blur border-2 px-4 py-2 z-10 text-white rounded-xl text-centerr'
						: 'bg-none px-4 py-2 z-10 text-white text-center'
				}
				to='/oss'
			>
				Projects
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					isActive
						? 'backdrop-blur border-2 px-4 py-2 z-10 text-white rounded-xl text-center'
						: 'bg-none px-4 py-2 z-10 text-white text-center'
				}
				to='/blog'
			>
				Blog
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					isActive
						? 'backdrop-blur border-2 px-4 py-2 z-10 text-white rounded-xl text-center'
						: 'bg-none px-4 py-2 z-10 text-white text-center'
				}
				to='/chat'
			>
				Chat
			</NavLink>
		</div>
	);
};

export default Navigation;
