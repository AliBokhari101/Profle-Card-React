import React from "react";
import "./App.css";
import pfpImage from './pfp.png';
function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="dp">
      <img src={pfpImage} alt="Profile" />
      </div>
      <div className="about">
        <h2>Syed Abdullah Shah</h2>
        <h3>CyberSecurity Expert</h3>
        <h4>shahjees.web</h4>
        <div>
          <button className="email-btn">Email</button>
          <button className="linkedin-btn">LinkedIn</button>
        </div>
        <h2>About</h2>
        <p className="about-para">
          As a computer science graduate, I am passionate about utilizing my technical skills to design and create innovative solutions that tackle real-world problems. My interests lie in cybersecurity and AI and I am constantly seeking ways to apply my knowledge to impact the world positively. From developing cutting-edge applications to solving complex issues, I am dedicated to continually improving and expanding my capabilities to help others through the power of technology. Through my experiences, I have gained a strong foundation in problem-solving and a desire to continue learning and growing in the field. I am excited to connect with others in the industry and explore new opportunities to contribute to the advancement of technology.
        </p>
      </div>
      <div className="interest">
        <h2>Interests</h2>
        <ul>
          <li>C++</li>
          <li>CyberSecurity</li>
          <li>Information Security</li>
          <li>SIEM</li>
          <li>Incident Response</li>
        </ul>
      </div>
      <div className="social-links">
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-github"></i></a>
      </div>
    </div>
  );
}

export default ProfileCard;
