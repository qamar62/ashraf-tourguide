import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hello, I'm interested in booking a tour!");
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="whatsapp-button bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </button>
  );
};

export default WhatsAppButton;
