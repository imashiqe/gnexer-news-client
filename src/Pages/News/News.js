import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import useTitle from '../../hooks/useTitle';

const News = () => {
    const news = useLoaderData();
    useTitle("News Details");
    const {title,details,author,published_date,name,image_url,category_id} = news;
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
          
      <Card.Body className='d-flex  justify-content-between'>
            <div>
            <Link to='/'>Back to Home</Link>
            </div>

            <div>
                <Link to={`/category/${category_id}`}><button>View All</button></Link>
              
            </div>
          
      </Card.Body>
    </Card>
        </div>
    );
};

export default News;