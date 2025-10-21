import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Projects />

      <footer className="bg-navy-800 py-8 text-center text-gray-400 border-t border-navy-700">
        <p>&copy; {new Date().getFullYear()} Timothy Dance. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
