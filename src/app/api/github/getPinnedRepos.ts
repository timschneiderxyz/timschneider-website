/*  ========================================================================
    # API - GitHub - Get Pinned Repositories
    ========================================================================  */

// Types
import type Repository from '@/types/repository';

/**
 * Returns the pinned repositories from the GitHub GraphQL API.
 */
export const getPinnedRepos = async () => {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'User-Agent': 'Personal Website',
      Authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `{
        user(login: "${process.env.GITHUB_USERNAME}") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                description
                primaryLanguage {
                  name
                  color
                }
                stargazers {
                  totalCount
                }
                forkCount
                url
              }
            }
          }
        }
      }`
    }),
    next: { revalidate: 86400 }
  });

  if (!response.ok) {
    throw new Error(await response.text());
  }

  const repositories = await response.json();

  return repositories.data.user.pinnedItems.nodes as Repository[];
};
