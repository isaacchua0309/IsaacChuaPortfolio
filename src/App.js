// src/App.js
import React from 'react';
import FloatingNav from './components/FloatingNav/FloatingNav';
import ExpertiseSection from './components/Expertise/ExpertiseSection';
import ExperienceSection from './components/Experience/ExperienceSection';
import WorkSection from './components/Work/WorkSection';
import Footer from './components/Home/Footer';
import ContactSection from './components/Contact/ContactSection';
import HomeSection from './components/Home/HomeSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <FloatingNav/>
      <HomeSection/>
      <ExpertiseSection />
      <WorkSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
