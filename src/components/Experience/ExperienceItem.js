// src/components/ExperienceItem.js
import React from 'react';
import './ExperienceItem.css';

function ExperienceItem({ title, date, location, company, description, skills }) {
  return (
    <div className="ExperienceItem">
      <h3>{title}</h3>
      <span className="date">{date}</span>
      {location && <span className="location">{location}</span>}
      {company && <a href={`http://${company}`} className="company">{company}</a>}
      <p>{description}</p>
      {skills && (
        <div className="skills">
          {skills.map(skill => (
            <span key={skill} className="skill">{skill}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExperienceItem;
