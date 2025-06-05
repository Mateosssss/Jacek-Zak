import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Process from './components/Process';
import References from './components/References';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <References />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}

export default App; 