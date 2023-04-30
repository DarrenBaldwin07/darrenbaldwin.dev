import React, { useState } from 'react';
import { Container, Text, Tooltip } from '@rapid-web/ui';
import logo from '../../assets/profile.svg';
import gradient1 from '../../assets/gradient1.svg';
import gradient3 from '../../assets/gradient3.svg';
import Navigation from './Navigation';
import Star from '../../assets/star-solid.svg';
import UnStar from '../../assets/star-regular.svg';

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
	const [isStarred, setIsStarred] = useState(false);

	return (
		<div className='overflow-x-hidden relative h-screen'>
			<Container maxWidth='md' styles='z-10 flex justify-end'>
				<Tooltip
					styles='bg-background border-backgroundSecondary'
					label={isStarred ? '' : 'Star this portfolio!'}
					orientation='bottom'
				>
					<div
						onClick={() => setIsStarred(!isStarred)}
						className='bg-background border z-10 border-backgroundSecondary hover:border-[#4C5762] transition ease-linear p-2 rounded-xl flex items-center relative right-0 justify-self-end hover:cursor-pointer w-max top-[40px]'
					>
						<img
							src={isStarred ? Star : UnStar}
							alt='un-star'
							width={22}
						/>
						<Text styles='text-white ml-2 mr-6'>
							{isStarred ? 'Starred' : 'Star'}
						</Text>
						<div className='bg-backgroundSecondary p-1 rounded-full w-6 h-6 text-center flex items-center justify-center'>
							<Text styles='text-white text-sm'>0</Text>
						</div>
					</div>
				</Tooltip>
			</Container>
			<img
				src={gradient1}
				alt='gradient1'
				className='absolute -right-[400px] top-[200px] overflow-hidden'
			/>
			<img
				src={gradient3}
				alt='gradient3'
				className='absolute -top-[200px] lg:-top-[850px] sm:-top-[300px] md:-top-[400px] left-1/2 -translate-x-1/2 overflow-hidden'
			/>
			<Container maxWidth='sm' styles='z-10 pb-12'>
				<div className='mt-36 flex flex-col lg:flex-row z-10'>
					<div className='flex flex-col items-center lg:mr-32 mb-12 lg:mb-0'>
						<img
							src={logo}
							alt='profile'
							className='w-20 h-20 min-w-max z-10'
						/>
						<Text className='text-white mt-4 z-10 font-regular font-sans mb-12'>
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
