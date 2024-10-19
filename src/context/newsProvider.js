import { createContext, useContext, useEffect, useState } from "react";

const useNewsProvider = createContext();
//

export function NewsProvider({ children }) {
  useEffect(() => {
    (async () => {
      try {
        const data = await fetch(
          //   `${process.env.REACT_APP_WORLD_NEWS_API_URL}search-news?api-key=${process.env.REACT_APP_WORLD_NEWS_API_KEY}`
          "https://api.worldnewsapi.com/search-news?source-countries=ca&api-key=6dda304f9a7e42baae6e45c557631f3e"
        );
        if (data.ok) {
          const news = await data.json();
          setNews(news.news);
        }
      } catch (error) {}
    })();
  }, []);

  const [newsDetail, setNewsDetail] = useState({});
  const [news, setNews] = useState([]);

  function setActiveNews(id) {
    setNewsDetail("");
  }

  return (
    <useNewsProvider.Provider value={{ news, setActiveNews, newsDetail }}>
      {children}
    </useNewsProvider.Provider>
  );
}

export function useNews() {
  return useContext(useNewsProvider);
}
