import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const experiences = [
  {
    id: 1,
    company: "Edfora",
    role: "Product Manager",
    period: "February 2023 - Present",
    achievements: [
      "Managed the overhaul of the Stakeholder App, resulting in a 90% surge in user engagement, evidenced by a substantial increase in time spent on the platform.",
      "Utilized advanced data analytics and algorithms, to assess the students' transformative potential using historical data of past top performers.",
      "Designed an EdTech application for students below class 8, increasing Weekly Active Users (WAU) by 15% and Monthly Active Users (MAU) by 22%.",
      "Enhanced the algorithm to generate tests from a comprehensive question bank, resulting in 30% increase in test accuracy and relevancy.",
      "Developed Adaptive learning model in the exam module perfecting the scoring capability of the students by 30%.",
      "Created an AI tool to summarize PDF books, audio and videos, improving student's revision efficiency by 25%.",
      "Spearheaded the development and implementation of Gamification for the student application leading to a 27% increase in Adoption metrics and a 20% increase in Retention metrics"
    ]
  },
  {
    id: 2,
    company: "Nazdik",
    role: "Co-Founder, Product Consultant",
    period: "September 2022 - January 2023",
    achievements: [
      "Spearheaded the development of the Nazdik mobile and web applications catering to both retailers and consumers.",
      "Created a Hyperlocal marketplace to enable customers to find all the products and services from local retailers and service providers.",
      "Delivered a 20% boost in merchant sign-ups by executing targeted Facebook marketing campaigns and outreach initiatives within specific user groups.",
      "Deployed analytics tools such as UXCam, Inspectlet and Google analytics to enrich the product journey, resulting in a 15% increase in average session duration",
      "Successfully onboarded over 1000 merchants onto the platform, resulting in a catalog featuring > 20,000 items",
      "Successfully ran campaigns via Google Ads & Facebook Ads, achieving a 25% mom increase in user acquisition."
    ]
  },
  {
    id: 3,
    company: "Leadsquared",
    role: "Product Manager",
    period: "August 2021 - September 2022",
    achievements: [
      "Led the development of forms and processes for the CRM App as part of the Sales Workflow division.",
      "Implemented flow adjustments on the Payment Page, reducing payment failures from 5% to less than 1% on forms and portals.",
      "Introduced feature weighing and other parameters, optimizing the Roadmap and improving feature deployment efficiency by 15%.",
      "Optimized APIs & Webhooks to reduce payment failures by 20% and enhancing transaction reliability.",
      "Optimized the User authentication and login to improve the registration rate on portals by 12%",
      "Improved resolve rate & resolution time for tickets by 20%",
      "Created a new Pricing structure for Forms and Processes, increasing revenue from 25%."
    ]
  },
  {
    id: 4,
    company: "Click Labs",
    role: "Product Manager",
    period: "April 2019 - July 2021",
    achievements: [
      "As Product Manager led a team of 12 members while successfully designing, developing and launching SAAS products named Husky freelancer marketplace (0→1) and Juggernaut ERP (HRMS, Circle POS, WMS)",
      "Developed Business worth over USD 1 million by converting 150+ potential customers from across the world.",
      "Administered the Agile/Scrum processes, including daily scrum, Sprint planning and Retrospective increasing team productivity by 25%.",
      "Launched mobile & tablet apps for POS, HRMS & Husky by defining and designing the end-to-end user journey.",
      "Worked on Projects on ERP Implementation, Retail Infrastructure services, Split Payment journeys, E-commerce, Warehouse management Services, Attendance & Leave Management, Hiring & Payroll Management",
      "Implemented the ERP solutions in the company in Hiring and Payroll Department, Administration – Procurement and Inventory Management, Project Management, CRM and Customer Support Team for ticketing reducing operational cost by 15%.",
      "Facilitated the integration of products with tools like SkuVault(inventory), Yelo(e-comm), Tookan(delivery), Stripe, PayPal (payment gateway) for different use cases."
    ]
  }
];

const Experience = () => {
  const [expandedId, setExpandedId] = useState(1);
  
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };
  
  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Professional Experience</h2>
          
          <div className="timeline">
            {experiences.map((exp) => (
              <div 
                key={exp.id} 
                className={`timeline-item ${expandedId === exp.id ? 'expanded' : ''}`}
              >
                <div className="timeline-marker">
                  <FaBriefcase />
                </div>
                
                <div className="timeline-content">
                  <div className="timeline-header" onClick={() => toggleExpand(exp.id)}>
                    <h3>{exp.company}</h3>
                    <p className="timeline-role">{exp.role}</p>
                    <p className="timeline-period">{exp.period}</p>
                    <button className="expand-btn">
                      {expandedId === exp.id ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  </div>
                  
                  {expandedId === exp.id && (
                    <motion.div 
                      className="timeline-details"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ul>
                        {exp.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;