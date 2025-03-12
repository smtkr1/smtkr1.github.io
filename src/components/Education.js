import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const educationData = [
  {
    id: 1,
    institution: "Indian Institute of Management Visakhapatnam",
    degree: "Master of Business Administration",
    period: "2017 - 2019",
    details: "CGPA - 2.41/4",
    icon: <FaGraduationCap />
  },
  {
    id: 2,
    institution: "Bangalore Institute of Technology, Bangalore",
    degree: "Bachelor of Engineering (Electronics and Communication)",
    period: "2012 - 2016",
    details: "69.04%",
    icon: <FaGraduationCap />
  },
  {
    id: 3,
    institution: "B.D. Public School, Patna",
    degree: "All India Senior School Certificate Examination",
    period: "2012",
    details: "80%",
    icon: <FaGraduationCap />
  },
  {
    id: 4,
    institution: "Don Bosco Academy School, Patna",
    degree: "Indian Certificate of Secondary Education",
    period: "2010",
    details: "91.80%",
    icon: <FaGraduationCap />
  }
];

const certificationsData = [
  {
    id: 1,
    title: "Certified Scrum Master®",
    issuer: "Scrum Alliance",
    icon: <FaCertificate />
  },
  {
    id: 2,
    title: "Product-led Certification",
    issuer: "Pendo.io",
    icon: <FaCertificate />
  },
  {
    id: 3,
    title: "Hands on Tableau training for Data Science",
    issuer: "Udemy",
    icon: <FaCertificate />
  }
];

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Education & Certifications</h2>
          
          <div className="education-container">
            <div className="education-column">
              <h3 className="subsection-title">Academic Background</h3>
              
              <div className="education-timeline">
                {educationData.map((item) => (
                  <motion.div 
                    key={item.id}
                    className="education-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: item.id * 0.1 }}
                  >
                    <div className="education-icon">
                      {item.icon}
                    </div>
                    
                    <div className="education-content">
                      <h4>{item.institution}</h4>
                      <p className="education-degree">{item.degree}</p>
                      <p className="education-period">{item.period}</p>
                      <p className="education-details">{item.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="certifications-column">
              <h3 className="subsection-title">Professional Certifications</h3>
              
              <div className="certifications-grid">
                {certificationsData.map((cert) => (
                  <motion.div 
                    key={cert.id}
                    className="certification-card"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: cert.id * 0.1 }}
                  >
                    <div className="certification-icon">
                      {cert.icon}
                    </div>
                    
                    <div className="certification-content">
                      <h4>{cert.title}</h4>
                      <p>{cert.issuer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="achievements-section">
                <h3 className="subsection-title">Achievements</h3>
                
                <ul className="achievements-list">
                  <li>Secured 1st position in the quiz held by the Information Technology club of IIM Visakhapatnam, 2017</li>
                  <li>Ranked 2nd position in the quiz held by the ANK, Analytics and IT club of IIM Visakhapatnam, 2018</li>
                  <li>Secured 3rd position in the QUIZZICH, quizzing event, out of 30 teams, held by EPIC club during Exordia</li>
                  <li>Achieved 1st position in school in International Mathematics Olympiad in class 9</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;