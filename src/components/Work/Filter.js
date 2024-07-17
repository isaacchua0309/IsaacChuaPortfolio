// src/components/Filter.js
import React from 'react';
import './Filter.css';

function Filter() {
  return (
    <div className="Filter">
      <span>Filter by</span>
      <a href="#all">All</a>
      <a href="#data-visualization">Data Visualization</a>
      <a href="#web-development">Web Development</a>
    </div>
  );
}

export default Filter;
