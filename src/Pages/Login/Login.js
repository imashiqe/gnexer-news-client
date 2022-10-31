import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';



const Login = () => {
    
    const {signIn} = useContext(AuthContext);
   
    const navigate = useNavigate();

   const handleSubmit  = event => {
     event.preventDefault();
     const form = event.target;
     const email = form.email.value;
     const password = form.password.value;
     signIn(email, password)
     .then(result => {
       const user = result.user;
       console.log(user)
       form.reset();
       navigate('/')
     })

     .catch(error => console.error(error))
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
          We'll never share your email with anyone else.
        </Form.Text>
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
      <Button variant="primary" name='submit' type="submit">
        Submit
      </Button>
    </Form>
        </div>
    );
};

export default Login;