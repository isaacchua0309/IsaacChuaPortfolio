// src/components/FloatingNav.js
import React, { useEffect, useState } from 'react';
import NavItem from './FloatingNavItem';
import './FloatingNav.css';

function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const vh = window.innerHeight;
      if (offset > 0.3 * vh) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`FloatingNav ${scrolled ? 'scrolled' : ''}`}>
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

export default FloatingNav;
