// UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ roles: [] });

  useEffect(() => {
    // Check for stored roles in localStorage
    const storedRoles = localStorage.getItem('userRoles');
    if (storedRoles) {
      setUser({ roles: JSON.parse(storedRoles) });
    }
  }, []);

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
