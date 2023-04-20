import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <div className="link-container">
      <Link to="/to-do/">All</Link>
      <Link to="/to-do/active">Active</Link>
      <Link to="/to-do/completed">Completed</Link>
    </div>
  );
};

export default Footer;
