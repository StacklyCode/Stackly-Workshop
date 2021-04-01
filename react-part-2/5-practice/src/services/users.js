import { api } from "../config/api";

export const getUser = (name) => {
  return api(`/users/${name}`).then((res) => res.json());
};
