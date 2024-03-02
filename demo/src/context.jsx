import React, { createContext, useContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const user = {
    isAuthenticated: false,
    username: 'Guest',
  };

  const login = (username) => {
    user.isAuthenticated = true;
    user.username = username;
  };

  const logout = () => {
    user.isAuthenticated = false;
    user.username = 'Guest'; // 'guest' should be 'Guest'
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

function useUser() {
  const context = useContext(UserContext); // 'React.' is not needed here
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

export { UserProvider, useUser };
