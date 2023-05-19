import React, { Suspense } from 'react';
import { Heading, VStack, Flex, Text, Spinner } from '@rapid-web/ui';
import { motion } from 'framer-motion';
import { getProjects } from '../helpers';
import { useLoaderData, Await } from '@remix-run/react';
import { defer } from '@remix-run/node';
import Repository from '~/components/Repository';

export async function loader() {
	const repoData = getProjects();
	return defer({ data: repoData });
}

function Oss() {
	const repos = useLoaderData<typeof loader>();
	return (
		<div className='z-10'>
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
				<Flex styles='items-center gap-2 relative'>
					<Heading styles='text-white text-3xl tracking-widest font-extrabold'>
						Projects
					</Heading>
					<Flex styles='items-center justify-center p-2 rounded-full bg-background border border-backgroundSecondary w-8 h-8'>
						<Text styles='text-white'>5</Text>
					</Flex>
				</Flex>
			</motion.div>
			<VStack styles='mt-6'>
				<Suspense
					fallback={
						<VStack styles='bg-background border-backgroundSecondary border p-2 rounded-xl w-min items-center justify-center absolute top-1/2 left-1/2'>
							<Spinner styles='border-r-white border-l-transparent border-t-transparent border-b-transparent bg-transparent' />
						</VStack>
					}
				>
					<Await resolve={repos.data}>
						{(repos) => (
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
								<VStack>
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
							</motion.div>
						)}
					</Await>
				</Suspense>
			</VStack>
		</div>
	);
}

export default Oss;
