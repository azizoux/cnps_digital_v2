import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [activePageName, setActivePageName] = useState("home");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const toggleMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };
  const handleActive = (payload) => {
    setActivePageName(payload);
  };
  return (
    <nav className={` ${sticky ? "dark-nav" : ""} `}>
      <ul className={isMobileMenu ? "" : "hide-mobile-menu"}>
        <li
          className={activePageName === "home" ? "active" : ""}
          onClick={() => handleActive("home")}
        >
          <Link to="/"> ACCUEIL</Link>
        </li>
        <li
          className={activePageName === "cnps" ? "active" : ""}
          onClick={() => handleActive("cnps")}
        >
          <Link to="cnps"> CNPS</Link>
        </li>
        <li
          className={activePageName === "assure" ? "active" : ""}
          onClick={() => handleActive("assure")}
        >
          <Link to="assure">ASSURE(E)</Link>
        </li>
        <li
          className={activePageName === "employeur" ? "active" : ""}
          onClick={() => handleActive("employeur")}
        >
          <Link to="/employeur">EMPLOYEUR</Link>
        </li>
        <li
          className={activePageName === "beneficiaire" ? "active" : ""}
          onClick={() => handleActive("beneficiaire")}
        >
          <Link to="/beneficiaire">BENEFICIAIRE</Link>
        </li>
        <li
          className={activePageName === "services" ? "active" : ""}
          onClick={() => handleActive("services")}
        >
          <Link to="/services">SERVICES EN LIGNE</Link>
        </li>
      </ul>
      <div className="search-items">
        <div className="search-input">
          <CiSearch color="#000" size={30} />
          <input
            className="verif-input"
            type="text"
            placeholder="Saisir votre NNI, telephone ou email "
          />
        </div>
        <Link to="/conctactus" className="btn btn-primary">
          ENVOYER
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
