import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../../NewsCord/NewsCard";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();
  console.log(categoryNews);
  return (
    <>
      <h2>this is category :{categoryNews.length} </h2>
      {categoryNews?.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </>
  );
};

export default Category;
