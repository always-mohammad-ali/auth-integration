import React from 'react';
import { FirebaseAuthContext } from './FirebaseAuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.init';

const FirebaseAuthProvider = ({ children }) => {

    const createUser = ( email, password) =>{
        return createUserWithEmailAndPassword(auth,email, password)
    }
    
    const userInfo = {
        createUser
    }

    return (
        <FirebaseAuthContext value={userInfo}>
             {children}
        </FirebaseAuthContext>
    );
};

export default FirebaseAuthProvider;