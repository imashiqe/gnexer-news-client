import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import LeftSideNav from './LeftSideNav/LeftSideNav';
import Button from 'react-bootstrap/Button';
const Header = () => {
  const  {user,logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(() => {})
    .catch(error => console.error(error))
  }

    return (
        <div>
            <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand ><Link to='/'>Gnexer News</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
           <Nav.Link href="#deets">
            
              {
                user?.uid ? 
                <>
                       <span>{user?.displayName}</span>

                       <Button className="px-2" variant="outline-danger" onClick={handleLogOut }>LogOut</Button>
                </>
          
                :
                <>
                  <Button className='me-2' variant="outline-info"><Link to='/login'>Login</Link></Button>
                  <Button variant="outline-info"><Link to='/register'>Register</Link></Button>
              
                 
                  
                </>
              }
            
            </Nav.Link>
           <Nav.Link href="#">
            {             
              user?.photoURL ?
               <Image
                style={{height: '40px'}}
                roundedCircle
                src={user.photoURL}
               ></Image>
               :
               <FaUser></FaUser>
             } 
              
           </Nav.Link>
           
          </Nav>

           <div className='d-lg-none'>
           <LeftSideNav></LeftSideNav>
           </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;