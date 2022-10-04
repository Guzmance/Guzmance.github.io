import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="htttps://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="htttps://github.com" target="_blank"><FaGithub/></a>
        <a href="htttps://instagram.com" target="_blank"><BsInstagram/></a>
        <a href="htttps://facebook.com" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials