
import React from 'react'
import '../../App.css';
import HeroSection from '../HeroSection'
import Cards from '../Cards';
import Footer from '../Footer';
import Location from '../Location';
import Story from '../Story';


function Home () {
    return (
        <>
            <HeroSection />
            <Cards />
            <Story />
            <Location />
            <Footer />
            
        </>
    )
}


export default Home;