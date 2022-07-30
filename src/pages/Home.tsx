/*  ========================================================================
    # Pages - Home
    ========================================================================  */

// Dependencies
import React from 'react';

// Hooks
import useGitHub from '@hooks/useGitHub';

// Components
import Section from '@components/Section';
import RepoCard from '@components/RepoCard';

const Home = () => {
  const { loadingRepos, repos } = useGitHub();

  return (
    <main className='p-home'>
      <Section id='intro'>
        <div className='text-center'>
          <h1 className='mb-4'>W.I.P.</h1>
          <p>Currently working on a new website.</p>
        </div>
      </Section>

      <Section id='repos'>
        {loadingRepos ? (
          <h2 className='text-center'>Loading repositories...</h2>
        ) : (
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 lg:gap-y-8 max-w-5xl mx-auto'>
            {repos.map((repo, index) => (
              <RepoCard key={index} repo={repo} />
            ))}
          </div>
        )}
      </Section>
    </main>
  );
};

export default Home;
