// src/components/ExpertiseItem.js
import React from 'react';
import './ExpertiseItem.css';

function ExpertiseItem({ title, description, icon, highlight, highlightColor }) {
  return (
    <div className="ExpertiseItem">
      <div className="icon">
        <i className={icon}></i>
      </div>
      <h3>
        <span style={{ color: highlightColor }}>{highlight}</span>
      </h3>
      <p>{description}</p>
    </div>
  );
}

export default ExpertiseItem;
