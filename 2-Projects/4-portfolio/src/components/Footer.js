import React from "react";
import {FaInstagram, FaFacebookSquare, FaTwitterSquare, FaLinkedinIn} from 'react-icons/fa'

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
     <FaInstagram />
     <FaFacebookSquare />
     <FaTwitterSquare />
     <FaLinkedinIn />
      </div>
      <p> &copy; 2022 brhamportfolio.com</p>
    </div>
  );
}

export default Footer;