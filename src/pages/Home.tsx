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
    <main>
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
              <h1>Hey there, I am Tim.</h1>
              <p>
                Already in my childhood, I had a lot of fun learning and understanding technologies
                together with my father. Nowadays, I have turned my ever-growing passion for these
                things into a profession and have become a developer.
              </p>
              <p>
                My job is to build and optimise high-quality and user-friendly websites for my
                clients, with whom I regularly exchange ideas to achieve the best possible results.
                Therefore, I am constantly educating myself in order to be able to offer all
                potential and current possibilities. I also do a lot of DevOps work to optimise and
                automate as many processes as possible. To unwind, I like to photograph, listen to
                music or play a video game.
              </p>
              <p>Here are a few of the technologies and languages I currently use:</p>
            </div>
            <ul className='grid grid-cols-[repeat(auto-fit,200px)] gap-y-2 gap-x-12 mt-6 pl-6'>
              {[
                'Docker',
                'CSS3 / SCSS',
                'Tailwind CSS',
                'Node.js',
                'JavaScript / TypeScript',
                'Webpack',
                'React',
                'PHP',
                'WordPress'
              ].map((item, index) => (
                <li key={index} className='marker:text-tim-primary'>
                  {item}
                </li>
              ))}
            </ul>
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
