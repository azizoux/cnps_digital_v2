import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import ModalContent from "../ModalContent/ModalContent";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [activePageName, setActivePageName] = useState("home");
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className={` ${sticky ? "dark-nav" : ""} `}>
        <ul className={isMobileMenu ? "" : "hide-mobile-menu"}>
          <li
            className={activePageName === "home" ? "active" : ""}
            onClick={() => setActivePageName("home")}
          >
            <Link to="/"> ACCUEIL</Link>
          </li>
          <li
            className={activePageName === "cnps" ? "active" : ""}
            onClick={() => setActivePageName("cnps")}
          >
            <Link to="cnps"> CNPS</Link>
          </li>
          <li
            className={activePageName === "assure" ? "active" : ""}
            onClick={() => setActivePageName("assure")}
          >
            <Link to="assure">ASSURE(E)</Link>
          </li>
          <li
            className={activePageName === "employeur" ? "active" : ""}
            onClick={() => setActivePageName("employeur")}
          >
            <Link to="/employeur">EMPLOYEUR</Link>
          </li>
          <li
            className={activePageName === "beneficiaire" ? "active" : ""}
            onClick={() => setActivePageName("beneficiaire")}
          >
            <Link to="/beneficiaire">BENEFICIAIRE</Link>
          </li>
          <li
            className={activePageName === "services" ? "active" : ""}
            onClick={() => setActivePageName("services")}
          >
            <Link to="/services">SERVICES EN LIGNE</Link>
          </li>
        </ul>
        <div className="search-items">
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(!showModal)}
          >
            Etes-vous assuré(e) ?
          </button>
        </div>
      </nav>
      {showModal === true
        ? createPortal(
            <ModalContent closeModal={() => setShowModal(!showModal)} />,
            document.body
          )
        : null}
    </>
  );
};

export default Navbar;
