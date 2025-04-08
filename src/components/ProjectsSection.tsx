import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Award, Lightbulb, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const startups = [
    {
      id: "trial-room",
      title: "Trial Room",
      description: "Metaverse platform for job selection.",
      category: "Startup MVP",
      icon: Lightbulb
    },
    {
      id: "sodashi",
      title: "SODASHI",
      description: "Decentralized data marketplace.",
      category: "Startup MVP",
      icon: Lightbulb
    }
  ];

  const caseStudies = [
    {
      id: "icici-lombard",
      title: "ICICI Lombard",
      subtitle: "Health Insurance Digital Experience",
      description: "Revamped onboarding, claims, and fraud prevention journeys to simplify health insurance access for Indian consumers.",
      imageSrc: "/placeholder.svg",
      pdfSrc: "/ICICI_Lombard.pdf",
      pdfLink: "/pdf/icici-lombard",
      icon: FileText
    },
    {
      id: "inbooks",
      title: "Inbooks",
      subtitle: "AI-Powered Book Discovery Platform",
      description: "Built an intelligent platform for nonfiction readers to discover books, share notes, and engage in thematic discussions.",
      imageSrc: "/placeholder.svg",
      pdfSrc: "/Inbooks.pdf",
      pdfLink: "/pdf/inbooks",
      icon: FileText
    },
    {
      id: "neo-bank-fibe",
      title: "Neo Bank – Fibe",
      subtitle: "Payroll & Expense Automation for Startups",
      description: "Designed a modern SaaS platform for managing payroll, reimbursements, and GST-ready ledgers—tailored for high-growth teams.",
      imageSrc: "/placeholder.svg",
      pdfSrc: "/Neo_Bank_Fibe.pdf",
      pdfLink: "/pdf/neo-bank-fibe",
      icon: FileText
    },
    {
      id: "netflix",
      title: "Netflix",
      subtitle: "Social Content Discovery & UX Research",
      description: "Conducted user research and proposed improvements to content recommendations, skip intro UX, and community sharing features.",
      imageSrc: "/placeholder.svg",
      pdfSrc: "/NETFLIX.pdf",
      pdfLink: "/pdf/netflix",
      icon: FileText
    },
    {
      id: "pac-man-services",
      title: "Pac-Man Services",
      subtitle: "Gamezone Ops Management SaaS",
      description: "Built a cloud-based backend for managing arcade centers: equipment, tickets, staff, inventory, and analytics.",
      imageSrc: "/placeholder.svg",
      pdfSrc: "/Pac-Man-Services.pdf",
      pdfLink: "/pdf/pac-man-services",
      icon: FileText
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
          {/* Startup MVPs - First */}
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
                    className="card hover:border-primary/20 flex flex-col h-full bg-card text-card-foreground hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs font-medium text-primary/80 px-2 py-1 bg-primary/5 rounded-full">{startup.category}</span>
                      <startup.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold">{startup.title}</h4>
                    <p className="text-muted-foreground mt-2 flex-grow">{startup.description}</p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Case Studies - New Section */}
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
                  <Link to={study.pdfLink} className="h-full">
                    <div className="h-40 w-full overflow-hidden rounded-t-xl mb-4">
                      <img 
                        src={study.imageSrc} 
                        alt={study.title} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex-1 p-4">
                      <h4 className="text-lg font-bold">{study.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{study.subtitle}</p>
                      <p className="text-sm mt-3">{study.description}</p>
                      
                      <div className="flex justify-end mt-4">
                        <span 
                          className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                          aria-label={`View ${study.title} case study`}
                        >
                          <study.icon className="h-4 w-4" />
                          <span>View Case Study</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
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
