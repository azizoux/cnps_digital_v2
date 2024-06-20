import React from "react";
import "./Bandeau.css";
import logo from "../../assets/logo.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTwitter, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

const Bandeau = () => {
  return (
    <div className="bandeau">
      <div className="logo">
        <img src={logo} alt="" />
        <div className="logo-info">
          <p className="cnps-title">
            Caisse Nationale de Prevoyance Sociale du Tchad
          </p>
          <ul>
            <li className="cnps-info">
              <FaPhoneVolume color="#0e52a0" /> (+235) 60 40 81 76
            </li>
            <li className="cnps-info">
              <MdEmail color="#0e52a0" /> assistance@cnps-tchad.com
            </li>
          </ul>
        </div>
      </div>
      <div className="social-icons">
        <FaFacebook size={30} className="social-icon" />
        <FaSquareXTwitter size={30} color="#000000" className="social-icon" />
        <FaLinkedin size={30} color="#0a66c2" className="social-icon" />
        <FaYoutube size={30} color="#ff0000" className="social-icon" />
      </div>
    </div>
  );
};

export default Bandeau;
