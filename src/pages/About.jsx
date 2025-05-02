// About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './About.css'; // optional, if you want to separate styles

const About = () => {
  return (
    <motion.div
      className="about section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="heading">About Me</h2>
      <p className="subheading">
        I’m a <span className="highlight">Full Stack Developer</span> passionate about building scalable, performant, and beautiful web applications.
      </p>

      <div className="card">
        <p>
          With a background in computer science and a love for design and logic, I’ve been developing
          modern web applications using <span className="highlight">React.js</span>, <span className="highlight">python, Machine Learning</span>,
          and other cutting-edge technologies.
        </p>
        <br />
        <p>
          My goal is to deliver clean, efficient, and user-focused digital experiences while constantly
          learning and evolving in the tech space.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
