import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/pp.jpeg'

class Sidebar extends Component {
    render() {

        return (
            <div className="sidebar">
                {/* <div style={{ color: 'black', fontWeight: 'bold' }} className="tagtop"> # programmer_life </div>
                <div style={{ color: 'black', fontWeight: 'bold' }} className=""> # hello_world </div>
                <div style={{ color: 'black', fontWeight: 'bold' }} className=""> # coding </div> */}
                <div><h1><Link smooth to="/#start" className="h1_links">Vidya Venkappa</Link> </h1>
                <h5>(She/Her)</h5></div>
                

                <img src={logo} />
                <p style={{ color: 'black', fontWeight: 'bold' }} className="gmail"><a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftvBffjPmxWxvfHWRHWnhTbpQgPxBxvkcnPpFpFqbhrXMCHXSJTsCXCVLsQzgRcVLpnPL" rel="opener noreferrer" target="_blank" className="fa fa-envelope"></a> vidyavenkappa@gmail.com </p>

                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items"><Link smooth to="/#about" className="links">About</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#education" className="links" >Education</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#interest" className="links">Work Experience</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#projects" className="links">Projects</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#research" className="links">Research</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#award" className="links">Awards</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#hobbies" className="links">Volunteering</Link></li>
                    
                    {/* <li className="sidebar-nav-items"><a href="http://www.bloggingpeek.com" target="_blank" rel="opener noreferrer" className="links"> Blog<FiExternalLink/></a></li> */}
                </ul>

                <div className="flip-card-back">
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-icons"> <a href="https://github.com/vidyavenkappa" rel="opener noreferrer" target="_blank" className="fa fas fa-github fa-lg"></a></li>
                        <li className="sidebar-nav-icons"><a href="https://www.linkedin.com/in/vidya-venkappa-16ba18112" rel="opener noreferrer" target="_blank" className="fa fas fa-linkedin fa-lg"></a></li>
                        <li className="sidebar-nav-icons"> <a href="mailto:vidyavenkappa@gmail.com" rel="opener noreferrer" target="_blank" className="fa fas fa-envelope fa-lg"></a></li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default Sidebar