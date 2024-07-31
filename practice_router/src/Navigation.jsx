// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
  { id: '1', title: 'Tech Trends' },
  { id: '2', title: 'Life Hacks' }
];

const Navigation = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="about">About</Link></li>
      {articles.map((article) => (
        <li key={article.id}>
          <Link to={`articles/${article.id}`}>{article.title}</Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
