import React from "react";
import "./Spaces.css";
import { FaUsers } from "react-icons/fa6";
import { FaUsersCog } from "react-icons/fa";
import { IoMdPersonAdd } from "react-icons/io";

const Spaces = () => {
  return (
    <div className="spaces">
      <div className="space">
        <FaUsers color="white" size={50} />
        <p>Espace Employeur</p>
      </div>
      <div className="space">
        <FaUsersCog color="white" size={50} />
        <p>Espace Travailleur</p>
      </div>
      <div className="space">
        <IoMdPersonAdd color="white" size={50} />
        <p>Service en ligne</p>
      </div>
    </div>
  );
};

export default Spaces;
