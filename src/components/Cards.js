import React from 'react'
import CardItem from './CardItem'
import './Cards.css';


function Cards() {
  return (
    <div className='cards'>
        <h1>HOW WE ARE HELPING BIRMINGHAM</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                     src="images/blackbusiness1.jpg"
                     text="We invested 20.1 million in Minority businesses, come see Marsha's story, and take your business to the next level" label='Business Support'
                     path='/services'
                     />
                    <CardItem
                     src="images/blackstudent.jpg"
                     text="We have educated 15k students with our FIT program, join Josh in learning how to build generational wealth" label='Financial Literacy'
                     path='/services'
                     />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                     src="images/calculator.jpg"
                     text="Mortgage Calculator" label='Tools'
                     path='/services'
                     />
                    <CardItem
                     src="images/ai.jpg"
                     text="Ask About Our New AI Services" label='Tools'
                     path='/services'
                     />
                    <CardItem
                     src="images/Bwc.jpg"
                     text="Learn about our Local Partnerships" label='News'
                     path='/services'
                     />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards;