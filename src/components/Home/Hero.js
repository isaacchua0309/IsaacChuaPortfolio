// src/components/Hero.js
import React from 'react';
import BackgroundAnimation from './BackgroundAnimation';
import ScrollIndicator from './ScrollIndicator';
import './Hero.css';

function Hero() {
  return (
    <section className="Hero">
      <BackgroundAnimation />
      <div className="hero-content">
        <h1>ISAAC CHUA</h1>
        <p>SOFTWARE ENGINEER, FULL STACK AND APP DEVELOPER</p>
      </div>
      <ScrollIndicator />
    </section>
  );
}

export default Hero;
