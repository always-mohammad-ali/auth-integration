import React, { use } from 'react';
import { FirebaseAuthContext } from '../components/contexts/FirebaseAuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ( { children } ) => {
    const {user, loading} = use(FirebaseAuthContext);
    const location = useLocation();
    console.log(location)

    if(loading){
      return  <span className="loading loading-infinity loading-xl"></span>

    }

    if(!user){
        return <Navigate state={location?.pathname} to="/login"></Navigate>
    }

     return children
    
}; 
    

export default PrivateRoute;