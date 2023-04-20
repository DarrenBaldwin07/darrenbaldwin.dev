import { Heading, Text } from '@rapid-web/ui';
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

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

  return totalContributions
}

export default function Index() {
  const data = useLoaderData();
  console.log(data)
  return (
    <div className='z-10'>
      <Heading styles='text-white text-3xl tracking-widest font-extrabold z-10'>
          Darren Baldwin
      </Heading>
      <Text className='text-white font-sans mt-4 z-10'>Hey, I’m Darren. I am the Co-founder of <Text as='span' styles='font-bold'>
          <a rel="noreferrer" className='hover:underline decoration-solid' href='https://cincinnati.ventures' target='_blank'>Cincinnati Ventures</a>
        </Text>, a venture backed company building the startups of tomorrow.</Text>

        <Text styles='text-white font-sans'>I contribute and maintain various open source projects and am very passionate about fullstack web development and performance with tools like <strong>Typescript</strong> and <strong>Rust</strong>. I’m also an advisor and future Angel Investor in early stage startups</Text>
    </div>
  );
}
