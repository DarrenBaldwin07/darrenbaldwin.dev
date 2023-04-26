import React from 'react';
import { Heading, Text } from '@rapid-web/ui';
import { motion } from 'framer-motion';
import { getProjects } from '../helpers';
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import Repository from '~/components/Repository';

export async function loader() {
	const repoData = await getProjects();
	return json(repoData);
}

function Oss() {
	const repos = useLoaderData();
	return (
		<motion.div
			whileInView={{
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
			exit={{
				x: '-100%',
			}}
			className='z-10'
		>
			<div className='z-10'>
				<Heading styles='text-white text-3xl tracking-widest font-extrabold'>
					Projects
				</Heading>
			</div>
		</motion.div>
	);
}

export default Oss;
