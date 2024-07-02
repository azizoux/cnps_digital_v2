import React from "react";
import logo from "../../assets/logo.png";
import "./ArticleCard.css";

const ArticleCard = ({ item }) => {
  return (
    <div className="card">
      <img src={logo} alt="" />
      <div className="card-info">
        <p className="card-title">{item.title.substring(0, 20)}</p>
        <p className="card-content">{item.content.substring(0, 300)}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
