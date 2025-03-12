import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaTools, FaRobot, FaGamepad, FaShoppingCart, FaUsers, FaCreditCard } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: "Stakeholder App Overhaul",
    description: "Managed the complete overhaul of the Stakeholder App, implementing new features and UX improvements that significantly enhanced user engagement.",
    results: "90% surge in user engagement, evidenced by a substantial increase in time spent on the platform.",
    icon: <FaChartLine />,
    tags: ["UX Design", "Product Strategy", "Analytics"]
  },
  {
    id: 2,
    title: "AI Summarization Tool",
    description: "Developed an AI-powered tool that automatically summarizes content from PDF books, audio files, and videos to enhance student learning efficiency.",
    results: "Improved student revision efficiency by 25%, leading to better academic outcomes.",
    icon: <FaRobot />,
    tags: ["AI", "EdTech", "Content Processing"]
  },
  {
    id: 3,
    title: "Gamification Implementation",
    description: "Spearheaded the development and implementation of a comprehensive gamification strategy for a student application to boost engagement and motivation.",
    results: "27% increase in adoption metrics and 20% increase in retention metrics.",
    icon: <FaGamepad />,
    tags: ["Gamification", "User Engagement", "Retention"]
  },
  {
    id: 4,
    title: "Nazdik Marketplace",
    description: "Created a hyperlocal marketplace connecting local retailers and service providers with consumers, featuring a comprehensive product catalog and efficient discovery mechanisms.",
    results: "Successfully onboarded over 1000 merchants with 20,000+ catalog items.",
    icon: <FaShoppingCart />,
    tags: ["Marketplace", "Mobile App", "Web App"]
  },
  {
    id: 5,
    title: "Payment System Optimization",
    description: "Implemented flow adjustments on the Payment Page and optimized APIs & Webhooks to enhance transaction reliability and success rates.",
    results: "Reduced payment failures from 5% to less than 1% on forms and portals.",
    icon: <FaCreditCard />,
    tags: ["Payment Systems", "API Optimization", "User Experience"]
  },
  {
    id: 6,
    title: "Husky Freelancer Marketplace",
    description: "Led a team of 12 members in designing, developing, and launching a comprehensive freelancer marketplace from concept to completion.",
    results: "Developed business worth over USD 1 million by converting 150+ potential customers from across the world.",
    icon: <FaUsers />,
    tags: ["SaaS", "Marketplace", "Team Leadership"]
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(filter));
  
  const uniqueTags = [...new Set(projectsData.flatMap(project => project.tags))];
  
  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Key Projects</h2>
          
          <div className="projects-filter">
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            
            {uniqueTags.map((tag, index) => (
              <button 
                key={index}
                className={`filter-btn ${filter === tag ? 'active' : ''}`}
                onClick={() => setFilter(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="project-icon">
                  {project.icon}
                </div>
                
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-result">
                  <strong>Result:</strong> {project.results}
                </div>
                
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;