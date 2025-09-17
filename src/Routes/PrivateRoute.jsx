import React, { use } from 'react';
import { FirebaseAuthContext } from '../components/contexts/FirebaseAuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ( { children } ) => {
    const {user} = use(FirebaseAuthContext)

    if(!user){
        return <Navigate to="/login"></Navigate>
    }

     return children
    
};
    

export default PrivateRoute;