import React from "react";
import "./news-detail.css";
import NewsImg from "./new-img.png";
import { SearchComp } from "src/components/search-comp/seacrch-comp";

import { useNews } from "src/context/newsProvider";
import { useParams } from "react-router-dom";
const NewsNewsDetail = () => {
  const { news } = useNews();

  const { newsId } = useParams();
  const newsDetail = news.find((item) => item.id !== newsId);
  document.title = `News Detail: ${newsDetail.title}`;

  return (
    <div className="news-detail">
      <SearchComp title="Filter" placeholder="Search" />

      <h2>News</h2>
      <br />
      <img src={NewsImg} alt="home" />
      <br />
      <span>
        {newsDetail.publish_date}
        <span>by Real Agent</span>
      </span>
      <br />
      <h2>{newsDetail.title}</h2>
      <br />
      <p>{newsDetail.text}</p>
    </div>
  );
};

NewsNewsDetail.propTypes = {};

NewsNewsDetail.defaultProps = {};

export default NewsNewsDetail;
