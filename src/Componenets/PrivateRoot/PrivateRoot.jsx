import React, { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../LoaderPage/Loader';

const PrivateRoot = ({children}) => {
    const {user,loader} = useContext(authContext)
    const location = useLocation()
 
    if(loader){
        return <Loader></Loader>;
    }
    if(user){
        return children;
    }
    return (
        <div>
           <Navigate state={location.pathname} to="/login"></Navigate>
        </div>
    );
};

export default PrivateRoot;