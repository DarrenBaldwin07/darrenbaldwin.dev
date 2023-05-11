import React from 'react';
import { Heading, VStack, Flex, Text } from '@rapid-web/ui';
import { motion } from 'framer-motion';
import { getProjects } from '../helpers';
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import Repository from '~/components/Repository';
import type { Repo } from '../helpers';

export async function loader() {
	const repoData = await getProjects();
	return json(repoData);
}

function Oss() {
	const repos: Repo[] = useLoaderData();
	return (
		<motion.div
			animate={{
				opacity: 1,
				x: 0,
			}}
			initial={{
				x: 500,
				opacity: 0,
			}}
			transition={{
				duration: 0.25,
				ease: 'easeInOut',
			}}
			className='z-10'
		>
			<div className='z-10'>
				<Flex styles='items-center gap-2'>
					<Heading styles='text-white text-3xl tracking-widest font-extrabold'>
						Projects
					</Heading>
					<Flex styles='items-center justify-center p-2 rounded-full bg-background border border-backgroundSecondary w-8 h-8'>
						<Text styles='text-white'>{repos.length}</Text>
					</Flex>
				</Flex>
				<VStack styles='mt-6'>
					{repos.map(
						(
							{
								title,
								description,
								language,
								languageColor,
								url,
								stars,
							},
							index,
						) => (
							<Repository
								key={index}
								title={title}
								description={description}
								language={language}
								languageColor={languageColor}
								url={url}
								stars={stars}
							/>
						),
					)}
				</VStack>
			</div>
		</motion.div>
	);
}

export default Oss;
