// import React, { useEffect, useRef, useState } from 'react';
// import { Link } from 'react-router-dom';
// import profileImg from '../assets/profile.jpeg'; // Import your profile image
// import './Home.css';

// const Home = () => {
//   const videoRef = useRef(null);
//   const [text, setText] = useState('');
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [loopNum, setLoopNum] = useState(0);
//   const [typingSpeed, setTypingSpeed] = useState(150);
  
//   const textArray = [
    
//     "Graduate Student at University of Washington",
//     "Indian Institute of Science Alumni"
//   ];

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = 0.7; // Slow down the video a bit
//     }
//   }, []);
  
//   useEffect(() => {
//     const handleTyping = () => {
//       const current = loopNum % textArray.length;
//       const fullText = textArray[current];
      
//       setText(
//         isDeleting 
//           ? fullText.substring(0, text.length - 1) 
//           : fullText.substring(0, text.length + 1)
//       );
      
//       if (!isDeleting && text === fullText) {
//         // After typing full text, pause and then start deleting
//         setTimeout(() => setIsDeleting(true), 1500);
//         setTypingSpeed(100); // Faster typing speed for deleting
//       } else if (isDeleting && text === '') {
//         // After deleting, move to next text
//         setIsDeleting(false);
//         setLoopNum(loopNum + 1);
//         setTypingSpeed(150); // Normal typing speed
//       }
//     };
    
//     const timer = setTimeout(handleTyping, typingSpeed);
//     return () => clearTimeout(timer);
//   }, [text, isDeleting, loopNum, typingSpeed, textArray]);

//   return (
//     <section id="home" className="hero">
//       {/* Video background */}
//       <video 
//         ref={videoRef}
//         autoPlay 
//         muted 
//         loop 
//         className="video-background"
//       >
//         <source src="./assets/video.gif" type="video/gif" />
//         {/* Fallback for browsers that don't support video */}
//         Your browser does not support the video tag.
//       </video>
      
//       {/* Overlay */}
//       <div className="overlay"></div>
      
//       <div className="hero-content">
//         <div className="profile-image">
//           <img src={profileImg} alt="Vidya Venkappa" />
//         </div>
//         <div>Hey, I am Vidya Venkappa</div>
        
//         <div className="typing-container">
//           <h1 className="typing-text">{text}<span className="cursor">|</span></h1>
//         </div>
        
//         <p className="hero-text fade-in-up">
//           Building innovative solutions with 5+ years of experience in data integration, 
//           scalable pipelines, and actionable insights.
//         </p>
//         <div className="hero-buttons fade-in-up">
//           <Link to="/projects" className="btn">
//             View My Projects
//           </Link>
//           <Link to="/blog" className="btn btn-outline">
//             Read My Blog
//           </Link>
//         </div>
//         <div className="social-links fade-in-up">
//           <a href="https://www.linkedin.com/in/vidya-venkappa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//             <i className="fab fa-linkedin"></i>
//           </a>
//           <a href="https://github.com/vidyavenkappa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
//             <i className="fab fa-github"></i>
//           </a>
//           <a href="mailto:vivenkap@uw.edu" aria-label="Email">
//             <i className="fas fa-envelope"></i>
//           </a>
//         </div>
//       </div>
      
//       <div className="scroll-indicator">
//         <span className="mouse">
//           <span className="mouse-wheel"></span>
//         </span>
//         <p>Scroll Down</p>
//       </div>
//     </section>
//   );
// };

// export default Home;

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const videoRef = useRef(null);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  const textArray = [
    "Graduate Student at University of Washington",
    "Indian Institute of Science Alumni"
  ];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Slow down the video a bit
    }
  }, []);
  
  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % textArray.length;
      const fullText = textArray[current];
      
      setText(
        isDeleting 
          ? fullText.substring(0, text.length - 1) 
          : fullText.substring(0, text.length + 1)
      );
      
      if (!isDeleting && text === fullText) {
        // After typing full text, pause and then start deleting
        setTimeout(() => setIsDeleting(true), 1500);
        setTypingSpeed(100); // Faster typing speed for deleting
      } else if (isDeleting && text === '') {
        // After deleting, move to next text
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150); // Normal typing speed
      }
    };
    
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, textArray]);

  return (
    <section id="home" className="hero">
      {/* Video background */}
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        className="video-background"
      >
        <source src={`${process.env.PUBLIC_URL}/assets/video.mp4`} type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div className="overlay"></div>
      
      <div className="hero-content">
        <div className="profile-image">
          <img src={`${process.env.PUBLIC_URL}/assets/profile.jpeg`} alt="Vidya Venkappa" />
        </div>
        <div className="greeting">Hey, I am Vidya Venkappa</div>
        
        <div className="typing-container">
          <h1 className="typing-text">{text}<span className="cursor">|</span></h1>
        </div>
        
        <p className="hero-text fade-in-up">
          Building innovative solutions with 5+ years of experience in data integration, 
          scalable pipelines, and actionable insights.
        </p>
        <div className="hero-buttons fade-in-up">
          <Link to="/projects" className="btn">
            View My Projects
          </Link>
          <Link to="/blog" className="btn">
            Read My Blog
          </Link>
          <Link to={`${process.env.PUBLIC_URL}/resume.pdf`}  className="btn">
            View My Resume
          </Link>
        </div>
      </div>
      
     
    </section>
  );
};

export default Home;
