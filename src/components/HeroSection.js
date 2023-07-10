import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import './FloatingButton'
import FloatingButton from './FloatingButton';


function HeroSection () {
    return (
        <div className='hero-container'>
            <video src="videos/video-1.mp4" 
            autoPlay loop muted />
            <h1>
                BIRMINGHAM
            </h1>
            <p>The Bank the Citizens Trust</p>
            <div className='hero-btn'>
                <Button className='btns' buttonStyle='btn--outline' 
                buttonSize='btn--larger'>
                    GET STARTED
                </Button>
                <Button className='btns' buttonStyle='btn--primary'
                buttonSize='btn--larger'>
                    COMMUNITY <i className='far fa-play-circle'/>
                </Button>
            </div>
            <FloatingButton />
        </div>
    )
}

export default HeroSection; 