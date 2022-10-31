import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


    export  const AuthContext = createContext();
    const auth = getAuth(app);
    const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const logOut = () => {
        return signOut(auth);
    }

     useEffect( () =>{
    const unsubscribe =   onAuthStateChanged(auth, (currentUser) => {
        console.log('User Inside State Change', currentUser);
        setUser(currentUser)
    });

    return () =>{
        unsubscribe();
    }

  }, [])
    
   const providerLogin  = ( provider) => {
    return signInWithPopup(auth, provider);
   }

   const createUser = (email,password) => {
     return createUserWithEmailAndPassword(auth,email,password)
   }

   const signIn = (email, password) => {
     return signInWithEmailAndPassword(auth, email, password)
   }

   const authInfo = {user, providerLogin,logOut, createUser, signIn};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;