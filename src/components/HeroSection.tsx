
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="min-h-screen w-full flex items-center justify-center relative pt-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute left-1/3 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-400/5 blur-3xl" />
      </div>
      
      <div className="container max-w-6xl mx-auto px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Mobile image that shows next to name on small screens */}
          <div className="md:hidden flex flex-col w-full">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm md:text-base font-medium text-primary px-4 py-1.5 bg-primary/10 rounded-full self-start mb-2"
            >
              Hello, I'm
            </motion.span>
            
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 rounded-full overflow-hidden shadow-xl flex-shrink-0"
              >
                <img 
                  src="/lovable-uploads/59894edf-74d1-4bfb-83ba-10eacc7aade5.png"
                  alt="Niraj Kumar"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="flex flex-col items-start">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold"
                >
                  Niraj Kumar
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-foreground/80 text-sm font-medium"
                >
                  Building the Future of Digital Health
                </motion.p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-2"
            >
              <span className="text-sm md:text-base font-medium text-primary px-4 py-1.5 bg-primary/10 rounded-full">
                Hello, I'm
              </span>
              {/* Desktop heading that only shows on medium screens and up */}
              <h1 className="hidden md:block text-4xl sm:text-5xl md:text-6xl font-bold mt-4">
                Niraj Kumar
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="hidden md:block text-foreground/80 text-lg font-medium mt-2"
              >
                Building the Future of Digital Health
              </motion.p>
              <h2 className="text-xl md:text-2xl text-foreground/70 font-medium">
                Product Manager | Tech Entrepreneur | Startup Enthusiast
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-foreground/70 text-base md:text-lg"
            >
              I specialize in product strategy, user experience, and building scalable solutions. 
              With a background in tech entrepreneurship and a passion for innovation, I help transform ideas into impactful products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Link to="/projects" className="btn-primary flex items-center justify-center gap-2 group">
                View Portfolio
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="/Niraj Kumar.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex items-center justify-center gap-2"
              >
                Preview Resume
                <ExternalLink className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Desktop image that only shows on medium screens and up */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden md:block w-full md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/59894edf-74d1-4bfb-83ba-10eacc7aade5.png"
                alt="Niraj Kumar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
