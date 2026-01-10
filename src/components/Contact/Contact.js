import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaFacebook } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'mdabu-2021911202@cs.du.ac.bd',
      link: 'mailto:mdabu-2021911202@cs.du.ac.bd'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+880 1751 777543',
      link: 'tel:+8801751777543'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Dhaka, Bangladesh',
      link: null
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-title fade-in-up">
          <h2>Get In Touch</h2>
          <p>Feel free to reach out for collaborations or just a friendly chat</p>
        </div>

        <div className="contact-content">
          <div className="contact-info slide-in-left">
            <h3>Contact Information</h3>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div className="contact-item" key={index}>
                  <div className="contact-icon">{info.icon}</div>
                  <div>
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link}>{info.value}</a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-social">
              <h4>Follow Me</h4>
              <div className="social-links">
                <a href="https://github.com/puHoraira" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://www.facebook.com/i.horAIRA.11.01" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
