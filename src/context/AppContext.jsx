import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const axios = {
    get: async (url, config = {}) => {
      const token = localStorage.getItem('token');
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...(token && { Authorization: `Bearer ${token}` }),
          ...config.headers
        }
      });
      return { data: await response.json() };
    },
    
    post: async (url, data, config = {}) => {
      const token = localStorage.getItem('token');
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token && { Authorization: `Bearer ${token}` }),
          ...config.headers
        },
        body: JSON.stringify(data)
      });
      return { data: await response.json() };
    },

    patch: async (url, data, config = {}) => {
      const token = localStorage.getItem('token');
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          ...(token && { Authorization: `Bearer ${token}` }),
          ...config.headers
        },
        body: JSON.stringify(data)
      });
      return { data: await response.json() };
    }
  };

  const value = {
    user,
    setUser,
    loading,
    setLoading,
    axios
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};