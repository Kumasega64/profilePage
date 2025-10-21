import React from 'react';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Experience />
      <Skills />
      <Projects />

      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          &copy; {new Date().getFullYear()} Timothy Dance
        </p>
      </footer>
    </div>
  );
}

export default App;
