import React, { useEffect, useRef, useState } from "react";
import "./FlashInfo.css";
import dg_img from "../../assets/dg_photo.jpg";
import { flashData } from "../../data/flashData";

const FlashInfo = () => {
  const slider = useRef();
  const [translator, setTranslator] = useState(25);
  const step = 0.08;
  const slideForward = () => {
    if (translator < -15) {
      clearInterval(intervalId);
      setTranslator(33);
    } else {
      setTranslator(translator - step);
      slider.current.style.transform = `translateX(${translator}%)`;
    }
  };
  useEffect(() => {
    // const interId = setInterval(slideForward, 100);
    // return () => clearInterval(interId);
  }, [translator]);
  return (
    <div className="flash-info">
      <p className="title">
        <span>FLASH</span> INFOS
      </p>
      <div className="slider">
        <ul className="info-deroulant" ref={slider}>
          {flashData.map((fd) => (
            <li className="info-item" key={fd.id}>
              <div className="slide">
                <img src={dg_img} alt="" />
                <p>{fd.title}</p>
                <button className="info-date">{fd.publisedAt}</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FlashInfo;
