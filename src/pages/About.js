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
            <div className="testimonials-wrapper">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>As the product owner for BotLite, I had the pleasure of working closely with Vidya and was consistently impressed...</p>
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-author-info">
                    <h4>Shruti Holla</h4>
                    <p>Senior Product Manager, Lenovo</p>
                  </div>
                </div>
                <br/>
                <a href="https://www.linkedin.com/in/vidya-venkappa/details/recommendations/" target="_blank" rel="noopener noreferrer" className="btn">
                  Read More
                </a>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>I am pleased to provide a strong recommendation for Vidya Venkappa, a highly skilled and dedicated professional...</p>
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-author-info">
                    <h4>Rammesh Rajagopal</h4>
                    <p>Director, SECU</p>
                  </div>
                </div>
                <br/>
                <a href="https://www.linkedin.com/in/vidya-venkappa/details/recommendations/" target="_blank" rel="noopener noreferrer" className="btn">
                  Read More
                </a>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>I have had the pleasure of working closely with Vidya, and I can confidently say that she is an outstanding professional...</p>
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-author-info">
                    <h4>Mohammed Azam</h4>
                    <p>Software Engineer 3, Cisco</p>
                  </div>
                </div>
                <br/>
                <a href="https://www.linkedin.com/in/vidya-venkappa/details/recommendations/" target="_blank" rel="noopener noreferrer" className="btn">
                  Read More
                </a>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>I had the privilege of working closely with Vidya for over 5 years, during which time she consistently demonstrated exceptional leadership...</p>
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-author-info">
                    <h4>Jagdish Bhandhary</h4>
                    <p>Software Engineer Leader, Cisco</p>
                  </div>
                </div>
                <br/>
                <a href="https://www.linkedin.com/in/vidya-venkappa/details/recommendations/" target="_blank" rel="noopener noreferrer" className="btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;