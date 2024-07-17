// src/components/ExperienceSection.js
import React from 'react';
import ExperienceItem from './ExperienceItem';
import Testimonials from '../Contact/Testimonials';
import Contact from '../Contact/Contact';
import './ExperienceSection.css';

function ExperienceSection() {
  return (
  <section className="ExperienceSection" id= "experience">
      <h2>Experience</h2>
      <div className="experience-list">
        <ExperienceItem 
          title="Software Engineer @ Saimon Global Ltd" 
          date="2019 - Present" 
          location="Dhaka, Bangladesh" 
          company="saimonglobal.com" 
          description="Developing front-end and mobile app solutions (B2C, B2B) in Travel Tech on React/Next.js framework and Flutter SDK."
          skills={['Javascript', 'Dart', 'React', 'NextJS', 'Redux', 'Flutter']}
        />
        <ExperienceItem 
          title="Web Developer @ influenceTHIS Canada" 
          date="2018 - 2019" 
          description=""
        />
        <ExperienceItem 
          title="Top Rated Web Developer @ Upwork Inc." 
          date="2017 - Present" 
          description=""
        />
      </div>
    </section>
  );
}

export default ExperienceSection;
