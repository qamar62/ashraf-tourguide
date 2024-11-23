import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
  });

  const WEBHOOK_URL = 'https://n8n.qamdm.xyz/webhook/5bd23879-0268-4eae-8de9-95a64a9a1e07'; // You'll replace this later

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form data
    const { name, email, phone, destination, message } = formData;
    
    if (!name || !email || !phone || !destination || !message) {
      alert('Please fill in all fields');
      return;
    }

    // Set submitting state
    setSubmissionStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
    });

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'Ashraf Tours Website'
        }),
      });

      if (response.ok) {
        // Success
        setSubmissionStatus({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          destination: '',
          message: '',
        });

        // Reset status after 3 seconds
        setTimeout(() => {
          setSubmissionStatus({
            isSubmitting: false,
            isSuccess: false,
            isError: false,
          });
        }, 3000);
      } else {
        // Error
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-emerald-50">
      <div className="container mx-auto max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-emerald-700"
        >
          Plan Your Adventure with Ashraf
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="bg-white rounded-lg shadow-2xl p-8"
        >
          <AnimatePresence>
            {submissionStatus.isSubmitting && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-emerald-600"
              >
                <p>Sending your inquiry...</p>
              </motion.div>
            )}

            {submissionStatus.isSuccess && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center text-emerald-600"
              >
                <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                <p>We'll get back to you soon.</p>
              </motion.div>
            )}

            {submissionStatus.isError && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="text-center text-red-600"
              >
                <h3 className="text-2xl font-bold mb-4">Oops!</h3>
                <p>Something went wrong. Please try again later.</p>
              </motion.div>
            )}

            {!submissionStatus.isSubmitting && !submissionStatus.isSuccess && !submissionStatus.isError && (
              <motion.form
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label 
                      htmlFor="name" 
                      className="block text-emerald-700 font-bold mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label 
                      htmlFor="email" 
                      className="block text-emerald-700 font-bold mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label 
                      htmlFor="phone" 
                      className="block text-emerald-700 font-bold mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label 
                      htmlFor="destination" 
                      className="block text-emerald-700 font-bold mb-2"
                    >
                      Preferred Destination
                    </label>
                    <select
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="">Select Destination</option>
                      <option value="Dubai City Tour">Dubai City Tour</option>
                      <option value="Desert Safari">Desert Safari</option>
                      <option value="Abu Dhabi City Tour">Abu Dhabi City Tour</option>
                    </select>
                  </motion.div>

                  <motion.div 
                    variants={itemVariants}
                    className="md:col-span-2"
                  >
                    <label 
                      htmlFor="message" 
                      className="block text-emerald-700 font-bold mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    ></textarea>
                  </motion.div>
                </div>

                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="mt-6 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  <FaPaperPlane className="mr-2" /> Send Inquiry
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
