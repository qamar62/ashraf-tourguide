import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const tours = [
  {
    id: 1,
    title: 'Dubai City Tour',
    description: 'Explore the stunning modern architecture and rich cultural heritage of Dubai.',
    image: '/dubai-city.jpg',
    highlights: [
      'Burj Khalifa',
      'Dubai Mall',
      'Old Dubai',
      'Creek Cruise'
    ]
  },
  {
    id: 2,
    title: 'Desert Safari',
    description: 'Experience the thrill of Arabian desert with dune bashing, camel riding, and traditional entertainment.',
    image: 'https://images.pexels.com/photos/1370746/pexels-photo-1370746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    highlights: [
      'Dune Bashing',
      'Camel Riding',
      'BBQ Dinner',
      'Traditional Dance Show'
    ]
  },
  {
    id: 3,
    title: 'Abu Dhabi City Tour',
    description: 'Discover the capital of UAE, featuring magnificent mosques, museums, and cultural landmarks.',
    image: '/abu-dhabi-city.jpg',
    highlights: [
      'Sheikh Zayed Mosque',
      'Louvre Museum',
      'Emirates Palace',
      'Corniche Beach'
    ]
  }
];

const Tours = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="tours" className="py-20 px-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-emerald-700">
          Ashraf's Signature Tours
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img 
                src={tour.image} 
                alt={tour.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-emerald-600">
                  {tour.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {tour.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-emerald-700">Highlights:</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {tour.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
