import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  
  // Still checking auth? Show loading
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }
  
  // Not authenticated? Redirect to signin
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }
  
  // Authenticated? Show the protected page
  return children;
}

export default ProtectedRoute;