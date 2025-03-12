import React from 'react';
import { motion } from 'framer-motion';
import { FaTools, FaCloud, FaCode, FaDatabase, FaChartBar, FaProductHunt } from 'react-icons/fa';

const skillsData = [
  {
    category: "PM & Design Tools",
    icon: <FaTools />,
    skills: ["Jira", "Trello", "Zoho Desk", "Product Board", "Adobe XD", "MS Excel", "Figma", "GIT", "GitLab", "Google Ads"]
  },
  {
    category: "Cloud Tools",
    icon: <FaCloud />,
    skills: ["Azure", "GitLab", "APIs", "Webhooks"]
  },
  {
    category: "Programming Languages",
    icon: <FaCode />,
    skills: ["Java", "C++", "C#", "VBA Macros", "SQL", "Python", "R"]
  },
  {
    category: "Databases",
    icon: <FaDatabase />,
    skills: ["SQL", "MySQL", "PostgreSQL"]
  },
  {
    category: "Analytics",
    icon: <FaChartBar />,
    skills: ["Google Analytics", "Pendo", "Mixpanel", "anyLogic", "SPSS", "SPSS Modeler", "Tableau"]
  },
  {
    category: "PM Skills",
    icon: <FaProductHunt />,
    skills: [
      "Software Development Life Cycle Management", 
      "Wireframing", 
      "Design Thinking", 
      "Agile & Waterfall Methodology", 
      "Cross-functional Team Management", 
      "Roadmap Optimization", 
      "A/B Hypothesis Testing", 
      "Product Launch Strategies", 
      "Competitive Analysis", 
      "Market Research", 
      "Stakeholder Collaboration", 
      "Create PRDs & BRDs", 
      "Partnership Management"
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Skills & Expertise</h2>
          
          <div className="skills-grid">
            {skillsData.map((skillGroup, index) => (
              <motion.div 
                key={index}
                className="skill-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="skill-icon">
                  {skillGroup.icon}
                </div>
                
                <h3>{skillGroup.category}</h3>
                
                <div className="skill-tags">
                  {skillGroup.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
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

export default Skills;