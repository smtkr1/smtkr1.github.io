import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Sumeet Kumar</h3>
            <p>Product Manager</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>
                <FaEnvelope />
                <a href="mailto:pd.sumeet@gmail.com">pd.sumeet@gmail.com</a>
              </li>
              <li>
                <FaPhone />
                <a href="tel:+918123209294">+91 8123209294</a>
              </li>
              <li>
                <FaLinkedin />
                <a href="https://www.linkedin.com/in/sumeet-kumar-2466b3105/" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sumeet Kumar. All Rights Reserved.</p>
          
          <button className="scroll-top-btn" onClick={scrollToTop}>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
