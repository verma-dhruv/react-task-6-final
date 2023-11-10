import React from 'react';

const Contact = ({ email, phone, social }) => {
  return (
    <div>
      <h3>Contact</h3>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Social: {social}</p>
    </div>
  );
};

export default Contact;
