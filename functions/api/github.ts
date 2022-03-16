/*  ========================================================================
    # API - GitHub
    ========================================================================  */

/**
 *
 * @returns
 */
export async function onRequest({ env }) {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'User-Agent': 'Homepage',
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
  return new Response(JSON.stringify(data.data.user.pinnedItems.nodes));
}
