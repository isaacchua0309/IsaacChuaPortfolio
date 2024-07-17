// src/components/ContactSection.js
import React from 'react';
import Testimonials from './Testimonials';
import Contact from './Contact';
import './ContactSection.css';

function ContactSection() {
  return (
    <section id="contact" className="ContactSection">
      <div className="contact-testimonials-wrapper">
        <Contact />
        <Testimonials />
      </div>
    </section>
  );
}

export default ContactSection;
