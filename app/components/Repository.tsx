import React from 'react';
import { Heading, Text, Button, Flex } from '@rapid-web/ui';
import Github from '../../assets/github.svg';
import GithubBlack from '../../assets/githubBlack.svg';
import Star from '../../assets/star-regular.svg';

interface Props {
	title: string;
	description: string;
	stars: number;
	url: string;
	language: string;
	languageColor: string;
}

const Repository = ({
	title,
	description,
	stars,
	url,
	language,
	languageColor,
}: Props) => {
	return (
		<div className='bg-background border-backgroundSecondary border p-4 rounded-xl'>
			<div className='flex flex-col'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-2'>
						<img width={26} src={Github} alt='github' />
						<Heading styles='text-white text-2xl md:text-3xl'>
							{title}
						</Heading>
					</div>
					<div className='flex items-center gap-1 rounded-xl border-[1px] py-1 px-2 border-backgroundSecondary'>
						<img src={Star} alt='star' width={18} />
						<Text styles='text-white'>{stars}</Text>
					</div>
				</div>
				<Text styles='text-white mt-2'>{description}</Text>
				<Flex styles='items-center justify-between mt-4'>
					<Flex styles='items-center gap-2'>
						<div
							className='h-4 w-4 rounded-full'
							style={{ backgroundColor: languageColor }}
						/>
						<Text styles='text-white'>{language}</Text>
					</Flex>
					<a href={url} target='_blank' rel='noreferrer'>
						<Button styles='w-max bg-white text-black hover:bg-[#E2E2E2] active:bg-[#E2E2E2] py-2 px-4'>
							<div className='flex items-center gap-2'>
								<img
									width={18}
									src={GithubBlack}
									alt='github'
								/>
								View on Github
							</div>
						</Button>
					</a>
				</Flex>
			</div>
		</div>
	);
};

export default Repository;
