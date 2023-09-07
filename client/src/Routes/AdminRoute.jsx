import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Auth/AuthProvider';
import Loader from '../Components/Loader/Loader';
import useAdmin from '../Hooks/AdminHook/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();
    const [isAdmin,isAdminLoading] = useAdmin()

    if (loading || isAdminLoading) {
        return <Loader /> ;
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
