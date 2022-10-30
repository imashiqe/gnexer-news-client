import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle , FaGithub, FaFacebook, FaWhatsapp, FaTwitter, FaDiscord} from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';

import slide1 from '../../../components/assets/image/slide1.jpg';
import slide2 from '../../../components/assets/image/slide2.jpg';
import slide3 from '../../../components/assets/image/slide3.jpg';
import { useContext } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../../context/AuthProvider';

const RightSideNav = () => {
    const {providerLogin} = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();


   const handleGoogleSignIn = () => {
              providerLogin(googleProvider)
              .then(result => {
                 const user = result.user;
                 console.log(user);
              })
              .catch(error => console.error(error))
   }

    return (
        <div>
           <ButtonGroup vertical>
      

             <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle>Login With  Google</Button>
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
          src={slide1}
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide2}
          alt="Second slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide3}
          alt="Third slide"
        />

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </div>
        </div>
    );
};

export default RightSideNav;