import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="education">
      <h2>Education</h2>

      <div className="education-container">

        {/* College */}
        <div className="education-card">
          <FaGraduationCap className="edu-icon" />
          <h3>Bachelor of Engineering in Computer Science</h3>
          <a href="https://nce.ac.in/" target="_blank" rel="noopener noreferrer">
            <p>Nellai College of Engineering</p>
          </a>
          <span>2021 - 2025</span>
        </div>

        {/* School */}
        <div className="education-card">
          <FaGraduationCap className="edu-icon" />
          <h3>Higher Secondary (12th)</h3>
          <a href="https://schools.org.in/tirunelveli/33292002105/st-johns-hss-palayamkottai.html" target="_blank" rel="noopener noreferrer">
            <p>St John's Higher Secondary School</p>
          </a>
          <span>2019 - 2021</span>
        </div>

        <div className="education-card">
            <FaGraduationCap className="edu-icon" />   
            <h3>Secondary School (10th)</h3>
            <a href="https://schools.org.in/thoothukkudi/33280201702/meera-mat-school-arampannai.html" target="_blank" rel="noopener noreferrer">
              <p>Meera Matriculation School</p>
            </a>
            <span>2019</span>
        </div>

      </div>
    </section>
  );
};

export default Education;