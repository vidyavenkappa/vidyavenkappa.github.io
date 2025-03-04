import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Software Engineer & Data Scientist with a passion for innovation</p>
        </div>
        
        <div className="about-intro">
          <h4>Hello, I'm Vidya Venkappa</h4>
          <p className="about-tagline">Building innovative solutions with 5+ years of experience in data integration, scalable pipelines, and actionable insights.</p>
        </div>
            
        <div className="about-container">
          <div className="about-image-container">
            <div className="about-image">
              <img src={`${process.env.PUBLIC_URL}/assets/about.png`} alt="Vidya Venkappa" />
            </div>
           
          </div>
          
          <div className="about-content">
            
            <p>I am a dedicated Software Engineer and Data Scientist with extensive experience in developing enterprise-grade solutions. My expertise spans backend development, machine learning, cloud services, and frontend frameworks. I'm passionate about creating efficient systems that transform complex data into valuable insights.</p>
      
           
            <p>Currently pursuing a Master of Science in Information Systems at the University of Washington's Foster School of Business, I'm expanding my knowledge while applying my skills in real-world scenarios. My background includes a previous master's degree from the prestigious Indian Institute of Science (IISc) in Data Science and Business Analytics.</p>
         
          
            
            <div className="about-cta">
              <Link to="/contact" className="btn">Get In Touch</Link>
              <Link to={`${process.env.PUBLIC_URL}/resume.pdf`}  className="btn " target="_blank" rel="noopener noreferrer">Download Resume</Link>
            </div>
          </div>
        </div>
        <div className="about-stats-container">
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-code"></i>
              </div>
              <div className="stat-count">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <div className="stat-count">25+</div>
              <div className="stat-label">Projects</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-award"></i>
              </div>
              <div className="stat-count">25+</div>
              <div className="stat-label">Recognitions</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="stat-count">1000+</div>
              <div className="stat-label">Users Impacted</div>
            </div>
          </div>
        </div>
        
        <div className="testimonials">
          <h3 className="testimonials-title">What Colleagues Say</h3>
          <div className="testimonials-container">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Vidya is an exceptional engineer with a talent for developing elegant solutions to complex problems. Her work on our chatbot framework significantly improved user experience and adoption."</p>
              </div>
              <div className="testimonial-author">
                {/* <div className="testimonial-author-img">
                  <img src="/api/placeholder/60/60" alt="Testimonial Author" />
                </div> */}
                <div className="testimonial-author-info">
                  <h4>John Smith</h4>
                  <p>Engineering Manager, Cisco</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Working with Vidya on the RAG pipeline project was a great experience. Her technical expertise and problem-solving abilities made a significant impact on our team's success."</p>
              </div>
              <div className="testimonial-author">
                {/* <div className="testimonial-author-img">
                  <img src="/api/placeholder/60/60" alt="Testimonial Author" />
                </div> */}
                <div className="testimonial-author-info">
                  <h4>Sarah Johnson</h4>
                  <p>Data Scientist, Microsoft</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;