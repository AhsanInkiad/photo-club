import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} =useContext(AuthContext);
    const location = useLocation();
    if(user?.email){
        return children;
    }

    if(loading) {
        return <progress className="progress text-white bg-white w-56"></progress>
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>;

};

export default PrivateRoutes;