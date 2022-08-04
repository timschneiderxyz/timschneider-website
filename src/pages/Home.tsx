/*  ========================================================================
    # Pages - Home
    ========================================================================  */

// Dependencies
import React from 'react';

// Hooks
import useGitHub from '@hooks/useGitHub';

// Components
import Section from '@components/Section';
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
    </main>
  );
};

export default Home;
