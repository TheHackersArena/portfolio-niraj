import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, FolderGit2, Award, Lightbulb, ExternalLink, Download, Globe, DollarSign, Users, Lock, BarChart4, Calendar, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  // Combined project data
  const allProjects = [
    // Startups
    {
      id: "trial-room",
      title: "Trial Room",
      description: "Metaverse platform for job selection.",
      category: "Startup MVP",
      icon: Lightbulb,
      fullDescription: `Trial Room is an innovative metaverse platform designed to revolutionize the job selection process. 
                        It creates virtual environments where candidates can experience realistic work scenarios before making 
                        career decisions. Using VR/AR technology, Trial Room allows users to virtually "try on" different roles and 
                        company cultures, helping both employers and job seekers find their perfect match.`,
      challenges: [
        "Creating immersive VR environments that accurately reflect real workplace scenarios",
        "Developing algorithms to match user preferences with suitable job opportunities",
        "Optimizing performance across various devices and connection speeds"
      ],
      technologies: ["WebXR", "React", "Node.js", "ThreeJS"]
    },
    {
      id: "sodashi",
      title: "SODASHI",
      description: "Decentralized data marketplace.",
      category: "Startup MVP",
      icon: Lightbulb,
      heroTitle: "SODASHI: Powering Secure & Transparent Data Transactions",
      heroSubtitle: "A decentralized platform revolutionizing data sharing with blockchain-powered transparency and privacy.",
      ctaText: "Explore the Future of Data",
      fullDescription: `SODASHI is a decentralized data marketplace built on blockchain technology that allows users to 
                        securely buy, sell, and trade data assets. The platform uses smart contracts to ensure transparent 
                        transactions and fair compensation for data creators while maintaining privacy and security of sensitive information.`,
      problemStatement: {
        title: "The Problem",
        description: "The traditional data marketplace is centralized, vulnerable to breaches, and lacks transparency.",
        challenges: [
          "Lack of privacy 🔐",
          "Data breaches & security risks 🚧",
          "No data governance & poor quality 🛑",
          "Standardization issues 📊"
        ],
        marketSize: {
          global: "The global data market was $274B in 2020 and is projected to hit $603B by 2025 (CAGR: 18%).",
          singapore: "Singapore Market (SAM): Estimated at $4.1B by 2025, with an initial addressable market of $205M."
        }
      },
      solution: {
        title: "How SODASHI Solves This",
        description: "SODASHI leverages blockchain & smart contracts to create a secure, transparent, and decentralized data-sharing network.",
        benefits: [
          "Data contributors control access & set their own prices.",
          "Data buyers get high-quality, verified data without intermediaries.",
          "Blockchain ensures integrity, compliance, and trust."
        ],
        features: [
          "Smart contract-based transactions 🤖",
          "Data quality control & governance ✅",
          "Enhanced security & reputation system 🔒",
          "API integrations for seamless data exchange 🔗"
        ]
      },
      goToMarket: {
        title: "Go-To-Market Strategy 🚀",
        description: "Engagement & Awareness:",
        points: [
          "Targeting finance, healthcare, and retail industries.",
          "Partnering with research institutions & government agencies.",
          "Community building with token-based rewards for data providers."
        ]
      },
      roadmap: {
        title: "Roadmap & Development Timeline 🛠",
        phases: [
          "Phase 1 (Platform Design & Architecture) - 2 Weeks",
          "Phase 2 (Smart Contract Development) - 4 Weeks",
          "Phase 3 (Front-end & Back-end Development) - 12 Weeks",
          "Phase 4 (Integration & Testing) - 2 Weeks",
          "Phase 5 (Deployment & Compliance) - 3 Weeks"
        ],
        team: {
          title: "Team Composition:",
          members: [
            "Project Manager (2)",
            "Developers (5)",
            "Data Scientists (2)",
            "UX/UI Designers (2)",
            "QA Testers (2)",
            "Legal & Compliance (2)",
            "Marketing & Biz Dev (2)"
          ]
        }
      },
      monetization: {
        title: "Monetization Strategy 💰",
        streams: [
          "Premium Features: Advanced analytics, visualization tools.",
          "Advertising: Sell ad space to businesses targeting data users.",
          "Commission Model: A small fee on transactions within the marketplace."
        ],
        funding: {
          title: "Funding Plan:",
          description: "Seeking $1.2M investment for 25% equity to fund:",
          allocation: [
            "Development (35.3%)",
            "Technology (23.5%)",
            "Marketing (11.8%)",
            "Compliance (11.8%)",
            "Contingency (17.6%)"
          ]
        }
      },
      team: {
        title: "Meet the Team 👨‍💻",
        founders: [
          {
            name: "Niraj Kumar",
            role: "Product & Strategy",
            linkedin: "https://www.linkedin.com/in/nirajkryadav/",
            website: "https://nirajkr.com/"
          }
        ],
        members: [
          "Aniruddha Niraj",
          "Pranav Preeti",
          "Nagaraj",
          "Naman"
        ]
      },
      callToAction: {
        title: "Call to Action:",
        message: "Be part of the decentralized data revolution!",
        buttonText: "Join the SODASHI movement today!"
      },
      projectLink: "https://drive.google.com/file/d/1vcAMWrPTSUiPXONflVDItiyRyLsCQzry/view?usp=drive_link",
      challenges: [
        "Implementing secure data exchange protocols using blockchain",
        "Designing an intuitive user interface for complex data transactions",
        "Developing a fair pricing mechanism for diverse data types"
      ],
      technologies: ["Ethereum", "IPFS", "React", "Solidity"]
    },
    
    // Competitions
    {
      id: "ethical-hacking",
      title: "1st Place – Ethical Hacking Challenge",
      description: "IIT Delhi",
      category: "Hackathon",
      icon: Award,
      fullDescription: `Led a team of three in IIT Delhi's prestigious Ethical Hacking Challenge, where we demonstrated 
                        advanced penetration testing techniques and identified critical vulnerabilities in a simulated 
                        corporate network. Our approach combined automated tools with manual testing to discover and document 
                        security flaws that other teams missed.`,
      challenges: [
        "Identifying and exploiting network vulnerabilities within tight time constraints",
        "Developing a comprehensive security assessment methodology",
        "Creating clear documentation for vulnerability remediation"
      ],
      technologies: ["Kali Linux", "Metasploit", "Burp Suite", "Python"]
    },
    {
      id: "embedded-systems",
      title: "1st Place – Embedded Systems Robot Competition",
      description: "LNMIIT",
      category: "Competition",
      icon: Award,
      fullDescription: `At the LNMIIT Embedded Systems Robot Competition, our team designed and built an autonomous robot 
                        capable of navigating complex terrains and performing specific tasks. The robot featured custom-built 
                        sensors and real-time decision-making algorithms that allowed it to adapt to changing environmental conditions.`,
      challenges: [
        "Designing efficient power management systems for extended operation",
        "Implementing reliable sensor fusion for accurate environmental mapping",
        "Creating robust algorithms for autonomous navigation and decision making"
      ],
      technologies: ["Arduino", "Raspberry Pi", "C++", "Computer Vision", "Sensor Engineering"]
    },
    {
      id: "system-vulnerability",
      title: "3rd Place – System Vulnerability Hackathon",
      description: "Hansraj College",
      category: "Hackathon",
      icon: Award,
      fullDescription: `In the System Vulnerability Hackathon at Hansraj College, our team identified and demonstrated 
                        exploits in web applications and network systems. We developed a comprehensive security audit methodology 
                        that uncovered several zero-day vulnerabilities, earning recognition for our thorough approach to security testing.`,
      challenges: [
        "Discovering novel attack vectors in common web frameworks",
        "Developing proof-of-concept exploits for identified vulnerabilities",
        "Creating automated tools to detect similar vulnerabilities across systems"
      ],
      technologies: ["JavaScript", "Python", "SQL", "Network Security Tools"]
    },
    {
      id: "robotics-design",
      title: "2nd Place – Robotics Design",
      description: "Techfest CIC",
      category: "Competition",
      icon: Award,
      fullDescription: `At the Techfest CIC Robotics Design competition, we developed an innovative robot with advanced 
                        manipulation capabilities. Our design focused on energy efficiency and precise movement control, 
                        allowing the robot to perform complex tasks with minimal power consumption.`,
      challenges: [
        "Designing mechanically efficient joints and actuators",
        "Optimizing control algorithms for smooth and precise movements",
        "Balancing weight distribution for stability during complex manipulations"
      ],
      technologies: ["Solidworks", "Control Systems", "Microcontrollers", "Servo Motors"]
    },
    
    // Projects
    {
      id: "blockchain-erp",
      title: "Blockchain-Based ERP System",
      description: "Created an HR ERP system with IBM Hyperledger and Smart Contracts.",
      category: "Technical Project",
      icon: FolderGit2,
      fullDescription: `This innovative enterprise resource planning (ERP) system leverages blockchain technology to enhance 
                        security, transparency, and efficiency in human resources management. Built on IBM Hyperledger Fabric, 
                        the system uses smart contracts to automate critical HR processes while maintaining an immutable record 
                        of all transactions and changes. The distributed ledger architecture ensures data integrity and provides 
                        secure access control mechanisms.`,
      challenges: [
        "Integrating blockchain with traditional ERP workflows",
        "Designing efficient smart contracts for complex business rules",
        "Ensuring system performance with growing transaction volume"
      ],
      technologies: ["IBM Hyperledger Fabric", "Smart Contracts", "React", "Node.js", "MongoDB"]
    },
    {
      id: "prosthetic-limbs",
      title: "3D Printed Prosthetic Limbs",
      description: "Led a funded research project (₹75L) to develop IoT-enabled prosthetic limbs.",
      category: "Research Project",
      icon: FolderGit2,
      fullDescription: `This research project focused on developing affordable, customizable prosthetic limbs using 3D printing 
                        technology and IoT sensors. With ₹75 lakh in funding, we created prosthetics that adapt to user behavior 
                        through embedded sensors and machine learning algorithms. The prosthetics collect usage data to continuously 
                        improve comfort and functionality while significantly reducing production costs compared to traditional prosthetics.`,
      challenges: [
        "Optimizing designs for strength, weight, and cost effectiveness",
        "Developing reliable sensor systems for precise movement detection",
        "Creating machine learning algorithms for adaptive behavior with limited computing resources"
      ],
      technologies: ["3D Modeling", "IoT Sensors", "Machine Learning", "Biomechanics", "Embedded Systems"]
    }
  ];

  const project = allProjects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="section-container py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <Button onClick={() => navigate('/projects')}>Back to Projects</Button>
      </div>
    );
  }

  const Icon = project.icon;

  // Special rendering for SODASHI project
  if (project.id === "sodashi") {
    return (
      <section className="section-container py-8">
        <div>
          <Link to="/projects">
            <Button variant="ghost" className="gap-2 mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>

        {/* Hero Section - Removed the CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-xl overflow-hidden bg-gradient-to-r from-primary/10 to-primary/20 mb-16"
        >
          <div className="relative z-10 py-16 px-8 flex flex-col items-center text-center">
            <span className="text-sm font-medium text-primary/80 px-3 py-1 bg-primary/10 rounded-full mb-4">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              {project.heroTitle}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {project.heroSubtitle}
            </p>
          </div>
        </motion.div>

        {/* Project PDF Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12 p-4 bg-muted rounded-lg flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <Download className="h-5 w-5 text-primary" />
            <span className="font-medium">Project Documentation</span>
          </div>
          <a 
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            View PDF <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Lock className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">{project.problemStatement.title}</h2>
          </div>
          <p className="text-lg mb-6">{project.problemStatement.description}</p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Major Challenges:</h3>
              <ul className="space-y-2">
                {project.problemStatement.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary font-medium">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-muted p-6 rounded-lg space-y-4">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Market Opportunity</h3>
              </div>
              <p className="text-muted-foreground">{project.problemStatement.marketSize.global}</p>
              <p className="text-muted-foreground">{project.problemStatement.marketSize.singapore}</p>
            </div>
          </div>
        </motion.div>

        {/* Solution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">{project.solution.title}</h2>
          </div>
          <p className="text-lg mb-6">{project.solution.description}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Benefits:</h3>
              <ul className="space-y-2">
                {project.solution.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 min-w-5 text-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Key Features:</h3>
              <ul className="space-y-2">
                {project.solution.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary font-medium">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Go To Market Strategy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16 bg-gradient-to-r from-primary/5 to-primary/10 p-8 rounded-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <BarChart4 className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">{project.goToMarket.title}</h2>
          </div>
          <p className="text-lg font-medium mb-4">{project.goToMarket.description}</p>
          
          <ul className="space-y-3">
            {project.goToMarket.points.map((point, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary font-medium">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">{project.roadmap.title}</h2>
          </div>
          
          <div className="space-y-4 mb-8">
            {project.roadmap.phases.map((phase, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {index + 1}
                </div>
                <div className="bg-muted rounded-lg px-4 py-3 flex-1">
                  {phase}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">{project.roadmap.team.title}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {project.roadmap.team.members.map((member, index) => (
                <div key={index} className="bg-background rounded-md p-3 text-center">
                  {member}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Monetization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">{project.monetization.title}</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Revenue Streams:</h3>
              <ul className="space-y-3">
                {project.monetization.streams.map((stream, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary font-medium">•</span>
                    <span>{stream}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">{project.monetization.funding.title}</h3>
              <p className="mb-4">{project.monetization.funding.description}</p>
              <ul className="space-y-2">
                {project.monetization.funding.allocation.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">{project.team.title}</h2>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Co-Founders & Innovators:</h3>
            <div className="bg-muted p-6 rounded-lg">
              {project.team.founders.map((founder, index) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h4 className="text-xl font-bold">{founder.name}</h4>
                    <p className="text-muted-foreground">{founder.role}</p>
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={founder.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 flex items-center gap-1"
                    >
                      LinkedIn <ExternalLink className="h-3 w-3" />
                    </a>
                    <a 
                      href={founder.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 flex items-center gap-1"
                    >
                      Website <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Team Members:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.team.members.map((member, index) => (
                <div key={index} className="bg-muted p-4 rounded-lg text-center">
                  <p className="font-medium">{member}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </section>
    );
  }

  // Regular project detail rendering for other projects
  return (
    <section className="section-container py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div>
          <Link to="/projects">
            <Button variant="ghost" className="gap-2 mb-6">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-primary/80 px-2 py-1 bg-primary/5 rounded-full">
              {project.category}
            </span>
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
          <p className="text-xl text-muted-foreground">{project.description}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="prose prose-stone dark:prose-invert max-w-none">
            <p>{project.fullDescription}</p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Key Challenges</h3>
            <ul className="space-y-2">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary font-medium">•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="rounded-full bg-primary/10 text-primary px-3 py-1 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectDetail;
