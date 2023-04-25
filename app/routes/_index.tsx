import { Heading, Text } from '@rapid-web/ui';
import { useLoaderData } from "@remix-run/react";
import { json } from '@remix-run/node';
import { formatNumber, getMostUsedLanguage } from '~/helpers';
import Github from '../../assets/github.svg';
import Twitter from '../../assets/twitter.svg';
import Code from '../../assets/terminalSolid.svg';
import LinkIcon from '../../assets/arrow-up-right-from-square-solid.svg';
import LinkedIn from '../../assets/linkedin.svg'


export async function loader() {
  const headers = {
      'Authorization': `bearer ${process.env.GITHUB_TOKEN}`,
  }
  const body = {
      "query": `query {
          user(login: "DarrenBaldwin07") {
            name
            contributionsCollection {
              contributionCalendar {
                colors
                totalContributions
                weeks {
                  contributionDays {
                    color
                    contributionCount
                    date
                    weekday
                  }
                  firstDay
                }
              }
            }
          }
        }`
  }

  const response = await fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers })
  const data = await response.json()
  const contributions = data.data.user.contributionsCollection.contributionCalendar.weeks;

  let totalContributions = 0;
  for (const contrib of contributions) {
      for (const day of contrib.contributionDays) {
          if (day.contributionCount > 0) {
              totalContributions += day.contributionCount

          }
      }
  }

  let mostUsedLanguage = await getMostUsedLanguage("DarrenBaldwin07");

  const loaderResponse = {
    totalContributions,
    mostUsedLanguage
  }

  return json(loaderResponse, { headers: { "Cache-Control": "public, s-maxage=60" }});
}



export default function Index() {
  const data = useLoaderData();
  return (
    <div className='z-10'>
      <Heading styles='text-white text-3xl tracking-widest font-extrabold z-10'>
          Darren Baldwin
      </Heading>
      <Text className='text-white font-sans mt-4 z-10'>Hey, I’m Darren. I am the Co-founder of <Text as='span' styles='font-bold'>
          <a rel="noreferrer" className='hover:underline decoration-solid' href='https://cincinnati.ventures' target='_blank'>Cincinnati Ventures</a>
        </Text>, a venture backed company building the startups of tomorrow.</Text>
        <div className='flex flex-col mt-8 space-y-6'>
          <div className='flex space-x-2 items-center'>
            <img width={26} src={Github} alt='github' />
            <Text styles='text-white'>{formatNumber(data.totalContributions.toString())} contributions in the last year</Text>
          </div>
          <div className='flex space-x-2 items-center'>
            <img width={26} src={Twitter} alt='twitter' />
            <Text styles='text-white'>{400} all time tweets</Text>
          </div>
          <div className='flex space-x-2 items-center'>
            <img width={26} src={Code} alt='code' />
            <Text styles='text-white'>Most used language: {data.mostUsedLanguage}</Text>
          </div>
        </div>
        <Text styles='text-white font-sans mt-8'>I contribute and maintain various open source projects and am very passionate about fullstack web development and performance with tools like <strong>Typescript</strong> and <strong>Rust</strong>. I’m also an advisor and future Angel Investor in early stage startups</Text>
        <div className='mt-12 flex items-center space-x-6'>
          <a href="https://github.com/DarrenBaldwin07" target='_blank' rel='noreferrer'>
              <div className='bg-background border border-backgroundSecondary hover:bg-[#22272C] transition ease-linear p-4 rounded-lg flex items-center justify-between w-52'>
                <div className='flex items-center'>
                  <img width={26} src={Github} alt='github' />
                  <Text styles='text-white ml-2'>Github</Text>
                </div>
                <img src={LinkIcon} width={15} alt='link' />
              </div>
          </a>
          <a href="https://twitter.com/DarrenBaldwin03" target='_blank' rel='noreferrer'>
              <div className='bg-background border border-backgroundSecondary hover:bg-[#22272C] transition ease-linear p-4 rounded-lg flex items-center justify-between w-52'>
                <div className='flex items-center'>
                  <img width={26} src={Twitter} alt='twitter' />
                  <Text styles='text-white ml-2'>Twitter</Text>
                </div>
                <img src={LinkIcon} width={15} alt='link' />
              </div>
          </a>
          <a href="https://www.linkedin.com/in/real-darren-baldwin/" target='_blank' rel='noreferrer'>
              <div className='bg-background border border-backgroundSecondary hover:bg-[#22272C] transition ease-linear p-4 rounded-lg flex items-center justify-between w-52'>
                <div className='flex items-center'>
                  <img width={24} src={LinkedIn} alt='linkedin' />
                  <Text styles='text-white ml-2'>LinkedIn</Text>
                </div>
                <img src={LinkIcon} width={15} alt='link' />
              </div>
          </a>
        </div>
    </div>
  );
}
