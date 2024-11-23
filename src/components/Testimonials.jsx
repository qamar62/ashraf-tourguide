import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { 
  FaQuoteLeft, 
  FaStar, 
  FaUserTie, 
  FaGlobeAsia, 
  FaMapMarkedAlt 
} from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: 'Michael Thompson',
    image: '/testimonial1.jpg',
    text: 'Ashraf made our Dubai tour absolutely unforgettable. His knowledge of the city and its history is incredible!',
    rating: 5,
    location: 'New York, USA',
    tourType: 'Dubai City Tour'
  },
  {
    id: 2,
    name: 'Elena Rodriguez',
    image: '/testimonial2.jpg',
    text: 'The desert safari was a once-in-a-lifetime experience. Ashraf ensured we had the most amazing time!',
    rating: 5,
    location: 'Madrid, Spain',
    tourType: 'Desert Safari'
  },
  {
    id: 3,
    name: 'Raj Patel',
    image: '/testimonial3.jpg',
    text: 'Professional, knowledgeable, and friendly. Ashraf truly knows how to make a tour memorable.',
    rating: 5,
    location: 'Mumbai, India',
    tourType: 'Abu Dhabi City Tour'
  }
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-teal-600 to-emerald-700 text-white">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Traveler Experiences
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                variants={itemVariants}
                className="px-4 py-8"
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 relative">
                  <FaQuoteLeft className="absolute top-4 left-4 text-amber-400 text-4xl opacity-50" />
                  
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-amber-400 mb-6"
                    />
                    
                    <p className="text-xl mb-4 italic text-white">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-amber-400 text-xl" />
                      ))}
                    </div>
                    
                    <h3 className="font-bold text-lg text-white mb-4">
                      {testimonial.name}
                    </h3>
                    
                    <div className="flex items-center space-x-4 text-white/80">
                      <div className="flex items-center">
                        <FaMapMarkedAlt className="mr-2 text-amber-400" />
                        <span>{testimonial.location}</span>
                      </div>
                      <div className="flex items-center">
                        <FaGlobeAsia className="mr-2 text-amber-400" />
                        <span>{testimonial.tourType}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
