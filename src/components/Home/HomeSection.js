// src/components/HomeSection.js
import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import './HomeSection.css';

function HomeSection() {
  return (
    <section id="home" className="HomeSection">
      <Navbar />
      <Hero />
    </section>
  );
}

export default HomeSection;
