// import React, { useState } from 'react';
// import './Contact.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const [formErrors, setFormErrors] = useState({});
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [formSubmitting, setFormSubmitting] = useState(false);

//   const validateForm = () => {
//     const errors = {};

//     if (!formData.name.trim()) {
//       errors.name = 'Name is required';
//     }

//     if (!formData.email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = 'Invalid email format';
//     }

//     if (!formData.subject.trim()) {
//       errors.subject = 'Subject is required';
//     }

//     if (!formData.message.trim()) {
//       errors.message = 'Message is required';
//     }

//     setFormErrors(errors);
//     return Object.keys(errors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     // Clear errors on input change
//     if (formErrors[name]) {
//       setFormErrors({ ...formErrors, [name]: '' });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       setFormSubmitting(true);

//       setTimeout(() => {
//         console.log('Form submitted:', formData);
//         setFormSubmitting(false);
//         setFormSubmitted(true);

//         // Reset form
//         setFormData({
//           name: '',
//           email: '',
//           subject: '',
//           message: ''
//         });

//         // Reset success message after 5 seconds
//         setTimeout(() => {
//           setFormSubmitted(false);
//         }, 5000);
//       }, 2000);
//     }
//   };

//   return (
//     <section id="contact" className="contact-section">
//       <div className="container">
//         <div className="section-title">
//           <h2>Let's Connect</h2>
//           <p>Have a question or want to collaborate? Drop me a message!</p>
//         </div>

//         <div className="contact-content">
//           {/* Left Side Contact Info */}
//           <div className="contact-info">
//             <div className="contact-item">
//               <i className="fas fa-envelope"></i>
//               <p>Email</p>
//               <a href="mailto:vivenkap@uw.edu">vivenkap@uw.edu</a>
//             </div>
//             <div className="contact-item">
//               <i className="fas fa-map-marker-alt"></i>
//               <p>Location</p>
//               <span>Seattle, Washington</span>
//             </div>
//             <div className="contact-item">
//               <i className="fab fa-linkedin"></i>
//               <p>LinkedIn</p>
//               <a href="https://www.linkedin.com/in/vidya-venkappa/" target="_blank" rel="noopener noreferrer">Visit Profile</a>
//             </div>
//           </div>

//           {/* Right Side Contact Form */}
//           <div className="contact-form">
//             {formSubmitted && (
//               <div className="form-success">
//                 <i className="fas fa-check-circle"></i>
//                 <p>Your message has been sent successfully!</p>
//               </div>
//             )}

//             <form onSubmit={handleSubmit}>
//               <div className="input-group">
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your Name"
//                   className={formErrors.name ? 'error' : ''}
//                   disabled={formSubmitting}
//                 />
//                 <span className="error-message">{formErrors.name}</span>
//               </div>

//               <div className="input-group">
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Your Email"
//                   className={formErrors.email ? 'error' : ''}
//                   disabled={formSubmitting}
//                 />
//                 <span className="error-message">{formErrors.email}</span>
//               </div>

//               <div className="input-group">
//                 <input
//                   type="text"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   placeholder="Subject"
//                   className={formErrors.subject ? 'error' : ''}
//                   disabled={formSubmitting}
//                 />
//                 <span className="error-message">{formErrors.subject}</span>
//               </div>

//               <div className="input-group">
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Your Message"
//                   className={formErrors.message ? 'error' : ''}
//                   rows="5"
//                   disabled={formSubmitting}
//                 ></textarea>
//                 <span className="error-message">{formErrors.message}</span>
//               </div>

//               <button type="submit" className={`submit-btn ${formSubmitting ? 'submitting' : ''}`} disabled={formSubmitting}>
//                 {formSubmitting ? (
//                   <>
//                     <span className="spinner"></span> Sending...
//                   </>
//                 ) : 'Send Message'}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear errors on input change
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setFormSubmitting(true);

      setTimeout(() => {
        console.log('Form submitted:', formData);
        setFormSubmitting(false);
        setFormSubmitted(true);

        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      }, 2000);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-title">
          <h2>Let's Connect</h2>
          <p>Have a question or want to collaborate? Drop me a message!</p>
        </div>

        <div className="contact-content">
          {/* Left Side Contact Info */}
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>Email</p>
              <a href="mailto:vivenkap@uw.edu">vivenkap@uw.edu</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>Location</p>
              <span>Seattle, Washington</span>
            </div>
            <div className="contact-item">
              <i className="fab fa-linkedin"></i>
              <p>LinkedIn</p>
              <a href="https://www.linkedin.com/in/vidya-venkappa/" target="_blank" rel="noopener noreferrer">Visit Profile</a>
            </div>
            <div className="contact-item">
              <i className="fab fa-github"></i>
              <p>GitHub</p>
              <a href="https://github.com/vidyavenkappa" target="_blank" rel="noopener noreferrer">View Projects</a>
            </div>
          </div>

          {/* Right Side Contact Form */}
          <div className="contact-form">
            {formSubmitted && (
              <div className="form-success">
                <i className="fas fa-check-circle"></i>
                <p>Your message has been sent successfully!</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={formErrors.name ? 'error' : ''}
                  disabled={formSubmitting}
                  aria-label="Your Name"
                />
                <span className="error-message">{formErrors.name}</span>
              </div>

              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={formErrors.email ? 'error' : ''}
                  disabled={formSubmitting}
                  aria-label="Your Email"
                />
                <span className="error-message">{formErrors.email}</span>
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className={formErrors.subject ? 'error' : ''}
                  disabled={formSubmitting}
                  aria-label="Subject"
                />
                <span className="error-message">{formErrors.subject}</span>
              </div>

              <div className="input-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className={formErrors.message ? 'error' : ''}
                  rows="5"
                  disabled={formSubmitting}
                  aria-label="Your Message"
                ></textarea>
                <span className="error-message">{formErrors.message}</span>
              </div>

              <button type="submit" className={`submit-btn ${formSubmitting ? 'submitting' : ''}`} disabled={formSubmitting}>
                {formSubmitting ? (
                  <>
                    <span className="spinner"></span> Sending...
                  </>
                ) : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
