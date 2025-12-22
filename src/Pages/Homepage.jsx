import React from 'react';
import FoodList from '../components/FoodCard';
import HeroCarousel from '../components/HeroCarousel';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import TrustBanner from '../components/TrustBanner';

const Homepage = () => {
  return (
    <>
      <HeroCarousel />
      <AboutUs />
      <TrustBanner />
      <FoodList />
      <Contact />
    </>
  );
};

export default Homepage;
