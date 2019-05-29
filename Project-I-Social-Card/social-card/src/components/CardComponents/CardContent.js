import React from 'react';
import './Card.css';

const CardContent = () => {
    return (
        <div className='card-content-wrapper'>
          <h1 className='card-content-header'>
            Get Started with React
          </h1>
          <div className='card-content-copy'>
            React makes it painless to create interactive UIs.  
            Design simple views for each state in your application. 
          </div>
      </div>

    )
}
export default CardContent;
