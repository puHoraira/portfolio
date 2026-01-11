import React from 'react';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  return (
    <section className="education" id="education">
      <div className="container">
        <div className="section-title fade-in-up">
          <h2>Education</h2>
          <p>My academic journey and achievements</p>
        </div>

        <div className="education-content">
          <div className="education-card card fade-in-up">
            <div className="edu-icon">
              <FaGraduationCap />
            </div>
            <div className="edu-content">
              <span className="edu-period">2022 - Present</span>
              <h3>B.Sc. in Computer Science & Engineering</h3>
              <div className="edu-institution">
                <FaUniversity />
                <span>University of Dhaka</span>
              </div>
              <p className="edu-location">Dhaka, Bangladesh</p>
              <p className="edu-expected">Expected Graduation: December 2026</p>
              <div className="edu-grade">
                <span className="grade-label">CGPA (till 3rd year, 1st semester):</span>
                <span className="grade-value">3.83 / 4.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
