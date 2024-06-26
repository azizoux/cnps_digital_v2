import React, { useState } from "react";
import "./ModalContent.css";
import Dots from "react-activity/dist/Dots";
import "react-activity/dist/Dots.css";

const ModalContent = ({ closeModal }) => {
  const [showActivity, setShowActivity] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleForm = async () => {
    setShowActivity(true);
    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost:3000/api/verification-assure"
      );
      if (response.ok === true) {
        setShowActivity(false);
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {}
  };
  return (
    <>
      <div className="modal" onClick={closeModal}>
        {!showActivity ? (
          <div className="content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              X
            </button>
            <div className="card">
              <h3>Vous voulez savoir si vous etes assuré(e)?</h3>
              <label>Saisir votre NNI, Email ou Telephone</label>
              <input type="text" placeholder="NNI, Email ou telephone..." />
              <button className="btn btn-primary" onClick={() => handleForm()}>
                Soumettre
              </button>
            </div>
          </div>
        ) : (
          <div className="content" onClick={(e) => e.stopPropagation()}>
            <Dots color="black" />
          </div>
        )}
      </div>
    </>
  );
};

export default ModalContent;
