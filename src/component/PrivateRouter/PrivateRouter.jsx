import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthRouter'; // Asegúrate de importar desde la ubicación correcta

export const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const token = localStorage.getItem('token');

  if (!isLoggedIn || !token) {
    return <Navigate to="/" replace />;
  }

  return children;
};