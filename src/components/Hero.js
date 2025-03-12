import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-text">
            <h1>Sumeet Kumar</h1>
            <h2>Product Manager</h2>
            <p>
              Transforming business challenges into innovative product solutions with 
              a data-driven approach and technical expertise.
            </p>
            
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="#projects" className="btn btn-secondary">View My Work</a>
            </div>
            
            <div className="hero-social">
              <a href="https://www.linkedin.com/in/sumeet-kumar-2466b3105/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:pd.sumeet@gmail.com">
                <FaEnvelope />
              </a>
              <a href="tel:+918123209294">
                <FaPhone />
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            {/* Placeholder for profile image */}
            <div className="profile-image-placeholder">
              <span>SK</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="hero-scroll-indicator">
        <a href="#about">
          <div className="scroll-arrow"></div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
