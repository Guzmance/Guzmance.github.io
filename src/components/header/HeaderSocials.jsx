import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="htttps://linkedin.com" rel="noopener noreferrer" target="_blank">
        <BsLinkedin />
      </a>
      <a href="htttps://github.com" rel="noopener noreferrer" target="_blank">
        <FaGithub />
      </a>
      <a
        href="htttps://instagram.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <BsInstagram />
      </a>
      <a href="htttps://facebook.com" rel="noopener noreferrer" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
