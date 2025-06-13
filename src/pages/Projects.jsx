import React from 'react';
import './Section.css';

const projectList = [
  {
    title: 'E-Commerce App',
    description: 'A full-stack e-commerce platform by showing what are the stores having in the malls, shops, games, and Movie shows.',
    tech: 'React js',
    link: 'https://virtual-mall-three.vercel.app/',
  },
  {
    title: 'Event Planner App',
    description: 'Frontend-only React app with animated event pages, RSVP system, and Google Maps integration.',
    tech: 'React, CSS, React Router',
    link: '#',
  },
  {
    title: 'Live Code Execution Platform with Judge0 & MongoDB',
    description: 'Enhanced a full-stack code editor using React.js, CodeMirror, and Node.js to support real-time execution of JavaScript,Python, C++, and Java via the Judge0 API, improving language support coverage by 60%. Integrated asynchronous token-based polling for result fetching, boosting execution reliability and reducing UI response time by 40%. ',  
    tech: 'React.js, Node.js, MongoDB, Judge0 API,Postman',
    link: '#',
  },
  {
    title: 'Wrong Posture Detector',
    description: 'Developed a Muscle Strain Detection Device, designed to help individuals prevent back pain by monitoring muscle strain in real-time.The device uses ultrasonic sensors to track posture and body positioning, alerting users when poor posture is detected. This helps in reducing strain on muscles and preventing long-term back issues.  ',
    tech: 'NodeMCU, Buzzers, Ultrasonic Sensors, C++',
    
  },
  {
    title: 'Exports',
    description: 'Developed a responsive exports management website that streamlines package requests and delivery coordination. The platform features a form submission system where customers provide package details, and assigned employees handle package collection and processing. The system ensures efficient tracking and seamless communication between customers and employees.  ',
    tech: 'Html, Css, JavaScript',
    link: 'https://nithin123t.github.io/Export-Package-project/',
  },
  {
    title: 'Mental-Health-Resource-Hub',
    description: 'Developed a Mental Health Resource Hub, a website designed to provide personalized health recommendations and mental wellness resources for individuals seeking support and provided Articles, Exercises and also mainly Contact with customers. The platform offers expert-curated content, self assessment tools, and professional recommendations to help users maintain both their physical and mental well-being.  ',
    tech: 'React',
    link: 'https://mental-health-resource-hub-qnzl.vercel.app/',
  },
  {
    title: 'Online Food Delivery',
    description: 'Designed and developed an Online Food Delivery platform with features like food pricing, specials, featured items, and detailed descriptions. Implemented key pages including Home, About, Contact Us, and dynamic food item details for an enhanced user experience and added the order to order the food. ',
    tech: 'Html, Css, JavaScript',
    link: 'https://nithin123t.github.io/Recipes/',
  }
];

const Projects = () => {
  return (
    <div className="section">
      <div className="section-content animate-fade">
        <h1>💼 Projects</h1>
        <div className="projects-container">
          {projectList.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p><strong>Tech Stack:</strong> {project.tech}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">🔗 View Project</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
