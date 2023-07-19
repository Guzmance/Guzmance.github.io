import React from 'react';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer_logo">
        Guzmance
      </a>

      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a
          href="https://www.instagram.com/_guzmance"
          rel="noopener noreferrer"
          target="_blank"
        >
          <BsInstagram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100002365985513"
          rel="noopener noreferrer"
          target="_blank"
        >
          <BsFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/carlos-guzm%C3%A1n62/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Guzmance. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
