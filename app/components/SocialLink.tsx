import React from 'react';
import { Text } from '@rapid-web/ui';
import LinkIcon from '../../assets/arrow-up-right-from-square-solid.svg';

interface Props {
	image: string;
	url: string;
	title: string;
}

const SocialLink = ({ image, url, title }: Props) => {
	return (
		<a href={url} target='_blank' rel='noreferrer'>
			<div className='bg-background border border-backgroundSecondary hover:bg-[#22272C] transition ease-linear p-4 rounded-lg flex items-center justify-between w-52'>
				<div className='flex items-center'>
					<img width={24} src={image} alt='linkedin' />
					<Text styles='text-white ml-2'>{title}</Text>
				</div>
				<img src={LinkIcon} width={15} alt='link' />
			</div>
		</a>
	);
};

export default SocialLink;
