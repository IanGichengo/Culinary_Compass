import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('/api/users/me', { headers: { Authorization: `Bearer ${token}` } })
        .then(response => setUser(response.data))
        .catch(() => localStorage.removeItem('token'));
    }
  }, []);

  const login = async (email, password) => {
    const response = await axios.post('/api/auth/login', { email, password });
    localStorage.setItem('token', response.data.token);
    setUser(response.data.user);
  };

  const signup = async (username, email, password) => {
    await axios.post('/api/auth/signup', { username, email, password });
    await login(email, password);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
