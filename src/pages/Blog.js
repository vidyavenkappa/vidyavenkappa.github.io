import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/blogData.json')
      .then(response => response.json())
      .then(data => setBlogs(data.blogs))
      .catch(error => console.error("Error loading blogs:", error));
  }, []);

  const filteredBlogs = blogs.filter(blog => {
    const matchesCategory = filter === 'all' || blog.category === filter;
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="section-title">
          <h2>My Blog</h2>
          <p>Insights, tutorials, and thoughts on technology and data science</p>
        </div>

        <div className="blog-filters">
          <div className="tabs-container">
            <div className="tabs">
              {["all", "tech", "data-science", "security", "career"].map((category) => (
                <div 
                  key={category} 
                  className={`tab ${filter === category ? 'active' : ''}`} 
                  onClick={() => setFilter(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </div>
              ))}
            </div>
          </div>
          
          <div className="search-container">
            <input
              type="text"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <i className="fas fa-search search-icon"></i>
          </div>
        </div>

        {filteredBlogs.length > 0 ? (
          <div className="blog-grid">
            {filteredBlogs.map((blog) => (
              <div key={blog.id} className="blog-card">
                <div className="blog-img">
                  <img src={`${process.env.PUBLIC_URL + blog.image}`} alt={blog.title} />
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">{blog.date}</span>
                    <span className="blog-category">{blog.category}</span>
                  </div>
                  <h3 className="blog-title">{blog.title}</h3>
                  <p className="blog-excerpt">{blog.excerpt}</p>
                  <div className="blog-tags">
                    {blog.tags.map((tag, index) => (
                      <span key={index} className="blog-tag">{tag}</span>
                    ))}
                  </div>
                  <Link to={`/blog/${blog.id}`} className="blog-read-more">
                    Read More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-blogs-found">
            <i className="fas fa-search fa-3x"></i>
            <h3>No blogs found</h3>
            <p>Try changing your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
