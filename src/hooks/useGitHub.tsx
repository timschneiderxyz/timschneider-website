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
  const [repos, setRepos] = useState<Repo[]>([]);

  const getRepos = async () => {
    try {
      const response = await fetch('/api/github');

      if (response.status !== 200) {
        throw new Error(await response.text());
      }

      setLoadingRepos(false);
      setRepos(await response.json());
    } catch (error) {
      setLoadingRepos(false);
      console.log(error); // eslint-disable-line
    }
  };

  useEffect(() => {
    getRepos();
  }, []);

  return { loadingRepos, repos };
};

export default useGitHub;
