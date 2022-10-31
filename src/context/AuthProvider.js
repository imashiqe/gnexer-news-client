import React from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


    export  const AuthContext = createContext();
    const auth = getAuth(app);
    const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

     useEffect( () =>{
    const unsubscribe =   onAuthStateChanged(auth, (currentUser) => {
        console.log('User Inside State Change', currentUser);
        setUser(currentUser);
        setLoading(false);
    });


    return () =>{
        unsubscribe();
    }

  }, [])
    
   const providerLogin  = ( provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
   }

   const createUser = (email,password) => {
     setLoading(true);
     return createUserWithEmailAndPassword(auth,email,password)
   }

   const signIn = (email, password) => {
    setLoading(true);
     return signInWithEmailAndPassword(auth, email, password)
   }

   const updateUserProfile = (profile) => {
     return updateProfile(auth.currentUser, profile);
   }

   const verifyEmail = () => {
      return sendEmailVerification(auth.currentUser);
   }

   const authInfo = {
    user, 
    providerLogin,
    loading,
    updateUserProfile,
    verifyEmail,
    logOut, 
    createUser,
    setLoading,
    signIn
};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;