import { createContext, useContext, useState } from 'react';
import { authAPI } from '../api/auth.api';
import { toast } from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

const ROLE_ROUTES = {
  superAdmin: '/super-admin',
  restaurant: '/restaurant',
  sales: '/sales',
  support: '/support'
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (credentials) => {
    setLoading(true);
    try {
      // Mock login for testing - replace with actual API call
      const mockUser = {
        id: 1,
        email: credentials.email,
        role: credentials.role,
        token: 'mock-jwt-token'
      };
      
      setUser(mockUser);
      localStorage.setItem('token', mockUser.token);
      toast.success('Login successful!');
      return ROLE_ROUTES[mockUser.role] || '/dashboard';
    } catch (error) {
      toast.error(error.message || 'Login failed');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    toast.success('Logged out successfully');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, ROLE_ROUTES }}>
      {children}
    </AuthContext.Provider>
  );
};