/*  ========================================================================
    # Components - Repository Card
    ========================================================================  */

// Dependencies
import { forwardRef } from 'react';

// Types
import type Repository from '@/types/repository';

// SVGs
import IconFolder from '@/svgs/ui/folder.svg';
import IconExternalLink from '@/svgs/ui/external-link.svg';
import IconStar from '@/svgs/ui/star.svg';
import IconForked from '@/svgs/ui/forked.svg';

// Props
export interface RepoCardProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  repo: Repository;
}

const RepoCard = forwardRef<HTMLAnchorElement, RepoCardProps>(({ repo, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className='group flex flex-col p-6 bg-zinc-950 border border-solid border-zinc-900 rounded-xl transition-transform duration-300 lg:hover:scale-105'
      href={repo.url}
      target='_blank'
      rel='noreferrer noopener'
      {...props}
    >
      <div className='flex justify-between items-center mb-5'>
        <IconFolder className='w-7 h-7 fill-slate-400' />
        <IconExternalLink className='w-4 h-4 fill-slate-400 transition duration-300 lg:group-hover:scale-125 lg:group-hover:fill-tim-primary' />
      </div>
      <h2 className='h3 mb-2'>{repo.name}</h2>
      <p className='grow text-base'>{repo.description}</p>
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
});
RepoCard.displayName = 'RepoCard';

export default RepoCard;
