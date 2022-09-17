import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../context/Context'

const PrivateRoutes = () => {
    const { currentUser } = useContext(UserContext);
    let auth = currentUser;
    return (
        auth ? <Outlet /> : <Navigate to="/" />
    )
}

export default PrivateRoutes;