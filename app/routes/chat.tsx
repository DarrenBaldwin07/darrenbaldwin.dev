import React from 'react';
import { Heading, Text } from '@rapid-web/ui';
import { motion } from 'framer-motion';

function Chat() {
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
			exit={{
				x: '-100%',
			}}
			className='z-10'
		>
			<div className='z-10'>
				<Heading styles='text-white text-3xl tracking-widest font-extrabold'>
					Chat
				</Heading>
				<div className='bg-background border border-backgroundSecondary hover:-translate-y-1 hover:bg-[#22272C] transition ease-linear p-2 rounded-xl flex items-center justify-between w-full lg:w-96 mt-4'>
					<Text styles='text-white ml-2'>Coming soon... 🚀</Text>
				</div>
			</div>
		</motion.div>
	);
}

export default Chat;
