import React, { useState } from "react";
import "./slideshow.css";
import slide1 from '../../assets/slide1.webp';
import slide2 from '../../assets/slide2.webp';
import headerPic from '../../assets/headerPic.jpg'




const Slideshow = () => {
  const slides = [
    {
      id: 1,
      src: slide1, 
      alt: "Slide 1",
    },
    {
      id: 2,
      src: slide2, 
      alt: "Slide 2",
    }
    
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    
    <div className="slideshow-container">
      <button className="prev" onClick={goToPreviousSlide}>
        &#10094;
      </button>
      <div className="slide">
        <img
          src={slides[currentSlide].src}
          alt={slides[currentSlide].alt}
        />
      </div>
      <button className="next" onClick={goToNextSlide}>
        &#10095;
      </button>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${
              index === currentSlide ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
      
    </div>
    
  );
};

export default Slideshow;
