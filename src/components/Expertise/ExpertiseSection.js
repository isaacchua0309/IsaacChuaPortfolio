// src/components/ExpertiseSection.js
import React from 'react';
import ExpertiseItem from './ExpertiseItem';
import './ExpertiseSection.css';

function ExpertiseSection() {
  return (
    <section className="ExpertiseSection" id = "expertise">
      <h2>My Expertise</h2>
      <div className="expertise-list">
        <ExpertiseItem 
          title="Software Development" 
          description="Experienced in both functional and OOP: Dart, Python, Java, JavaScript, TypeScript."
          icon="fa fa-laptop-code"
          highlight="Software Development"
          highlightColor="#e91e63"
        />
        <ExpertiseItem 
          title="Frontend Dev React, NextJS" 
          description="Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks."
          icon="fa fa-code"
          highlight="Frontend Dev React, NextJS"
          highlightColor="#3f51b5"
        />
        <ExpertiseItem 
          title="Flutter Dev Android, iOS" 
          description="Skilled in developing hybrid mobile apps and cross-platform solutions using the Flutter framework."
          icon="fa fa-mobile-alt"
          highlight="Flutter Dev Android, iOS"
          highlightColor="#ff5722"
        />
      </div>
    </section>
  );
}

export default ExpertiseSection;
