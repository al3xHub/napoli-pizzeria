import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Owners } from './components/Owners';
import { Locations } from './components/Locations';
import { Menu } from './components/Menu';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Owners />
      <Locations />
      <Menu />
      <Contact />
    </div>
  );
}

export default App;