import React from "react";
import "./Home.css";
import Spaces from "../../components/Spaces/Spaces";
import Test from "../../components/Test/Test";
import { articles } from "../../data/articleData";
import ArticleCard from "../../components/ArticleCard/ArticleCard";

const Home = () => {
  return (
    <div>
      <Spaces />
      <section className="articles">
        {articles.map((article) => (
          <ArticleCard item={article} />
        ))}
      </section>
      <section className="services">
        <div className="service-title">
          <p className="tiret"></p>
          <p className="title">NOS SERVICES</p>
          <p className="tiret"></p>
        </div>
      </section>
    </div>
  );
};

export default Home;
