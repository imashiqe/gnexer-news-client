import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {
    const allnews = useLoaderData();

    return (
        <div>
             <div>
             <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fiaeaorg%2Fstatus%2F1539910061899689984&psig=AOvVaw3bNmLIgaawcCTwGS3FNqBd&ust=1667228273783000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCOjq-76biPsCFQAAAAAdAAAAABAJ"
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