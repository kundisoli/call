import React from 'react';
// import { Link } from 'react-router-dom';
import './HomePage.css'; 
import CustomerSupport  from '../../assets/headset.png';
import TechnicalAssistance from '../../assets/sheet.png';

const HomePage = () => {
  return (
    <div className="home-page">
    
      <section className="hero-section">
        <div className="hero-content">
       
          <h1>Welcome to ConnectHub Call Center</h1>
          <p>Connecting you to solutions, one call at a time.</p>
          {/* <Link to="/contact" className="cta-button">Contact Us Now</Link> */}
        </div>
      </section>

     
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service-item">
         
            <h3>Customer Support</h3>
            <p>24/7 customer support to assist your clients with their inquiries.</p>
          </div>
          <div className="service-item">
           
            <h3>Technical Assistance</h3>
            <p>Providing fast and reliable solutions for technical issues.</p>
          </div>
          <div className="service-item">
            <img src={TechnicalAssistance} title="customer service" />
            <h3>Live Chat Support</h3>
            <p>Instant live chat options for seamless customer communication.</p>
          </div>
        </div>
      </section>

      <section className="why-choose-us-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Highly trained and experienced agents</li>
          <li>Cutting-edge technology for maximum efficiency</li>
          <li>Customer-first approach to every call</li>
          <li>Personalized solutions tailored to your needs</li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
