import React from 'react';
import './Section.css';

const skillsData = {
  'Frontend': ['React.js', 'HTML5', 'CSS3', 'JavaScript', 'Vite', 'Responsive Design'],
  'Backend': ['Node.js', 'Express.js', 'MongoDB', 'JWT Auth'],
  'Tools & Libraries': ['Git & GitHub', 'VS Code', 'Postman', 'Nodemon', 'npm/yarn'],
  'Data Science': ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
};

const Skills = () => {
  return (
    <div className="section">
      <div className="section-content animate-fade">
        <h1>🧠 My Skills</h1>
        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills], idx) => (
            <div className="skill-card" key={idx}>
              <h3>{category}</h3>
              <ul>
                {skills.map((skill, i) => (
                  <li key={i}>✅ {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
