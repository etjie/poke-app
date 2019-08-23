// Rules always make object URL_REPOS with childs default child is index

export const API_ROOT = () => '/';
export const API_LIST = {
  ALL: () => '/users',
  REPOS: ({ username }) =>
    `/users/${username}/repos?type=all&sort=updated&client_id=${
      process.env.GITHUB_CLIENT_ID
    }&client_secret=${process.env.GITHUB_CLIENT_SECRET}`,
};

export const API_DETAIL = {
  INDEX: () => '/auth',
  LOGIN: () => `/auth/login`,
};

export const API_COLLECTION = {
  INDEX: () => `/profile`,
  ME: () => `/profile/me`,
};
