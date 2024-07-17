// src/components/ProjectItem.js
import React from 'react';
import './ProjectItem.css';

function ProjectItem({ title, category, image, link }) {
  return (
    <div className="ProjectItem">
      <a href={link}>
        <img src={image} alt={title} />
        <div className="project-info">
          <h3>{title}</h3>
          <p>{category}</p>
        </div>
      </a>
    </div>
  );
}

export default ProjectItem;
