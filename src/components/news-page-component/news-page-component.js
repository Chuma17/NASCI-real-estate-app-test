import React from "react";
import "./news-page-component.css";
import HomeImg from "./background-img.png";
import { useNavigate } from "react-router-dom";

const NewsPageComponent = (props) => {
  const navigate = useNavigate();

  const newsDetails = () => {
    navigate(props.detail);
  };

  return (
    <>
      <div onClick={newsDetails} className="news-page-component">
        <img src={HomeImg} alt="home" />
        <div className="news-page-component-details">
          <h3>{props.newsData.title}</h3>
          <br />
          <p>{props.newsData.text.slice(0, 500 - 3) + "..."}</p>
          <br />
          <p>
            {props.newsData.publish_date} by <span>Real Agent</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default NewsPageComponent;
