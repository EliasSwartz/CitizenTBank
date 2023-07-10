import React from 'react';
import './Story.css';
import { Button } from './Button';

const Story = () => {
  return (
    <div className='Story'>
      <div className='Customer-Story-Container'>
        <img src='images/Imani.jpg' alt="black business woman" className='Customer-Story-Image' />
        <div className='Customer-Testimonial-Section'>
          <h1 className='Customer-Testimonial-Header'>Our Black Success Story: Here's Imani!</h1>
          <p className='Customer-Testimonial-Text'>Imani came to us with a dream of expanding her own business, 
            and now with 3 locations across Birmingham, Imani is living her dream. 
            Learn about Citizen's Trust Bank turns its customer's dreams
            into reality, click below to find out how to take the next 
            step in building your future.</p>
          <Button buttonStyle='btn--outline' className='Customer-Testimonial-Button'>Take The Next Step</Button>
        </div>
      </div>
    </div>
  );
};

export default Story;