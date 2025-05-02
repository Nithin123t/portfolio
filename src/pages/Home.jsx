import React from 'react';
import { motion } from 'framer-motion';
import Cube from '../components/Cube';
import Typewriter from 'typewriter-effect';
import profileImg from '../assets/passphoto-removebg-preview.png'; // ✅ Use relative path
import './Home.css'; // Custom styles

const Home = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      {/* Optional Starry Background */}
      {/* <StarryParticles /> */}

      <div className="home-content">
        <div className="home-text">
          <h1 className="home-title">
            👋 Hi, I'm <span className="highlight">Nithin Reddy</span>
          </h1>

          <h2 className="home-subtitle">
            <Typewriter
              options={{
                strings: [
                  'React Developer',
                  'Python & Machine Learning Explorer',
                  'Full Stack Lover',
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>

          <p className="home-description">
            I build elegant and efficient web applications using technologies like <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>, <span>React</span>, <span>Python</span>, and <span>Machine Learning</span>.
            I focus on clean code, responsive design, and modern user experiences.
          </p>

          <p className="home-description">
            I'm passionate about innovation and exploring interactive technologies like <span>Web Development</span>.
          </p>

          <div className="home-buttons">
            <a href="/projects" className="btn primary">My Projects</a>
            <a href="/contact" className="btn secondary">Contact Me</a>
          </div>

          <div className="home-image">
            <img src={profileImg} alt="Nithin Reddy" className="profile-img" />
          </div>
        </div>

        <div className="home-cube">
          <Cube />
        </div>
      </div>

      <div className="scroll-down">
        <span>↓</span>
      </div>
    </motion.div>
  );
};

export default Home;
