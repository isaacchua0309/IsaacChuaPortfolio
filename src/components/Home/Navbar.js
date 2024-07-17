// src/components/Navbar.js
import React from 'react';
import NavItem from './NavItem';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="nav-items">
        <NavItem text="home" link="home" />
        <NavItem text="expertise" link="expertise" />
        <NavItem text="work" link="work" />
        <NavItem text="experience" link="experience" />
        <NavItem text="contact" link="contact" />
      </div>
    </nav>
  );
}

export default Navbar;
