import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Step 1: Create the context
const AuthContext = createContext(null);

// Step 2: Custom hook to use auth (we'll use this in components)
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

// Step 3: Provider component (wraps your entire app)
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Function to check if user is authenticated
  const checkAuth = async () => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/me', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        // Token invalid
        localStorage.removeItem('token');
        setUser(null);
        setLoading(false);
        return;
      }

      const data = await response.json();
      setUser(data.user);
      setLoading(false);
      
    } catch (error) {
      console.error('Auth check failed:', error);
      localStorage.removeItem('token');
      setUser(null);
      setLoading(false);
    }
  };

  // Function to login
  const login = (token) => {
    localStorage.setItem('token', token);
    checkAuth(); // Fetch user data after login
  };

  // Function to logout
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/signin');
  };

  // Check auth on mount
  useEffect(() => {
    checkAuth();
  }, []);

  // What we provide to all components
  const value = {
    user,
    isAuthenticated: !!user, // true if user exists
    loading,
    login,
    logout,
    checkAuth
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};