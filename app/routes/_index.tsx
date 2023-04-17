import type { V2_MetaFunction } from "@remix-run/react";
import { Button, Heading, Text } from '@rapid-web/ui';

// TODO: we should turn this into a layout component/page
export const meta: V2_MetaFunction = () => {
  return [{ title: "Darren Baldwin" }];
};

export default function Index() {
  return (
    <div className='z-10'>
      <Heading styles='text-white text-3xl tracking-widest font-extrabold z-10'>
          Darren Baldwin
      </Heading>
      <Text className='text-white font-sans mt-4 z-10'>Hey, I’m Darren. I am the <Text styles='font-bold font-sans' as='span'>Co-founder of Cincinnati Ventures</Text>, a venture backed company building the startups of tomorrow.</Text>
    </div>
  );
}
