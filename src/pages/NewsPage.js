import React from "react";
import { useParams } from "react-router-dom";
import Categories from "../component/Categories";
import NewsList from "../component/NewsList";

const NewsPage = () => {
  // 카테고리가 선택되지 않았으면 기본값 all로 사용

  const { category } = useParams();
  console.log(category);

  return (
    <div>
      <Categories />
      <NewsList category={category} />
    </div>
  );
};

export default NewsPage;
