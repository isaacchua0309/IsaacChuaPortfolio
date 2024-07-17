// src/components/NavItem.js
import React from 'react';
import { Link } from 'react-scroll';
import './FloatingNavItem.css';

function FloatingNavItem({ text, link }) {
  return (
    <Link 
      className="FloatingNavItem" 
      to={link} 
      smooth={true} 
      duration={500} 
      offset={-70}
    >
      {text}
    </Link>
  );
}

export default FloatingNavItem;
