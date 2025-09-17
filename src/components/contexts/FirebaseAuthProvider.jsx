import React, { useEffect, useState } from 'react';
import { FirebaseAuthContext } from './FirebaseAuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.init';

const FirebaseAuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const createUser = ( email, password) =>{
        return createUserWithEmailAndPassword(auth,email, password);
    }

    const signInUser = ( email, password ) => {
      return signInWithEmailAndPassword(auth, email, password)
    }

    // onAuthStateChanged(auth, (currentUser) =>{
    //     if(currentUser){
    //         console.log('has current user', currentUser)
    //     }
    //     else{
    //         console.log('current user', currentUser)
    //     }
    // })

    useEffect(() =>{
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            if(currentUser){
                console.log('has current user', currentUser)
                setUser(currentUser)
            }

            return () =>{
                unSubscribe()
            }
        })
    },[])
    
    const userInfo = {
        
        createUser,
        signInUser,
        user

    }

    return (
        <FirebaseAuthContext value={userInfo}>
             {children}
        </FirebaseAuthContext>
    );
};

export default FirebaseAuthProvider;