import React from 'react';
import Slider from 'react-slick';
import ExpenseTracker from './ExpenseTracker';
import Features from './Features';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto p-10 max-w-6xl">
      <Slider {...settings}>
        <div className="carousel-slide transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden">
          <ExpenseTracker />
        </div>
        <div className="carousel-slide transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden">
          <Features />
        </div>
        <div className="carousel-slide transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden">
          <img src="/path/to/image1.jpg" alt="Image 1" className="carousel-image w-full h-auto max-h-96 object-cover rounded-lg" />
        </div>
        <div className="carousel-slide transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden">
          <img src="/path/to/image2.jpg" alt="Image 2" className="carousel-image w-full h-auto max-h-96 object-cover rounded-lg" />
        </div>
        <div className="carousel-slide transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden">
          <img src="/path/to/image3.jpg" alt="Image 3" className="carousel-image w-full h-auto max-h-96 object-cover rounded-lg" />
        </div>
        <div className="carousel-slide transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden">
          <img src="/path/to/image4.jpg" alt="Image 4" className="carousel-image w-full h-auto max-h-96 object-cover rounded-lg" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
