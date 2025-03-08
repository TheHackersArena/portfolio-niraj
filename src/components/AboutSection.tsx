
import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, GraduationCap, Briefcase } from 'lucide-react';

const AboutSection = () => {
  const education = [
    {
      institution: "Masters' Union School of Business",
      degree: "Program in Product Management",
      year: "2023",
      details: "",
    },
    {
      institution: "Delhi University",
      degree: "B.Tech in IT & Mathematics",
      year: "",
      details: "74%",
    },
    {
      institution: "Army Public School Mamun Cantt",
      degree: "Class 12",
      year: "",
      details: "90.8%",
    },
  ];

  const achievements = [
    {
      title: "2nd Place in Startup Weekend",
      description: "Built 'Trial Room,' a metaverse platform for job selection."
    },
    {
      title: "1st Place in Startup Weekend",
      description: "Created 'Sodashi,' a decentralized data-sharing marketplace."
    },
    {
      title: "All-Rounder title",
      description: "Recognized in Product Management cohort."
    },
  ];

  return (
    <section className="section-container" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-wider text-primary font-semibold">About me</h3>
          <h2 className="text-3xl md:text-4xl font-bold">My Background</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="sub-section-title flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Bio
            </h3>
            <div className="space-y-4 text-foreground/80">
              <p>
                I'm a Product Manager at Fitterfly, where I focus on creating impactful digital health solutions. 
              </p>
              <p>
                Previously, I co-founded Legex, a legal tech startup that was successfully acquired in 2022. 
                Our team was selected as a Y Combinator finalist, putting us in the top 5% of applicants.
              </p>
              <p>
                With a background in both technology and business, I bring a unique perspective to product development—combining technical knowledge with user-centered design and business strategy.
              </p>
              <p>
                I'm passionate about building products that solve real problems and creating seamless user experiences that drive engagement and growth.
              </p>
            </div>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <h3 className="sub-section-title flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((item, index) => (
                  <div key={index} className="card hover:border-primary/20">
                    <h4 className="font-semibold">{item.institution}</h4>
                    <p className="text-foreground/70">{item.degree}</p>
                    <div className="flex justify-between items-center mt-2 text-sm text-foreground/60">
                      <span>{item.year}</span>
                      <span>{item.details}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="sub-section-title flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                Key Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((item, index) => (
                  <div key={index} className="card hover:border-primary/20">
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-foreground/70 mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
