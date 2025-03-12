import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaPaperPlane, FaSpinner } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    setFormStatus({
      submitting: true,
      submitted: false,
      error: null
    });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitting: false,
          submitted: false,
          error: null
        });
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          
          <div className="contact-container">
            <div className="contact-info">
              <h3>Contact Information</h3>
              
              <div className="contact-details">
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:pd.sumeet@gmail.com">pd.sumeet@gmail.com</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+918123209294">+91 8123209294</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <FaLinkedin className="contact-icon" />
                  <div>
                    <h4>LinkedIn</h4>
                    <a href="https://www.linkedin.com/in/sumeet-kumar-2466b3105/" target="_blank" rel="noopener noreferrer">
                      Connect with me
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="contact-availability">
                <h4>Available For</h4>
                <ul>
                  <li>Full-time opportunities</li>
                  <li>Product consulting</li>
                  <li>Speaking engagements</li>
                  <li>Mentorship</li>
                </ul>
              </div>
            </div>
            
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={formStatus.submitting || formStatus.submitted}
                >
                  {formStatus.submitting ? (
                    <>
                      <FaSpinner className="spinner" />
                      Sending...
                    </>
                  ) : formStatus.submitted ? (
                    <>
                      <FaPaperPlane />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
                
                {formStatus.error && (
                  <div className="form-error">
                    {formStatus.error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;