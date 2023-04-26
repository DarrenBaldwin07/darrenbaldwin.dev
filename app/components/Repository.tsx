import React from 'react'
import { Heading, Text, Button, Flex } from '@rapid-web/ui';
import Github from '../../assets/github.svg';

interface Props {
    title: string;
	description: string;
	stars: number;
	url: string;
	language: string;
    languageColor: string
};

const Repository = ({ title, description, stars, url, language, languageColor }: Props) => {
  return (
    <div className='bg-background border-backgroundSecondary border p-4 rounded-xl'>
        <div className='flex flex-col'>
            <div className='flex items-center gap-2'>
                <img width={26} src={Github} alt='github' />
                <Heading styles='text-white'>{title}</Heading>
            </div>
            <Text styles='text-white mt-2'>{description}</Text>
            <Flex styles='items-center justify-between mt-4'>
                <Flex styles='items-center gap-2'>
                    <div className='h-4 w-4 rounded-full' style={{backgroundColor: languageColor}}  />
                    <Text styles='text-white'>{language}</Text>
                </Flex>
                <Button styles='w-max'>View on Github</Button>
            </Flex>
        </div>
    </div>
  )
}

export default Repository
