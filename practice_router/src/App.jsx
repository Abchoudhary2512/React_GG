// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact.jsx';
import Articles from './components/Articles.jsx';


const articles = [
  { id: '1', title: 'Tech Trends', content: 'Tech trends content...' },
  { id: '2', title: 'Life Hacks', content: 'Life hacks content...' }
];


const homeData = {
  title: "Welcome to Our Website",
  description: "We are glad to have you here. Explore our services and products.",
  featuredProducts: ["Product A", "Product B", "Product C"]
};

const aboutData = {
  title: "About Us",
  mission: "Our mission is to provide the best services to our customers.",
  team: ["Alice", "Bob", "Charlie"]
};

const contactData = {
  title: "Contact Us",
  email: "contact@ourwebsite.com",
  phone: "+123 456 7890",
  address: "123 Main St, Anytown, USA"
};

const App = () => (
  <Routes>
    <Route path="/" element={<Home data={homeData} />} />
    <Route path="about" element={<About data={aboutData} />} />
    <Route path="contact" element={<Contact data={contactData} />} />
    <Route path="articles" element={<Articles />} />
    {articles.map((article) => (
      <Route
        key={article.id}
        path={`articles/${article.id}`} />
    ))}
  </Routes>
);

export default App;
