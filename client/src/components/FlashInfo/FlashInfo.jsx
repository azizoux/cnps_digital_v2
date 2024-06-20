import React, { useEffect, useRef, useState } from "react";
import "./FlashInfo.css";
import dg_img from "../../assets/dg_photo.jpg";

const FlashInfo = () => {
  const slider = useRef();
  const [translator, setTranslator] = useState(33);
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
    const intervalId = setInterval(slideForward, 100);
    return () => clearInterval(intervalId);
  }, [translator]);
  return (
    <div className="flash-info">
      <p className="title">
        <span>FLASH</span> INFOS
      </p>
      <div className="slider">
        <ul className="info-deroulant" ref={slider}>
          <li className="info-item">
            <div className="slide">
              <img src={dg_img} alt="" />
              <p>Interview du DG de la CNPS</p>
              <button className="info-date">25 JUNE 2021</button>
            </div>
          </li>
          <li className="info-item">
            <div className="slide">
              <img src={dg_img} alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Temporibus, illo!
              </p>
              <button className="info-date">25 JUNE 2021</button>
            </div>
          </li>
          <li className="info-item">
            <div className="slide">
              <img src={dg_img} alt="" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
                distinctio perferendis ipsum!
              </p>
              <button className="info-date">25 JUNE 2021</button>
            </div>
          </li>
          <li className="info-item">
            <div className="slide">
              <img src={dg_img} alt="" />
              <p>Interview du DG de la CNPS</p>
              <button className="info-date">25 JUNE 2021</button>
            </div>
          </li>
          <li className="info-item">
            <div className="slide">
              <img src={dg_img} alt="" />
              <p>Interview du DG de la CNPS</p>
              <button className="info-date">25 JUNE 2021</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FlashInfo;
