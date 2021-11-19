import React from "react";
import { NavLink } from "react-router-dom";
import "./scss/Categories.scss";

const categories = [
  {
    name: "all",
    text: "전체보기",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테인먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sports",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

const Categories = ({ onSelect }) => {
  return (
    <div className="CategoriesBlock">
      {categories.map((option) => (
        <NavLink
          className="Category"
          key={option.name}
          activeClassName="active"
          exact={option.name === "all"}
          to={option.name === "all" ? "/news" : `/news/${option.name}`}
        >
          {option.text}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
