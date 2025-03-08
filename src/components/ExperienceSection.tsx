
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Check } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Fitterfly",
      position: "Product Manager - II",
      duration: "2022 - Present",
      responsibilities: [
        "Designed the Therapy Design Engine, focusing on coach-less interventions.",
        "Developed a PWA for insurance partners, onboarding 10,000+ users monthly.",
        "Launched the DTx backend platform, improving UI/UX and reducing coaching time by 50%.",
        "Introduced Prime Program with Group Sessions, boosting sales by 10%.",
        "Built in-app user feedback flows to enhance the user experience."
      ]
    },
    {
      company: "Legex",
      position: "Co-founder & Tech/Product Head",
      duration: "2019 - 2022",
      responsibilities: [
        "Scaled and bootstrapped the startup, generating INR 10M+ revenue in 24 months.",
        "Reduced legal service turnaround time by 30% through automation.",
        "Built a legal search engine for Supreme Court case citations, reducing search time by 2.5 days.",
        "Selected in top 5% of Y Combinator W19 batch for the final interview round."
      ]
    },
    {
      company: "Keysight Technologies",
      position: "Software Engineer",
      duration: "2019 - 6 months",
      responsibilities: [
        "Developed automation frameworks and plugin verification for PathWave.",
        "Built Jenkins CI/CD pipelines and Kubernetes setups for devops."
      ]
    },
    {
      company: "Debox Design",
      position: "Mobile Developer",
      duration: "2017 - 3 months",
      responsibilities: [
        "Created a cross-platform React Native app with Google Assistant integration."
      ]
    },
    {
      company: "DRDO, Defence Research & Development Organisation",
      position: "Research Intern",
      duration: "2016 - 6 months",
      responsibilities: [
        "Built a radar placement strategy using Computer Vision and Python."
      ]
    }
  ];

  return (
    <section className="section-container" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-wider text-primary font-semibold">Career</h3>
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <span className="hidden md:block text-foreground/50">•</span>
                <span className="text-primary font-medium">{exp.company}</span>
              </div>
              <div className="text-sm text-foreground/60 mb-4">{exp.duration}</div>
              
              <ul className="space-y-2 text-foreground/80">
                {exp.responsibilities.map((responsibility, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="h-5 w-5 min-w-5 text-primary mt-0.5" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
