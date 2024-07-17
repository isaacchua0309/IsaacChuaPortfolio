// src/components/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="Contact">
      <h2>Available for select freelance opportunities</h2>
      <p>Have an exciting project you need help with? Send me an email or contact me via instant message!</p>
      <a href="mailto:isaac@example.com">isaac@example.com</a>
      <div className="contact-methods">
        <a href="#Messenger">Messenger</a>
        <a href="#LinkedIn">LinkedIn</a>
        <a href="#Instagram">Instagram</a>
        <a href="#Github">Github</a>
      </div>
    </section>
  );
}

export default Contact;
