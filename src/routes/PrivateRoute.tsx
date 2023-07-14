import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface iProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: iProps) {
  const { user, isLoading } = useAppSelector((state) => state?.user);
  const { pathname } = useLocation();
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (!user.email && !isLoading) {
    // return <Navigate to="/login" state={{ path: pathname }} replace />;
    return <Navigate to="/login" state={{ path: pathname }} replace={true} />;
  }
  return children;
}
