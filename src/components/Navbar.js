import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo with Icon */}
        <Link to="/" className="logo">
          <img  src={`${process.env.PUBLIC_URL+"/assets/about.png"}`}alt="Logo" className="logo-icon" />
        </Link>

        <div 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={menuOpen ? 'active' : ''}>
          <ul>
            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
            <li><Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>Skills</Link></li>
            <li><Link to="/experience" className={location.pathname === '/experience' ? 'active' : ''}>Experience</Link></li>
            <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
            <li><Link to="/blog" className={location.pathname === '/blog' || location.pathname.includes('/blog/') ? 'active' : ''}>Blog</Link></li>
            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
