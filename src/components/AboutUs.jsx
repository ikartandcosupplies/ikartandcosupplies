import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/AboutUs.css';
import gallary1 from '../assets/images/gallary1.jpg';
import gallary2 from '../assets/images/gallary2.jpg';
import gallary3 from '../assets/images/gallary3.jpg';
import gallary4 from '../assets/images/gallary4.jpg';   

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* LEFT SIDE: Image Collage */}
        <div className="about-images">
          <div className="image-grid">
            <img
              src={gallary1}
              alt="Carpenter working"
              className="img-tall"
            />
            <img
              src={gallary2}
              alt="Wood texture detail"
              className="img-wide"
            />
            <img
              src={gallary3}
              alt="Modern interior"
              className="img-small"
            />
            <img
              src={gallary4}
              alt="Workshop tools"
              className="img-small"
            />
              
          </div>
        </div>

        {/* RIGHT SIDE: Content */}
        <div className="about-content">
          <h4 className="sub-title">Who We Are</h4>

          <p className="description">
            ikartandco is a professional wood procurement and supply company based in Andhra Pradesh,
            operating across Andhra Pradesh, Telangana, Karnataka, and Tamil Nadu.
          </p>

          <p className="description">
            We purchase plantation wood from farmers, participate in government and private auctions,
            and supply high-quality raw wood to plywood manufacturers, paper mills, and construction companies across India.
          </p>

          <p className="description">
            Our operations are built on transparency, consistency, and long-term trust. With strong field teams and large-scale logistics capabilities,
            ikartandco ensures smooth procurement, efficient transport, and reliable year-round supply to industries.
          </p>

          {/* Redirect Button */}
          <button
            className="about-btn"
            onClick={() => navigate('/aboutus')}
          >
            Learn More About Us
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
