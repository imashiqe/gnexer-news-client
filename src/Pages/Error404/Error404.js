import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form, Link } from 'react-router-dom';
import errorimg  from '../././../components/assets/image/error404.png';
import './Error404.css';

const Error404 = () => {
    return (
        <div>
            <Header></Header>
        <div className='text-center main-sec'>
          <Container >
          <Row>
        <Col sm={8}>
          <h2 className='error'>
            404
          </h2>

          <h3>
            Page Not Found
          </h3>

          <Link to='/'>Return Back</Link>
        </Col>
        <Col sm={4} className='px-5'>
         <img src={errorimg}/>
        </Col>
         </Row>
          </Container>
        </div>
       
       

        </div>
    );
};

export default Error404;