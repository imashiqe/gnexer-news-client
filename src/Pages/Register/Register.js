import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {
    const [error, setError] = useState('')
   const {createUser} = useContext(AuthContext);

   const handleSubmit = event => {
     event.preventDefault();
     const form = event.target;
     const name = form.name.value;
     const photoURL = form.photoURL.value;
     const email = form.email.value;
     const password = form.password.value;
     console.log(name, photoURL, email, password);

     createUser(email,password)
     .then(result => {
      const user = result.user;
      console.log(user);
      setError('');
      form.reset();
     })
     .catch(e => {
      console.error(e);
      setError(e.message);
     });
 
   }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control name='name' type="text" placeholder="Enter Your Name" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>photo URL</Form.Label>
        <Form.Control type="text" placeholder="Enter Your  Photo Url" name='photoURL'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Text className="text-danger">
          {error}
        </Form.Text>
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    );
};

export default Register;