import React, { useState, useEffect } from 'react';
import '../assets/css/HeroCarousel.css';
import building from '../assets/images/raw.jpeg';
import living from '../assets/images/living.jpg';
import startup from '../assets/images/startup.jpeg';
import firstwood from '../assets/images/firstwood.jpg';
import { useNavigate } from 'react-router-dom';


const slides = [
  {
    // Image: Carpenter working / Workshop vibe
    bg: firstwood,
    title: "Masterful Craftsmanship",
    desc: "Experience the art of wood supply with premium-grade materials engineered to meet modern manufacturing standards.",
    btnText: "Explore",
    btnColor: "#d35400", 
    link: "/aboutus"
  },
  {
    // Image: Modern Wood Interior / Furniture
    bg: living,
    title: "Timeless Wood Supply",
    desc: "Supplying sustainable, premium-grade wood materials that support plywood, furniture, and paper manufacturing at scale.",
    btnText: "Sourcing",
    btnColor: "#d35400", // Brownish/Taupe
    link: "/procurement"
  },
  {
    // Image: Close up raw wood texture / Nature
    bg: building,
    title: "Premium Raw Materials",
    desc: "Sourced from the finest forests, our timber ensures durability, distinct grain patterns, and natural beauty.",
    btnText: "Our Materials",
    btnColor: "#d35400", 
    link: "/supply"
  },
  {
    bg: startup,
    title: "Where Ambition Meets Support",
    desc: "We Don’t Just Fund Ideas – We Nurture Them",
    btnText: "Startup",
    btnColor: "#d35400",  // warm wood tone
    link: "/startup"
  }
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();


  // Auto-play logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrent(index);

  return (
    <div className="hero-carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? 'active' : ''}`}
        >
          <div
            className="slide-bg"
            style={{ backgroundImage: `url(${slide.bg})` }}
          />

          <div className="hero-overlay"></div>

          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-desc">{slide.desc}</p>
              <button
                className="hero-btn"
                style={{ '--btn-color': slide.btnColor }}
                onClick={() => navigate(slide.link)}
              >
                {slide.btnText}
              </button>

            </div>
          </div>
        </div>
      ))}

      {/* Modern Line Indicators */}
      <div className="indicators-container">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`indicator-line ${index === current ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          >
            <div className="progress-bar"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;