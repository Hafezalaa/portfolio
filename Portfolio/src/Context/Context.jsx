import { createContext, useState } from "react";

export const UserDataContext = createContext();

const UserData = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);

  return (
    <UserDataContext.Provider
      value={[user, isAdmin, isUser, setUser, setIsAdmin, setIsUser]}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserData;
