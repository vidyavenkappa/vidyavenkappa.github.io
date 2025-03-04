import React, { useEffect, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');
  const [skillsData, setSkillsData] = useState({ technicalSkills: [], softSkills: [], tools: [] });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    fetch('/skillsData.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch skills data');
        }
        return response.json();
      })
      .then(data => {
        setSkillsData(data);
        setAnimated(true); // Trigger animation after data is loaded
      })
      .catch(error => console.error('Error loading skills data:', error));
  }, []);

  return (
    <section className="skills-section">
      <div className="container">
        <div className="section-title">
          <h2>My Skills</h2>
        </div>

        {/* Tab Navigation */}
        <div className="tabs-container">
          <div className="tabs">
            <div 
              className={`tab ${activeTab === 'technical' ? 'active' : ''}`} 
              onClick={() => setActiveTab('technical')}
            >
              <i className="fas fa-code"></i> Technical Skills
            </div>
            <div 
              className={`tab ${activeTab === 'soft' ? 'active' : ''}`} 
              onClick={() => setActiveTab('soft')}
            >
              <i className="fas fa-users"></i> Soft Skills
            </div>
            <div 
              className={`tab ${activeTab === 'tools' ? 'active' : ''}`} 
              onClick={() => setActiveTab('tools')}
            >
              <i className="fas fa-tools"></i> Tools & Software
            </div>
          </div>
        </div>

        <div className="skills-content">
          {activeTab === 'technical' && (
            <div className="skills-grid">
              {skillsData.technicalSkills.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <div className="skill-icon"><i className={skill.icon}></i></div>
                  <div className="skill-info">
                    <h3>{skill.name}</h3>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{
                          width: animated ? `${skill.percentage}%` : '0%',
                          transition: 'width 1s ease-in-out'
                        }}
                      ></div>
                    </div>
                    <div className="skill-percentage">{skill.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'soft' && (
            <div className="skills-grid">
              {skillsData.softSkills.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <div className="skill-icon"><i className={skill.icon}></i></div>
                  <div className="skill-info">
                    <h3>{skill.name}</h3>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{
                          width: animated ? `${skill.percentage}%` : '0%',
                          transition: 'width 1s ease-in-out'
                        }}
                      ></div>
                    </div>
                    <div className="skill-percentage">{skill.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'tools' && (
            <div className="skills-grid">
              {skillsData.tools.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <div className="skill-icon"><i className={skill.icon}></i></div>
                  <div className="skill-info">
                    <h3>{skill.name}</h3>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{
                          width: animated ? `${skill.percentage}%` : '0%',
                          transition: 'width 1s ease-in-out'
                        }}
                      ></div>
                    </div>
                    <div className="skill-percentage">{skill.percentage}%</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
