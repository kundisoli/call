import React from "react";
import Slider from "react-slick";
import IT from "../../assets/IT.png";
import HR from "../../assets/HR.jpg";  // Fixed the path
import RND from "../../assets/RND.png";

import './Department.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const departments = [
  {
    name: "IT",
    description: "Managing technology and providing technical support across the company.",
    imgSrc: IT,  // Use the imported image variable
  },
  {
    name: "HR",
    description: "Ensuring employee welfare, recruitment, and training.",
    imgSrc: HR,  // Use the imported image variable
  },
  {
    name: "Research & Development",
    description: "Innovating and creating new products for the future.",
    imgSrc: RND,  // Use the imported image variable
  },
];

function Department() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">Our Departments</h2>
      <Slider {...settings}>
        {departments.map((department, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={department.imgSrc}
              alt={department.name}
              className="carousel-image"
            />
            <div className="carousel-text">
              <h3>{department.name}</h3>
              <p>{department.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Department;
