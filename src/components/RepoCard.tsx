/*  ========================================================================
    # Components - Repository Card
    ========================================================================  */

// Dependencies
import React from 'react';

// Assets
import IconStar from '@assets/images/svg/ui/star.svg';
import IconForked from '@assets/images/svg/ui/forked.svg';

// Types
interface RepoCardProps {
  repo: {
    name: string;
    description: string;
    primaryLanguage: {
      name?: string;
      color?: string;
    };
    stargazers: {
      totalCount: number;
    };
    forkCount: number;
    url: string;
  };
}

export const RepoCard = ({ repo }: RepoCardProps) => {
  return (
    <a
      className='group flex flex-col p-6 bg-tim-coal rounded-xl transition-transform lg:hover:scale-105 lg:active:scale-95'
      href={repo.url}
      target='_blank'
      rel='noreferrer noopener'
    >
      <h3 className='mb-2 text-lg'>{repo.name}</h3>
      <p className='grow text-base'>{repo.description}</p>
      <div className='flex gap-5 mt-5'>
        {repo.primaryLanguage?.name && repo.primaryLanguage?.color ? (
          <div className='flex items-end text-sm leading-none'>
            <span
              className='w-4 h-4 mr-1 rounded-full border border-solid border-tim-black/20'
              style={{ backgroundColor: repo.primaryLanguage.color }}
            ></span>
            <span className='text-white'>{repo.primaryLanguage.name}</span>
          </div>
        ) : null}
        {repo.stargazers.totalCount > 0 ? (
          <div className='flex items-end text-sm leading-none'>
            <IconStar className='w-4 h-4 mr-1 fill-white' />
            <span className='text-white'>{repo.stargazers.totalCount}</span>
          </div>
        ) : null}
        {repo.forkCount > 0 ? (
          <div className='flex items-end text-sm leading-none'>
            <IconForked className='w-4 h-4 mr-1 fill-white' />
            <span className='text-white'>{repo.forkCount}</span>
          </div>
        ) : null}
      </div>
    </a>
  );
};

export const RepoCardSkeleton = () => {
  return (
    <div className='relative flex flex-col p-6 bg-tim-coal rounded-xl overflow-hidden'>
      <div className='h-5 w-8/12 mb-4 bg-white/10 rounded-md' />
      <div className='h-20 bg-tim-gray/10 rounded-md' />
      <div className='flex gap-5 mt-6'>
        <div className='h-4 w-4/12 bg-white/10 rounded-md' />
        <div className='h-4 w-2/12 bg-white/10 rounded-md' />
        <div className='h-4 w-2/12 bg-white/10 rounded-md' />
      </div>
      <div className='absolute inset-0 animate-[skeleton-loader_2s_infinite] bg-gradient-to-r from-transparent via-tim-gray/10 to-transparent' />
    </div>
  );
};
