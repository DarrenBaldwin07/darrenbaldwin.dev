import React from 'react'
import { Heading, Text, Button, Flex } from '@rapid-web/ui';
import Github from '../../assets/github.svg';
import GithubBlack from '../../assets/githubBlack.svg';

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
                <Button styles='w-max bg-white text-black hover:bg-[#E2E2E2] active:bg-[#E2E2E2] py-2 px-4'>
                    <div className='flex items-center gap-2'>
                        <img width={18} src={GithubBlack} alt='github' />
                        View on Github
                    </div>
                </Button>
            </Flex>
        </div>
    </div>
  )
}

export default Repository
