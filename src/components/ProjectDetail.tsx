
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, FolderGit2, Award, Lightbulb } from 'lucide-react';
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
      title: "Sodashi",
      description: "Decentralized data marketplace.",
      category: "Startup MVP",
      icon: Lightbulb,
      fullDescription: `Sodashi is a decentralized data marketplace built on blockchain technology that allows users to 
                        securely buy, sell, and trade data assets. The platform uses smart contracts to ensure transparent 
                        transactions and fair compensation for data creators while maintaining privacy and security of sensitive information.`,
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
