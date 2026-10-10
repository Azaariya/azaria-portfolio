import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { FeaturedProject } from './components/FeaturedProject';
import { ProjectsGrid } from './components/ProjectsGrid';
import { Journey } from './components/Journey';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProject />
        <ProjectsGrid />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;