/*  ========================================================================
    # Components - Repository Card
    ========================================================================  */

// Dependencies
import { forwardRef } from 'react';
import clsx from 'clsx';

// Types
import type { Repository } from '@/data/get-pinned-repos';

// SVGs
import IconFolder from '@/svgs/ui/folder.svg';
import IconExternalLink from '@/svgs/ui/external-link.svg';
import IconStar from '@/svgs/ui/star.svg';
import IconForked from '@/svgs/ui/forked.svg';

// Props
export type RepoCardProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  repo: Repository;
};

const RepoCard = forwardRef<HTMLAnchorElement, RepoCardProps>(
  ({ repo, className, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={clsx(
          'group flex flex-col p-6 bg-neutral-950 border border-solid border-neutral-900 rounded-md transition-transform duration-300 sm:hover:scale-105',
          className
        )}
        href={repo.url}
        target='_blank'
        rel='noreferrer noopener'
        {...props}
      >
        <div className='flex justify-between mb-5'>
          <IconFolder className='w-7 h-7 fill-neutral-600 transition-color duration-300 sm:group-hover:fill-white' />
          <IconExternalLink className='w-4 h-4 fill-neutral-600 transition-color duration-300 sm:group-hover:fill-white' />
        </div>
        <h2 className='h3 mb-2'>{repo.name}</h2>
        <p className='grow'>{repo.description}</p>
        <div className='flex gap-5 mt-5 text-sm leading-none'>
          {repo.primaryLanguage?.name && repo.primaryLanguage?.color ? (
            <div className='flex items-end'>
              <span
                className='w-4 h-4 mr-1 rounded-full border border-solid border-black/20'
                style={{ backgroundColor: repo.primaryLanguage.color }}
              />
              <span className='text-white'>{repo.primaryLanguage.name}</span>
            </div>
          ) : null}
          {repo.stargazers.totalCount > 0 ? (
            <div className='flex items-end'>
              <IconStar className='w-4 h-4 mr-1 fill-white' />
              <span className='text-white'>{repo.stargazers.totalCount}</span>
            </div>
          ) : null}
          {repo.forkCount > 0 ? (
            <div className='flex items-end'>
              <IconForked className='w-4 h-4 mr-1 fill-white' />
              <span className='text-white'>{repo.forkCount}</span>
            </div>
          ) : null}
        </div>
      </a>
    );
  }
);
RepoCard.displayName = 'RepoCard';

export default RepoCard;
