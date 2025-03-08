
import React from 'react';
import ExperienceSection from '@/components/ExperienceSection';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ExperienceSection />
    </motion.div>
  );
};

export default Experience;
