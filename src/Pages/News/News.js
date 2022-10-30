import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const News = () => {
    const news = useLoaderData();
    const {title,details,author,published_date,name,image_url} = news;
    return (
        <div>
            <Card >
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
         <div>
            <h6>Author : {author.name}</h6>
            <h6>Published : {author.published_date}</h6>
         </div>
        <Card.Text>
           {details}
        </Card.Text>
      </Card.Body>
          
      <Card.Body>
           <Link to='/'>Back to Home</Link>
      </Card.Body>
    </Card>
        </div>
    );
};

export default News;