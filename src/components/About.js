import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaLaptopCode, FaTrophy } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="about-content">
            <div className="about-text">
              <p>
                A seasoned Product Manager with over 5 years of experience managing a wide
                range of products, including ERP, CRM systems, and SaaS Marketplaces in
                multiple disciplines.
              </p>
              
              <p>
                I hold an MBA from IIM Visakhapatnam, specializing in Finance
                and Analytics. I possess technical proficiency in Python and R, coupled
                with advanced skills in MS Excel. Throughout my career, I've demonstrated
                expertise in leading cross-functional teams to drive product success.
              </p>
              
              <p>
                My approach combines technical knowledge, business acumen, and user-centric
                design to create innovative product solutions that drive engagement and deliver
                tangible business results.
              </p>
            </div>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <FaUser className="highlight-icon" />
                <h3>Profile</h3>
                <p>Product Manager with cross-functional leadership</p>
              </div>
              
              <div className="highlight-item">
                <FaGraduationCap className="highlight-icon" />
                <h3>Education</h3>
                <p>MBA from IIM Visakhapatnam</p>
              </div>
              
              <div className="highlight-item">
                <FaLaptopCode className="highlight-icon" />
                <h3>Technical</h3>
                <p>Python, R, SQL, MS Excel</p>
              </div>
              
              <div className="highlight-item">
                <FaTrophy className="highlight-icon" />
                <h3>Achievements</h3>
                <p>Increased user engagement by 90%</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;