import React, { useEffect, useState } from 'react';
import { FirebaseAuthContext } from './FirebaseAuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase.init';

const FirebaseAuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const createUser = ( email, password) =>{
        return createUserWithEmailAndPassword(auth,email, password);
    }

    const signInUser = ( email, password ) => {
      return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        return signOut(auth);
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
       const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            
        console.log('onAuthstatechange fired=>', currentUser);
        setUser(currentUser);
                
            

            return () =>{
                unSubscribe()
            }
        })
    },[])
    
    const userInfo = {      
        createUser,
        signInUser,
        user,
        signOutUser
    }

    return (
        <FirebaseAuthContext value={userInfo}>
             {children}
        </FirebaseAuthContext>
    );
};

export default FirebaseAuthProvider;