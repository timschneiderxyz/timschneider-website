/*  ========================================================================
    # Hooks - Use GitHub
    ========================================================================  */

// Dependencies
import { useEffect, useState } from 'react';

// Types
interface Repo {
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
}

const useGitHub = () => {
  const [loadingRepos, setLoadingRepos] = useState<boolean>(true);
  const [errorLoadingRepos, setErrorLoadingRepos] = useState<boolean>(false);
  const [repos, setRepos] = useState<Repo[]>([]);

  const getRepos = async () => {
    try {
      const response = await fetch('https://timschneider.xyz/api/github');

      if (response.status !== 200) {
        setErrorLoadingRepos(true);
        throw new Error(await response.text());
      }

      setLoadingRepos(false);
      setRepos(await response.json());
    } catch (error) {
      setLoadingRepos(false);
      setErrorLoadingRepos(true);
      console.log(error); // eslint-disable-line
    }
  };

  useEffect(() => {
    getRepos();
  }, []);

  return { loadingRepos, errorLoadingRepos, repos };
};

export default useGitHub;
