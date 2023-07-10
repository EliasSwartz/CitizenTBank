import React from 'react';
import "./Location.css"

function Location() {
  return (
    <div>
        <div className="wtfu-container">
            {/* <h5 className="wtfu-title">Get Directions</h5> */}
            <div className="wtfu-content">
                <img className="wtfu-location-image" src="images/bankloc.png" alt="Location" />
                <div className="wtfu-text">
                    <h1 className="wtfu-header">Come Visit Us!</h1>
                    <h4 className='add1'>Birmingham</h4>
                    <h5 className='add2'>1700 3rd Avenue North,</h5>
                    <h5 className='add3'>Birmingham, Alabama 35203</h5>
                    <h5 className='add4'>United States</h5>
                    <h4 className='servhours1'>LOBBY SERVICES</h4>
                    <h5 className='servhours2'>Monday         9:00 AM - 4:00 PM</h5>
                    <h5 className='servhours3'>Monday         9:00 AM - 4:00 PM</h5>
                    <h5 className='servhours4'>Monday         9:00 AM - 4:00 PM</h5>
                    <h5 className='servhours5'>Monday         9:00 AM - 4:00 PM</h5>
                    <h5 className='servhours6'>Monday         9:00 AM - 4:00 PM</h5>
                </div>
                <img className="wtfu-logo-image" src="images/office.jpg" alt="symbol" />
            </div>
        </div> 
    </div>
  );
}

export default Location;