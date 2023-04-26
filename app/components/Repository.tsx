import React from 'react'
import { Heading, Text } from '@rapid-web/ui';
import Github from '../../assets/github.svg';

interface Props {
    title: string,
	description: string,
	stars: number,
	url: string,
	language: string
};

const Repository = ({ title, description, stars, url, language }: Props) => {
  return (
    <div className='bg-background border-backgroundSecondary border p-4 rounded-lg'>
        <div className='flex flex-col'>
            <div className='flex items-center gap-2'>
                <img width={26} src={Github} alt='github' />
                <Heading>{title}</Heading>
            </div>
            <Text>{description}</Text>
        </div>
    </div>
  )
}

export default Repository
