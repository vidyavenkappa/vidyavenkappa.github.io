import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch data from JSON
  useEffect(() => {
    fetch('/projectsData.json')
      .then(response => response.json())
      .then(data => {
        setProjects(data.projects);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading project data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="loading-message">Loading project data...</p>;
  if (!projects.length) return <p className="error-message">No project data found.</p>;

  // Filter projects based on search input
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Load more projects
  const handleShowMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section className="projects-section">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
          <p>Explore my portfolio of research and development projects in AI, security, and ML.</p>
        </div>

        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <i className="fas fa-search search-icon"></i>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.slice(0, visibleProjects).map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-img">
                <img src={`${process.env.PUBLIC_URL+project.image}`} alt={project.title} />
                {project.type === 'research' && <div className={`project-type`}>
                   Research
                </div>}
              </div>
              <div className="project-content">
                <div className="project-date">{project.date}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="load-more">
            <button className="load-more-btn" onClick={handleShowMore}>
              Load More <i className="fas fa-angle-down"></i>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
