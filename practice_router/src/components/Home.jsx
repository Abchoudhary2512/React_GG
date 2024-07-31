// Home.js
import React from 'react';

const Home = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <h2>Featured Products</h2>
      <ul>
        {data.featuredProducts.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
