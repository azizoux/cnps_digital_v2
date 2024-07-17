import React, { useContext } from "react";
import "./Bandeau.css";
import logo from "../../assets/logo.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTwitter, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { UserContext } from "../../UserContext";
import { useSelector } from "react-redux";

const Bandeau = () => {
  // const { currentUser } = useContext(UserContext);
  const currentUser = useSelector((state) => state.user.currentUser);
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
      <div>
        <div className="social-icons">
          <FaFacebook size={25} className="social-icon" />
          <FaSquareXTwitter size={25} color="#000000" className="social-icon" />
          <FaLinkedin size={25} color="#0a66c2" className="social-icon" />
          <FaYoutube size={25} color="#ff0000" className="social-icon" />
        </div>
        {currentUser && (
          <div className="user-info">
            <img src={currentUser.profilePicture} alt="" />
            <div>
              <p className="user-name">{currentUser.username}</p>
              <p className="user-email">{currentUser.email}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bandeau;
