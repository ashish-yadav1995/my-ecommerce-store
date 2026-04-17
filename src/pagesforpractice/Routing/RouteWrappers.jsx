import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

// Logic 1: Sirf unke liye jo login NAHI hain (Login/Register)
export const PublicRoute = () => {
  const { user } = useAuth();
  return !user ? <Outlet /> : <Navigate to="/about" replace />;
};

// Logic 2: Private/Protected (User aur Admin ke liye)
export const PrivateRoute = ({ allowedRoles }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" replace />;
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};