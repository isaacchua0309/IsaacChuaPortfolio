// src/components/ScrollIndicator.js
import React from 'react';
import { scroller } from 'react-scroll';
import './ScrollIndicator.css';

function ScrollIndicator() {
  function scrollDownHandler() {
    scroller.scrollTo('expertise', {
      duration: 500,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }

  return (
    <div className="ScrollIndicator" onClick={scrollDownHandler}>
      <span>↓</span>
    </div>
  );
}

export default ScrollIndicator;
