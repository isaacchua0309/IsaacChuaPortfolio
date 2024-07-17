// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <section className="Testimonials">
      <div className="testimonial">
        <blockquote>
          Since 2018 Tamal has been responsible for the development of our website which has been instrumental to the growth of our company. Even while working remotely he's been highly responsive, organized and strategic in his thinking. In addition to staying on top of day-to-day site changes and builds, he's provided us with great advice to stay on top of the current changes in web technologies. He's also implemented effective project management and QA processes. As a result Tamal has been an highly valued and impactful member of our team.
        </blockquote>
        <cite>- Mark Greenspan, Founder at influenceTHIS Canada</cite>
      </div>
      <div className="testimonial">
        <blockquote>
          Tamal is AMAZING! If you have any doubt about hiring him, ask me – I am really impressed by this guy!
        </blockquote>
        <cite>- Wilfried Hajek, Agile Coach | Speaker | Trainer</cite>
      </div>
      <div className="testimonial">
        <blockquote>
          Tamal is one of the best professionals that we have known in web development skills. Between his skills you can find good communication and accuracy with the planning in complex projects.
        </blockquote>
        <cite>- Jonathan Castro, CEO & Founder at The Cliff</cite>
      </div>
    </section>
  );
}

export default Testimonials;
