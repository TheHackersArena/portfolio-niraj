
import React from 'react';
import SkillsSection from '@/components/SkillsSection';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SkillsSection />
    </motion.div>
  );
};

export default Skills;
