import React from 'react';
import './Section.css';

const Resume = () => {
  return (
    <div className="section">
      <div className="section-content animate-fade">
        <h1>📄 My Resume</h1>
        <p>You can view or download my resume below.</p>

        <div className="resume-buttons">
          <a
            href="src\pages\T.N.R.pdf" // Place resume.pdf in your public folder
            download
            className="resume-btn"
          >
            ⬇️ Download Resume
          </a>
          <a
            href="src\pages\T.N.R.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn outline"
          >
            👁️ View Online
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
