import axios from "axios";
import React from "react";
import usePromise from "../lib/usePromise";
import { NewsItem } from "./NewsItem";
import "./scss/NewsList.scss";

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === "all" ? "" : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=bf006dc478094b4d93c92e19d7b8e707`
    );
  }, [category]);

  // 대기중일 때
  if (loading) {
    return <div className="NewsListBlock">대기중...</div>;
  }
  // 아직 response 값이 설정되지 않았을 때
  if (!response) {
    return null;
  }

  // 에러가 발생했을 때
  if (error) {
    return <div className="NewsListBlock">에러 발생!</div>;
  }

  // response 값이 유효할 때
  const { articles } = response.data;
  return (
    <div className="NewsListBlock">
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
