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
            href="/T.Nithinreddy_Resume.pdf"
            download
            className="resume-btn"
          >
            ⬇️ Download Resume
          </a>
          <a
            href="/T.Nithinreddy_Resume.pdf"
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
