import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../../NewsCord/NewsCard";

const Category = () => {
  const { id } = useParams();
  const categoryNews = useLoaderData();

  return (
    <>
      {!id && <h4>Dragon News Home</h4>}
      {id && <h5>Dragon News :{categoryNews.length} </h5>}
      {categoryNews?.map((news) => (
        <NewsCard key={news._id} news={news}></NewsCard>
      ))}
    </>
  );
};

export default Category;
