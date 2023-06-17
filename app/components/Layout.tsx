import React from 'react';
import { Container, Text } from '@rapid-web/ui';
import logo from '../../assets/profile.svg';
import gradient3 from '../../assets/gradient3.svg';
import Navigation from './Navigation';

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
	return (
		<div className='overflow-x-clip'>
			<div className='relative'>
				<img
					src={gradient3}
					alt='gradient3'
					className='absolute -top-[350px] sm:-top-[400px] md:-top-[500px] lg:-top-[650px] left-1/2 -translate-x-1/2'
				/>
			</div>
			<Container maxWidth='sm' styles='z-10 pb-12 overflow-y-visible'>
				<div className='mt-36 flex flex-col lg:flex-row z-10'>
					<div className='flex flex-col lg:items-center mb-12 lg:mr-32 lg:mb-0'>
						<img
							src={logo}
							alt='profile'
							className='w-20 h-20 min-w-max z-10 mb-4 lg:mt-0'
						/>
						<Text className='text-white mt-4 z-10 font-regular font-sans mb-12 hidden lg:flex'>
							@darrenBaldwin03
						</Text>
						<Navigation />
					</div>
					{children}
				</div>
			</Container>
		</div>
	);
};

export default Layout;
