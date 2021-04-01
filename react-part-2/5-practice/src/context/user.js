import { createContext, useContext, useState } from "react";

const User = createContext(null);

export const useUser = () => useContext(User);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = (user) => setUser(user);

  return <User.Provider value={{ updateUser, user }}>{children}</User.Provider>;
};
