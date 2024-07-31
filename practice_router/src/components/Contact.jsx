// Contact.js
import React from 'react';

const Contact = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>Address: {data.address}</p>
    </div>
  );
};

export default Contact;
