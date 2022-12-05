import React from 'react';
import '../Signin/signin.css';

// eslint-disable-next-line react/prop-types
const Button = ({ value }) => (
  <button type="button" className="button">
    {value}
  </button>
);

export default Button;
