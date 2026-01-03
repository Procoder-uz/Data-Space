
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import CoursesSlider from '../components/CoursesSlider';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="courses">
        <CoursesSlider />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
