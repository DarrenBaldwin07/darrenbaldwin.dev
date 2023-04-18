import { Heading, Text } from '@rapid-web/ui';

export default function Index() {
  return (
    <div className='z-10'>
      <Heading styles='text-white text-3xl tracking-widest font-extrabold z-10'>
          Darren Baldwin
      </Heading>
      <Text className='text-white font-sans mt-4 z-10'>Hey, I’m Darren. I am the Co-founder of <Text as='span' styles='font-bold'>
          <a rel="noreferrer" className='hover:underline decoration-solid' href='https://cincinnati.ventures' target='_blank'>Cincinnati Ventures</a>
        </Text>, a venture backed company building the startups of tomorrow.</Text>
    </div>
  );
}
