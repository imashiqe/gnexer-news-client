import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';



const Login = () => {
    const [error, setError] = useState('');
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

   const handleSubmit  = event => {
     event.preventDefault();
     const form = event.target;
     const email = form.email.value;
     const password = form.password.value;

     signIn(email, password)
     .then(result => {
       const user = result.user;
       console.log(user);
       form.reset();
       setError('');
       navigate(from, {replace: true})
     })

     .catch(error => {
      console.error(error)
       setError(error.message);
     } )
   }
     
    return (
        <div>
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  name='email' placeholder="Enter email" required />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Text className="text-danger">
         {error}
        </Form.Text>
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
      <Button variant="primary"  type="submit">
        Submit
      </Button>
    </Form>
        </div>
    );
};

export default Login; 