import React from 'react'
import { Container, Text } from '@rapid-web/ui';
import logo from '../../assets/profile.svg';
import gradient1 from '../../assets/gradient1.svg';
import gradient2 from '../../assets/gradient2.svg';
import gradient3 from '../../assets/gradient3.svg';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className='overflow-hidden relative h-screen'>
        <img src={gradient1} alt='gradient1' className='absolute -right-[250px] top-[200px] overflow-hidden' />
        <img src={gradient2} alt='gradient2' className='absolute -left-[300px] -bottom-[400px] overflow-hidden' />
        <img src={gradient3} alt='gradient3' className='absolute -top-[200px] lg:-top-[850px] sm:-top-[300px] md:-top-[400px] left-1/2 -translate-x-1/2 overflow-hidden' />
        <Container maxWidth='sm' styles='z-10'>
          <div className='mt-36 flex z-10'>
            <div className='flex flex-col items-center mr-32'>
                <img src={logo} alt='profile' className='w-20 h-20 min-w-max z-10' />
                <Text className='text-white font-sans mt-4 z-10'>@darrenBaldwin03</Text>
            </div>
            {children}
          </div>
        </Container>
    </div>
  )
}

export default Layout
