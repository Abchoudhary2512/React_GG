// Article.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Article = ({ data }) => {
  const { id } = useParams();

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
};

export default Article;
