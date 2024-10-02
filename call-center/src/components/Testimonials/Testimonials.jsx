import React, { useRef } from 'react';
import './Testimonial.css';
import next_icon from '../../assets/right-arrow.png';
import back_icon from '../../assets/left-arrows.png';
import test from '../../assets/pexels-adrienn-638530-1542085.jpg'; // Update paths as necessary
import test2 from '../../assets/pexels-andrewpersonaltraining-697509.jpg';
import test3 from '../../assets/pexels-juanico-2589653.jpg';
import test4 from '../../assets/pexels-olly-774909.jpg';
import test5 from '../../assets/pexels-nkhajotia-1516680.jpg';

const Testimonials = () => {
    const slider = useRef(); 

    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    };

    return (
        <div className='testimonial'>
            <img src={next_icon} className='next-btn' alt="Next" onClick={slideForward} />  
            <img src={back_icon} className='back-btn' alt="Back" onClick={slideBackward} /> 
                
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={test} alt="Testimonial 1" />
                                <div>
                                    <h2>John Doe</h2>
                                </div>
                                <p>"I appreciate how the call center staff were attentive and addressed all my concerns promptly. Their professionalism made a significant difference in my experience!"</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={test2} alt="Testimonial 2" />
                                <div>
                                    <h2>Brian M.</h2>
                                </div>
                                <p>"The support I received was outstanding. They resolved my issue quickly and were very friendly throughout the process."</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={test3} alt="Testimonial 3" />
                                <div>
                                    <h2>T. Palawman</h2>
                                </div>
                                <p>"I've never had such a smooth experience with a call center. The agents were knowledgeable and helped me every step of the way!"</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={test4} alt="Testimonial 4" />
                                <div>
                                    <h2>R. Lynch</h2>
                                </div>
                                <p>"Thanks to the call center team, my concerns were addressed in no time. Their dedication to customer satisfaction is evident!"</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={test5} alt="Testimonial 5" />
                                <div>
                                    <h2>W. Smith</h2>
                                </div>
                                <p>"I was pleasantly surprised by the level of service I received. The staff were eager to help, and I felt valued as a customer."</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>    
        </div>
    );
};

export default Testimonials;
