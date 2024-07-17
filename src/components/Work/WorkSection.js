// src/components/WorkSection.js
import React from 'react';
import FeaturedProject from './FeaturedProject';
import ProjectList from './ProjectList';
import Filter from './Filter';
import './WorkSection.css';

function WorkSection() {
  return (
    <section className="WorkSection" id="work">
      <div className="work-intro-featured">
        <div className="work-description">
          <h2>My Work</h2>
          <p>Deployed scalable travel, event and telemedicine web and hybrid mobile apps using React SPA and PWA. Collaborated in 140+ projects with 50+ clients all around the world. I am also interested in data analytics and visualization.</p>
        </div>
        <FeaturedProject 
          title="Tryotel App" 
          description="Featured Project" 
          link="#"
        />
      </div>
      <Filter />
      <ProjectList />
    </section>
  );
}

export default WorkSection;
