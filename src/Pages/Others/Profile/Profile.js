import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/AuthProvider';

const Profile = () => {
    const {user} = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const photoURLRef = useRef(user.photoURL);
    
    const handleSubmit = event => {
        event.preventDefault();
        console.log(photoURLRef);

    }

    const  handleNameChange = event => {
        setName(event.target.value.value)
    }

    return (
        <div>
           <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>User Name</Form.Label>
        <Form.Control onChange={handleNameChange} defaultValue={name} type="text" placeholder="Name" />
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Photo Url</Form.Label>
        <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="Photo Url" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> 
        </div>
    );
};

export default Profile;