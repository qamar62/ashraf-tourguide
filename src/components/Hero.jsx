import React from 'react';
import { motion } from 'framer-motion';

const HeroSVG = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 800 600" 
    className="w-full max-w-md mx-auto"
  >
    <path 
      fill="#2b932b" 
      d="M400 100c-150 0-250 100-250 250s100 250 250 250 250-100 250-250-100-250-250-250z"
    />
    <path 
      fill="#ff9800" 
      d="M400 200c-82.84 0-150 67.16-150 150s67.16 150 150 150 150-67.16 150-150-67.16-150-150-150z"
    />
    <circle cx="400" cy="350" r="100" fill="#fff" />
    <path 
      fill="#2b932b" 
      d="M400 250c-55.23 0-100 44.77-100 100s44.77 100 100 100 100-44.77 100-100-44.77-100-100-100zm0 150c-27.61 0-50-22.39-50-50s22.39-50 50-50 50 22.39 50 50-22.39 50-50 50z"
    />
    <text 
      x="400" 
      y="550" 
      textAnchor="middle" 
      fontSize="24" 
      fill="#2b932b"
    >
      Ashraf Tours
    </text>
  </svg>
);

const Hero = () => {
  return (
    <div 
      id="home"
      className="hero-section min-h-screen flex items-center justify-center text-white relative py-16"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-amber-300"
          >
            Explore Dubai & Abu Dhabi Now
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8 text-white"
          >
            8 Years of Licensed Tour Guiding Experience in UAE
            <br />
            Discover the Magic of Emirates with Ashraf
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl"
          >
            Book Your Guide Or Tour
          </motion.button>
        </div>
        <div className="hidden md:block">
          <HeroSVG />
        </div>
      </div>
    </div>
  );
};

export default Hero;
