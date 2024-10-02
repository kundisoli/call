import React from 'react'
import './About.css'
import about_img from '../../assets/call-center-service.png'

const About = () => {
  return (
    <div className='about'>
       
       <div className="about-left">
            <img src={about_img} alt="" className='about-img' />  
                
        </div> 
        <div className="about-right">
            <h3>The best customer service experiences start with live support</h3>
                 <p>                 Connecting with consumers is the key to growing your brand, and outsourced customer service through SAS lets you help your customers 24/7/365. With year-round coverage and a complete suite of call center services at your disposal, you’ll never miss another call or an opportunity to close a sale.</p>
                    <button>Read More</button>
        </div>

    </div>
      
  )
}

export default About
