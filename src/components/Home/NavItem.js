// src/components/NavItem.js
import React from 'react';
import { Link } from 'react-scroll';
import './NavItem.css';

function NavItem({ text, link }) {
  return (
    <Link 
      className="NavItem" 
      to={link} 
      smooth={true} 
      duration={500} 
      offset={-70}
    >
      {text}
    </Link>
  );
}

export default NavItem;
