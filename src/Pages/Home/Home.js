import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';
import Carousel from 'react-bootstrap/Carousel';
import banner01 from  '../../components/assets/image/slide01.jpg'
import banner02 from  '../../components/assets/image/slide02.jpg'
import banner03 from  '../../components/assets/image/slide03.jpg'
import useTitle from '../../hooks/useTitle';

const Home = () => {
    const allnews = useLoaderData();
   useTitle('Home')
    return (
        <div>
             <div>
             <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={banner01}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={banner02}
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
          src={banner03}
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
            <h2>Gnexer News : {allnews.length}</h2>
            {
              allnews.map(news => <NewsSummaryCard 
                key={news._id}
                news={news}
              ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;