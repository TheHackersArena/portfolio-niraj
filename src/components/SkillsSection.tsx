
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Wrench, Layout, Layers } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Product Management",
      icon: Brain,
      skills: [
        "Product Development",
        "Roadmapping",
        "Stakeholder Management",
        "Business Model Innovation",
        "Wireframing",
        "Prototyping"
      ]
    },
    {
      title: "Tech Stack",
      icon: Code,
      skills: [
        "Python",
        "C++",
        "React.js",
        "Angular",
        "GraphQL",
        "Tailwind"
      ]
    },
    {
      title: "Platforms & Tools",
      icon: Wrench,
      skills: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "Figma",
        "Jira",
        "Mixpanel",
        "Metabase"
      ]
    }
  ];

  return (
    <section className="section-container" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-wider text-primary font-semibold">Expertise</h3>
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              className="card hover:border-primary/20 h-full bg-card text-card-foreground"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8"
        >
          <div className="card hover:border-primary/20 bg-card text-card-foreground">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Layout className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">UX/UI Design</h3>
            </div>
            <div className="space-y-2">
              <div className="w-full bg-secondary rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: '90%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>UI/UX Research</span>
                <span>User Testing</span>
                <span>Design Systems</span>
              </div>
            </div>
          </div>

          <div className="card hover:border-primary/20 bg-card text-card-foreground">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Layers className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Business Strategy</h3>
            </div>
            <div className="space-y-2">
              <div className="w-full bg-secondary rounded-full h-2.5">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Go-to-Market</span>
                <span>Market Analysis</span>
                <span>Growth Strategy</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
