
import React from 'react';
import ContactSection from '@/components/ContactSection';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContactSection />
    </motion.div>
  );
};

export default Contact;
