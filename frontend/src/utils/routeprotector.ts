import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RouteProtector = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token'); 
    const currentPath = window.location.pathname;

    if (!token && currentPath !== '/signup') {
      navigate('/signin'); // Redirect to /signin if not logged in
    }
  }, [navigate]);

  return children;
};

export default RouteProtector;