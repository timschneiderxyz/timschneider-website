/*  ========================================================================
    # Interfaces - Repository
    ========================================================================  */

export default interface Repository {
  url: string;
  name: string;
  description: string;
  primaryLanguage?: {
    name: string;
    color: string;
  };
  stargazers: {
    totalCount: number;
  };
  forkCount: number;
}
