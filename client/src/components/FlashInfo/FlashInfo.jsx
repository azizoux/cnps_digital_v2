import React, { useEffect, useRef, useState } from "react";
import "./FlashInfo.css";
import dg_img from "../../assets/dg_photo.jpg";

const FlashInfo = () => {
  const slider = useRef();
  const [translator, setTranslator] = useState(33);
  const step = 0.08;
  const flashData = [
    {
      id: 1,
      title: "sdbaDHJK SDasdas SDSD",
      publisedAt: "26-06-2024",
    },
    {
      id: 2,
      title: "sdbaDHJK SDasdas SDSD",
      publisedAt: "27-04-2024",
    },
    {
      id: 3,
      title: "sdbaDHJK SDasdas SDSD",
      publisedAt: "16-02-2024",
    },
  ];
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
          {flashData.map((fd) => (
            <li className="info-item">
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
