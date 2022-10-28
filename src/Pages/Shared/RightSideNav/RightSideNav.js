import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FaGoogle , FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaDiscord} from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';

const RightSideNav = () => {
    return (
        <div>
           <ButtonGroup vertical>
      

             <Button className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle>Login With  Google</Button>
              <Button variant="outline-dark"><FaGithub></FaGithub>Login With Github</Button>

     
          </ButtonGroup>

          <div className='pt-3'>
             <h5>Find Us On</h5>

             <ListGroup>
      <ListGroup.Item className='mb-2'><FaFacebook></FaFacebook>Facebook</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaWhatsapp></FaWhatsapp>WhatsApp</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
      <ListGroup.Item className='mb-2'><FaDiscord></FaDiscord>Discord</ListGroup.Item>
      <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
          </div>

          <div>
          <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </div>
        </div>
    );
};

export default RightSideNav;