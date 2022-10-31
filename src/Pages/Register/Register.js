import React, { useContext } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
   const {createUser, updateUserProfile, verifyEmail} = useContext(AuthContext);

   const handleSubmit = event => {
     event.preventDefault();
     const form = event.target;
     const name = form.name.value;
     const photoURL = form.photoURL.value;
     const email = form.email.value;
     const password = form.password.value;
    //  console.log(name, photoURL, email, password);

     createUser(email,password)
     .then(result => {
      const user = result.user;
      console.log(user);
      setError('');
      form.reset();
      handleUpdateUserProfile(name, photoURL);
      handleEmailVerification();
      toast.success('Please verify your email address ')
     })
     .catch(e => {
      console.error(e);
      setError(e.message);
     });
 
   }
   
   const handleUpdateUserProfile = (name, photoURL) => {
      const profile = {
         displayName: name,
         photoURL: photoURL
      }
      updateUserProfile(profile)
      .then(() => {})
      .catch(error => console.error(error));
   }

   const handleEmailVerification = () => {
       verifyEmail()
      .then(() =>{})
      .catch(error => console.error(error));
   }

   const handleAccepted =   event => {
     setAccepted(event.target.checked)
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
        <Form.Check 
        type="checkbox" 
        onClick={handleAccepted}
        label={<>Accept <Link to="/terms"> Terms and  Conditions</Link></>} />
      </Form.Group>
      
      <Button variant="primary" type="submit" 
      disabled={!accepted}>
        Register
      </Button>
    </Form>
        </div>
    );
};

export default Register;