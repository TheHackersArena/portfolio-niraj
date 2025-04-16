import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Award, Lightbulb, FileText, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const startups = [
    {
      id: "trial-room",
      title: "Trial Room",
      subtitle: "Metaverse Platform for Job Selection",
      description: "Metaverse platform for job selection.",
      category: "Startup MVP",
      icon: Lightbulb,
      imageSrc: "/lovable-uploads/84983947-3427-4034-a2a6-19543bc6fe52.png",
      award: "2nd Place",
      date: "July 2023"
    },
    {
      id: "sodashi",
      title: "SODASHI",
      subtitle: "Decentralized Data Marketplace",
      description: "Decentralized data marketplace.",
      category: "Startup MVP",
      icon: Lightbulb,
      imageSrc: "/lovable-uploads/3a4e7e28-5f42-48f6-ab6e-c7adcd9a1a85.png",
      award: "1st Place",
      date: "Jan 2023"
    }
  ];

  const caseStudies = [
    {
      id: "icici-lombard",
      title: "ICICI Lombard",
      subtitle: "Health Insurance Digital Experience",
      description: "Revamped onboarding, claims, and fraud prevention journeys to simplify health insurance access for Indian consumers.",
      imageSrc: "/lovable-uploads/2935e9fa-a3ec-4ed8-9c8d-e2db872ad391.png",
      pdfSrc: "/ICICI_Lombard.pdf",
      icon: FileText,
      date: "Feb 2023"
    },
    {
      id: "inbooks",
      title: "Inbooks",
      subtitle: "AI-Powered Book Discovery Platform",
      description: "Built an intelligent platform for nonfiction readers to discover books, share notes, and engage in thematic discussions.",
      imageSrc: "/lovable-uploads/f519760f-0a5d-4989-90b0-5a95bfbbbb67.png",
      pdfSrc: "/Inbooks.pdf",
      icon: FileText,
      date: "March 2022"
    },
    {
      id: "neo-bank-fibe",
      title: "Neo Bank – Fibe",
      subtitle: "Payroll & Expense Automation for Startups",
      description: "Designed a modern SaaS platform for managing payroll, reimbursements, and GST-ready ledgers—tailored for high-growth teams.",
      imageSrc: "/lovable-uploads/37546362-371f-47a3-bc05-b4bc3a850839.png",
      pdfSrc: "/Neo_Bank_Fibe.pdf",
      icon: FileText,
      date: "May 2022"
    },
    {
      id: "netflix",
      title: "Netflix",
      subtitle: "Social Content Discovery & UX Research",
      description: "Conducted user research and proposed improvements to content recommendations, skip intro UX, and community sharing features.",
      imageSrc: "/lovable-uploads/3b11daaa-f3bf-4f64-a5fb-a50d5e663dd8.png",
      pdfSrc: "/NETFLIX.pdf",
      icon: FileText,
      date: "Aug 2022"
    },
    {
      id: "pac-man-services",
      title: "Pac-Man Services",
      subtitle: "Gamezone Ops Management SaaS",
      description: "Built a cloud-based backend for managing arcade centers: equipment, tickets, staff, inventory, and analytics.",
      imageSrc: "/lovable-uploads/e6d50d43-210d-46af-9173-e383c6f96974.png",
      pdfSrc: "/Pac-Man-Services.pdf",
      icon: FileText,
      date: "Nov 2022"
    }
  ];

  const competitions = [
    {
      id: "ethical-hacking",
      title: "1st Place – Ethical Hacking Challenge",
      description: "IIT Delhi",
      category: "Hackathon",
      icon: Award
    },
    {
      id: "embedded-systems",
      title: "1st Place – Embedded Systems Robot Competition",
      description: "LNMIIT",
      category: "Competition",
      icon: Award
    },
    {
      id: "system-vulnerability",
      title: "3rd Place – System Vulnerability Hackathon",
      description: "Hansraj College",
      category: "Hackathon",
      icon: Award
    },
    {
      id: "robotics-design",
      title: "2nd Place – Robotics Design",
      description: "Techfest CIC",
      category: "Competition",
      icon: Award
    }
  ];

  const projects = [
    {
      id: "blockchain-erp",
      title: "Blockchain-Based ERP System",
      description: "Created an HR ERP system with IBM Hyperledger and Smart Contracts.",
      category: "Technical Project",
      icon: FolderGit2
    },
    {
      id: "prosthetic-limbs",
      title: "3D Printed Prosthetic Limbs",
      description: "Led a funded research project (₹75L) to develop IoT-enabled prosthetic limbs.",
      category: "Research Project",
      icon: FolderGit2
    }
  ];

  return (
    <section className="section-container" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <div className="space-y-4">
          <h3 className="text-sm uppercase tracking-wider text-primary font-semibold">Showcase</h3>
          <h2 className="text-3xl md:text-4xl font-bold">Projects & Achievements</h2>
        </div>

        <div className="space-y-16">
          {/* Case Studies - First */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="sub-section-title mb-6">Case Studies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="card hover:border-primary/20 flex flex-col rounded-2xl bg-card text-card-foreground hover:shadow-lg transition-all hover:scale-[1.02]"
                >
                  <div className="h-full flex flex-col">
                    <div className="h-48 w-full overflow-hidden rounded-t-xl mb-4 bg-white flex items-center justify-center p-4">
                      <img 
                        src={study.imageSrc} 
                        alt={study.title} 
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex-1 p-4">
                      <div className="flex justify-between items-start">
                        <h4 className="text-lg font-bold">{study.title}</h4>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{study.date}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{study.subtitle}</p>
                      <p className="text-sm mt-3">{study.description}</p>
                      
                      <div className="flex justify-end mt-4">
                        <a 
                          href={study.pdfSrc} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                          aria-label={`View ${study.title} case study`}
                        >
                          <study.icon className="h-4 w-4" />
                          <span>View Case Study</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Startup MVPs - Second */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="sub-section-title mb-6">Startup MVPs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {startups.map((startup, index) => (
                <Link to={`/projects/${startup.id}`} key={index}>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="card hover:border-primary/20 flex flex-col rounded-2xl bg-card text-card-foreground hover:shadow-lg transition-all hover:scale-[1.02]"
                  >
                    <div className="h-full flex flex-col">
                      <div className="h-48 w-full overflow-hidden rounded-t-xl mb-4 bg-white flex items-center justify-center p-4">
                        <img 
                          src={startup.imageSrc} 
                          alt={startup.title} 
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>

                      <div className="flex-1 p-4">
                        <div className="flex justify-between items-start">
                          <h4 className="text-lg font-bold">{startup.title}</h4>
                          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{startup.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{startup.subtitle}</p>
                        <div className="flex items-center mt-2">
                          <Award className="h-4 w-4 text-amber-500 mr-1" />
                          <span className="text-sm font-medium text-amber-500">{startup.award}</span>
                        </div>
                        <p className="text-sm mt-3">{startup.description}</p>
                        
                        {startup.externalLink && (
                          <div className="flex justify-end mt-4">
                            <a 
                              href={startup.externalLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                            >
                              <ExternalLink className="h-4 w-4" />
                              <span>View Presentation</span>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Hackathons & Competitions - Third */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="sub-section-title mb-6">Hackathons & Competitions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {competitions.map((competition, index) => (
                <Link to={`/projects/${competition.id}`} key={index}>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="card hover:border-primary/20 flex flex-col h-full bg-card text-card-foreground hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs font-medium text-primary/80 px-2 py-1 bg-primary/5 rounded-full">{competition.category}</span>
                      <competition.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold">{competition.title}</h4>
                    <p className="text-muted-foreground mt-2 flex-grow">{competition.description}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Notable Projects - Last */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="sub-section-title mb-6">Notable Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Link to={`/projects/${project.id}`} key={index}>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="card hover:border-primary/20 flex flex-col h-full bg-card text-card-foreground hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs font-medium text-primary/80 px-2 py-1 bg-primary/5 rounded-full">{project.category}</span>
                      <project.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold">{project.title}</h4>
                    <p className="text-muted-foreground mt-2 flex-grow">{project.description}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
