/*  ========================================================================
    # Pages - Home
    ========================================================================  */

// Dependencies
import React from 'react';

// Hooks
import useGitHub from '@hooks/useGitHub';

// Components
import Section from '@components/Section';
import List from '@components/List';
import { RepoCard, RepoCardSkeleton } from '@components/RepoCard';

const Home = () => {
  const { loadingRepos, errorLoadingRepos, repos } = useGitHub();

  return (
    <main className='p-home'>
      <Section id='about'>
        <div className='grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20'>
          <div>
            <figure className='max-w-xs lg:max-w-none mx-auto rotate-3 aspect-square'>
              <img
                className='w-full h-full rounded-2xl object-cover'
                src='/images/misc/tim.jpg'
                alt='A picture of Tim.'
              />
            </figure>
          </div>
          <div>
            <div className='text-block'>
              <h1>Hey there, I’m Tim.</h1>
              <p>
                I’m a developer who enjoys creating high-quality websites and tinkering with server
                stuff. My interest in everything that has to do with technologies and development
                goes back to my childhood. Since then I’ve been experimenting with all sorts of
                computer-related topics. To achieve my goals I’m constantly striving to improve my
                skills and keep up-to-date with new methods and technologies.
              </p>
              <p>In my pastime I like to do photography or play a video game to unwind.</p>
              <p>Here is my tech stack that I’m currently working with:</p>
            </div>
            <List
              title='Tools & Technologies'
              items={[
                'Git',
                'Docker',
                'Node.js',
                'Webpack',
                'React',
                'WordPress',
                'Tailwind CSS',
                'Databases (SQL)',
                'APIs (REST, GraphQL)'
              ]}
            />
            <List
              title='Languages'
              items={[
                'HTML5',
                'CSS3 / SCSS',
                'JavaScript / TypeScript',
                'PHP',
                'Bash',
                'PowerShell'
              ]}
            />
          </div>
        </div>
      </Section>

      <Section id='repos'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 lg:gap-y-8 max-w-5xl mx-auto'>
          {loadingRepos
            ? [...Array(6)].map((value, index) => <RepoCardSkeleton key={index} />)
            : repos.map(repo => <RepoCard key={repo.name} repo={repo} />)}
        </div>
        {errorLoadingRepos ? (
          <h3 className='text-center'>An error occurred while loading repositories.</h3>
        ) : null}
      </Section>

      <Section id='cta'>
        <div className='flex flex-col justify-center items-center h-[420px] md:h-[600px] p-6 bg-tim-coal rounded-xl text-center'>
          <h2 className='mb-4'>Like to get in touch?</h2>
          <p>
            Then feel free to <a href='mailto:timschneider.xyz@gmail.com'>send me an email</a>.
          </p>
        </div>
      </Section>
    </main>
  );
};

export default Home;
