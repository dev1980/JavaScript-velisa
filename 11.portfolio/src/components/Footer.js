import React from 'react'
import { FaInstagram, FaFacebookSquare, FaLinkedinIn, FaGithub, FaTwitter  } from 'react-icons/fa'
import '../style/Footer.css';
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__flex'>
        <h1>Let's work together...</h1>
        <div className='social'>
            <FaInstagram />
            <FaFacebookSquare />
            <FaTwitter />
            <FaLinkedinIn />
            <FaGithub />
        </div>
        <p>&copy; 2022 brhamresume.com</p>
        </div>
        
    </div>
  )
}

export default Footer