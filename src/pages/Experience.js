import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    fetch('/experienceData.json')
      .then(response => response.json())
      .then(data => {
        setTimelineData(data.timeline);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading experience data:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loading) return <p className="loading-message">Loading experience data...</p>;
  if (!timelineData.length) return <p className="error-message">No data available.</p>;

  return (
    <section className="experience-section">
      <div className="container">
        <div className="section-title">
          <h2>Professional Journey</h2>
          <p>Explore my work experience and educational background</p>
        </div>

        {/* Tab Navigation */}
        <div className="tabs-container">
          <div className="tabs">
            <div 
              className={`tab ${activeTab === 'work' ? 'active' : ''}`} 
              onClick={() => setActiveTab('work')}
            >
              <i className="fas fa-briefcase"></i> Work Experience
            </div>
            <div 
              className={`tab ${activeTab === 'education' ? 'active' : ''}`} 
              onClick={() => setActiveTab('education')}
            >
              <i className="fas fa-graduation-cap"></i> Education
            </div>
          </div>
        </div>

        {/* Timeline Layout - Displayed only for Non-Mobile Screens */}
        {!isMobile ? (
          <div className="timeline">
            {timelineData
              .filter(item => item.type === activeTab)
              .map((item, index) => (
                <motion.div 
                  className={`timeline-item right`} 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">
                    <span className="timeline-date-text">{item.duration}</span>
                  </div>
                  <div className="timeline-content">
                    {item.type === 'work' ? (
                      <>
                        <h3>{item.role}</h3>
                        <div className="timeline-company">
                          <img src={`${process.env.PUBLIC_URL + item.logo}`} alt={`${item.company} Logo`} className="company-logo" />
                          <span>{item.company}</span>
                        </div>
                        <ul className="timeline-achievements">
                          {item.achievements.map((achievement, i) => (
                            <li key={i}><i className="fas fa-check-circle"></i> {achievement}</li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <>
                        <h3>{item.degree}</h3>
                        <div className="timeline-company">
                          <img src={`${process.env.PUBLIC_URL + item.logo}`} alt={`${item.institution} Logo`} className="company-logo" />
                          <span>{item.institution}</span>
                        </div>
                        <p>{item.details}</p>
                        {item.gpa && <p className="gpa-highlight">GPA: {item.gpa}</p>}
                      </>
                    )}
                    <div className="timeline-skills">
                      {item.skills.map((skill, i) => <span key={i}>{skill}</span>)}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        ) : (
          <div className="mobile-experience-list">
            {timelineData.filter(item => item.type === activeTab).map((item, index) => (
              <div key={index} className="mobile-experience-item timeline-content">
                <h3>{item.type === 'work' ? item.role : item.degree}</h3>
                <p>{item.type === 'work' ? item.company : item.institution}</p>
                <span>{item.duration}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
