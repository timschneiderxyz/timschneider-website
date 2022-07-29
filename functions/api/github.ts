/*  ========================================================================
    # Functions - API - GitHub
    ========================================================================  */

/**
 * Returns the pinned Repositories from the GitHub GraphQL API.
 */
export async function onRequestGet({ env }) {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'User-Agent': 'Personal Website',
      Authorization: `Bearer ${env.GITHUB_API_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `{
        user(login: "${env.GITHUB_USERNAME}") {
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
    })
  });

  const data = await response.json();
  return new Response(JSON.stringify(data.data.user.pinnedItems.nodes), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
