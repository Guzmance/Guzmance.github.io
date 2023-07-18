import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/carlos-guzm%C3%A1n62/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/Guzmance"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FaGithub />
      </a>
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
    </div>
  );
};

export default HeaderSocials;
