import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const NewsSummaryCard = ({news}) => {
    const {_id,title,total_view,rating,author,details,image_url} = news;
    return (
        <div>
           <Card className='mb-5'>
      <Card.Header className='d-flex justify-content-between align-items-center'>
           <div className='d-flex'>
                <img  className='rounded' style={{height:'60px'}} src={author.img}  />

                <div className='px-2'>
                     <p className='mb-0'>{author.name}</p>
                     <p>{author.published_date}</p>
                </div>
               
           </div>
           <div>
             <FaRegBookmark className='me-2'></FaRegBookmark>
             <FaShareAlt></FaShareAlt>
           </div>
      </Card.Header>
      <Card.Body>
      <Card.Img variant="top" src={image_url} />
        <Card.Title>
            <h3>{title}</h3>
        </Card.Title>
        <Card.Text>
          {details.length > 250 ? 
          <p>{details.slice(0,250) + '...'} <Link  to={`/news/${_id}`}>Read More</Link></p>  
          :
          <p>{details}</p>
        }
        </Card.Text>
      
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        
      <div>
      <FaStar className='text-warning me-2'></FaStar>
      <span >{rating?.number}</span>
      </div>
      
      <div>
        <FaEye className='me-2'></FaEye>
         <span>
             {total_view}
         </span>
      </div>
      </Card.Footer>
    </Card>
        </div>
    );
};

export default NewsSummaryCard;