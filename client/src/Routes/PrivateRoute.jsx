import { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Auth/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext)
    const location = useLocation();
    if (loading) {
        return <progress className="progress my-24 w-56 bg-red-500 text-red-700"></progress>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;