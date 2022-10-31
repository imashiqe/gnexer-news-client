import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
       return   <Spinner animation="border" role="status">
       <span className="visually-hidden">Loading...</span>
     </Spinner>
    }

    if(!user){
       return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
      return children;
};

export default PrivateRoute;


/*
1. only allow  authenticated user  to visit the  route
2.
3. Redirect user to  the  route they  wanted   to  go  before login
*/