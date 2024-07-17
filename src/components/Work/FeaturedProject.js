// src/components/FeaturedProject.js
import React from 'react';
import './FeaturedProject.css';

function FeaturedProject({ title, description, link }) {
  return (
    <div className="FeaturedProject">
      <div className="featured-content">
        <h3>{description}</h3>
        <h2>{title}</h2>
        <a href={link} className="view-project">View Project</a>
      </div>
      <div className="featured-image">
        <img src="path/to/phone-mockup.png" alt={title} />
      </div>
    </div>
  );
}

export default FeaturedProject;
