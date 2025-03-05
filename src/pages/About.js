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
                <p>As the product owner for BotLite, I had the pleasure of working closely with Vidya and was consistently impressed by her technical abilities, creative problem-solving, and strong work ethic.

Vidya joined our team as a new UI developer and quickly proved to be an invaluable asset to our product. She has a keen eye for design and is skilled in creating user-friendly interfaces that are both aesthetically pleasing and highly functional. Her ability to work effectively with cross-functional teams, including engineering, design, and product, was instrumental in delivering a high-quality product on time and within budget.

One of Vidya's most significant contributions to BotLite was the user analytics dashboard. She created a visually appealing and intuitive interface that improved the overall user experience and increased user engagement by a significant percentage. Her strong coding skills and attention to detail ensured that the final product was not only beautiful but also highly performant and scalable.

In addition to her technical skills, Vidya is an excellent communicator and team player. She is always willing to lend a helping hand and go above and beyond to ensure the success of a project. Her positive attitude and ability to work under pressure make her a pleasure to work with, and her technical expertise inspires those around her.

I am confident that Vidya will be a valuable asset to any organization!</p>
              </div>
              <div className="testimonial-author">
                {/* <div className="testimonial-author-img">
                  <img src="/api/placeholder/60/60" alt="Testimonial Author" />
                </div> */}
                <div className="testimonial-author-info">
                  <h4>Shruti Holla</h4>
                  <p>Senior Product Manager, Lenovo</p>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p> I am pleased to provide a strong recommendation for Vidya Venkappa, a highly skilled and dedicated professional I had the privilege of working with at Cisco.
 
As a software engineer on our team, Vidya consistently demonstrated a deep understanding in frontend development. Her proficiency in crafting intuitive and engaging UI designs significantly contributed to the success of several key projects. Notably, her work on the building analytics screen for our project, a chatbot framework, showcased not only her technical expertise but also her ability to collaborate effectively in a fast-paced environment.
 
Vidya V consistently goes above and beyond, willingly stepping in to lend a helping hand on various projects. Whether it's providing valuable insights during brainstorming sessions, offering assistance to team members facing challenges, or taking on additional responsibilities to ensure project deadlines are met, Vidya has proven to be an invaluable asset to our collaborative efforts.
 
The proactive approach and eagerness to share the expertise make Vidya a go-to person for troubleshooting and problem-solving. This not only fosters a positive and efficient work environment but also greatly contributes to the overall success of the projects we undertake. I am confident that Vidya will continue to excel and make meaningful contributions wherever her career takes.</p></div>
              <div className="testimonial-author">
                {/* <div className="testimonial-author-img">
                  <img src="/api/placeholder/60/60" alt="Testimonial Author" />
                </div> */}
                <div className="testimonial-author-info">
                  <h4>Rammesh Rajagopal</h4>
                  <p>
                  Director, SECU</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>I have had the pleasure of working closely with Vidya, and I can confidently say that she is an outstanding professional with a deep passion for AI/ML. 

Vidya is a natural leader with the ability to inspire and guide a team, fostering an environment of mutual respect and continuous learning. Her leadership is marked by clear communication, strategic vision, and genuine care for the team. 

In addition to her technical and leadership abilities, Vidya brings a unique blend of creativity and analytical thinking to every project. She has always been at the forefront of integrating AI/ML into the project, driving innovation and excellence.

It has been a privilege to work alongside Vidya, and I am confident that she will continue to make significant contributions to any organization she joins. I highly recommend Vidya for any role that demands a passionate, experienced, and collaborative AI/ML expert with leadership skills.</p>
              </div>
              <div className="testimonial-author">
                {/* <div className="testimonial-author-img">
                  <img src="/api/placeholder/60/60" alt="Testimonial Author" />
                </div> */}
                <div className="testimonial-author-info">
                  <h4>Mohammed Azam</h4>
                  <p>Software Engineer 3, Cisco</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>I had the privilege of working closely with Vidya for over 5 years, during which time she consistently demonstrated exceptional leadership and technical expertise. While starting her career as a Software Engineer at Cisco, Vidya quickly established herself as a leader, driving innovation and team success.
Vidya’s leadership was most evident during the BotLite project, where she not only leveraged her UI/UX design skills but also took charge in guiding the team toward improving user experience. Her expertise in GenAI and AI/ML technologies was instrumental in enhancing the platform’s performance and functionality. Vidya led cross-functional teams, ensuring that all project deliverables were met on time and to the highest standards.
As a natural leader, Vidya is highly adept at aligning technical teams with business objectives, ensuring that everyone works towards a common goal. Her ability to communicate complex concepts and drive collaboration among diverse stakeholders sets her apart. Additionally, her ability to balance both her work and studies while pursuing a Master’s degree at the prestigious Indian Institute of Science is a testament to her commitment and time-management skills.
I highly recommend Vidya for product management roles, where her leadership, technical proficiency, and collaborative mindset will add immense value.</p>
              </div>
              <div className="testimonial-author">
                {/* <div className="testimonial-author-img">
                  <img src="/api/placeholder/60/60" alt="Testimonial Author" />
                </div> */}
                <div className="testimonial-author-info">
                  <h4>Jagdish Bhandhary</h4>
                  <p>Software Engineer Leader, Cisco</p>
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