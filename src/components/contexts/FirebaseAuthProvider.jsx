import React from 'react';
import { FirebaseAuthContext } from './FirebaseAuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.init';

const FirebaseAuthProvider = ({ children }) => {

    const createUser = ( email, password) =>{
        return createUserWithEmailAndPassword(auth,email, password);
    }

    const signInUser = ( email, password ) => {
      return signInWithEmailAndPassword(auth, email, password)
    }

    onAuthStateChanged(auth, (currentUser) =>{
        if(currentUser){
            console.log('has current user', currentUser)
        }
        else{
            console.log('current user', currentUser)
        }
    })
    
    const userInfo = {
        createUser,
        signInUser

    }

    return (
        <FirebaseAuthContext value={userInfo}>
             {children}
        </FirebaseAuthContext>
    );
};

export default FirebaseAuthProvider;