
import React from 'react';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <HeroSection />
      <SkillsSection />
    </motion.div>
  );
};

export default Index;
