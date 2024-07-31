// About.js
import React from 'react';

const About = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.mission}</p>
      <h2>Our Team</h2>
      <ul>
        {data.team.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
