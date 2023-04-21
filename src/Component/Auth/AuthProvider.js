import React, { createContext, useState } from 'react';
import { login, logout } from './Module/AuthService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState('pending');

  const handleLogin = async (username, password) => {
    const success = await login(username, password);
    if (success) {
      setStatus('success');
      setUser(username);
    } else {
      setStatus('error');
      setUser(null);
    }
  };

  const handleLogout = () => {
    logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, status, login: handleLogin, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
