import React from 'react';
import { createContext } from 'react';
import {getAuth, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export  const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);

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

   const authInfo = {user, providerLogin};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;