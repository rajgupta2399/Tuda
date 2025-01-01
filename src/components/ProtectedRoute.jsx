import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

function ProtectedRoute({ children }) {
  const { user } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      toast.error('Please register or login first');
    }
  }, [user, location.pathname]);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;