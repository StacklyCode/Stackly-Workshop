const baseURL = "https://api.github.com";

export const api = (path, options) => {
  return fetch(`${baseURL}${path}`, options);
};
