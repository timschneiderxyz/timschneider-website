/*  ========================================================================
    # Pages - Home
    ========================================================================  */

// Dependencies
import React from 'react';

// Hooks
import useGitHub from '@hooks/useGitHub';

// Components
import Section from '@components/Section';
// import List from '@components/List';
import { RepoCard, RepoCardSkeleton } from '@components/RepoCard';

const Home = () => {
  const { loadingRepos, errorLoadingRepos, repos } = useGitHub();

  return (
    <main className='p-home'>
      <Section id='intro'>
        <div className='text-center'>
          <h1 className='mb-4'>W.I.P.</h1>
          <p>Currently working on a new website.</p>
        </div>
      </Section>

      {/* <Section id='about'>
        <div className='grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20'>
          <div>
            <h2>About me</h2>
          </div>
          <div>
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
      </Section> */}

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

      {/* <Section id='cta'>
        <div className='flex flex-col justify-center items-center h-[420px] md:h-[600px] p-6 bg-tim-coal rounded-xl text-center'>
          <h2>Contact me</h2>
        </div>
      </Section> */}
    </main>
  );
};

export default Home;
