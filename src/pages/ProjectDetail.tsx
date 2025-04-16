
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectDetailComponent from '@/components/ProjectDetail';

const ProjectDetail = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectDetailComponent />
    </motion.div>
  );
};

export default ProjectDetail;
