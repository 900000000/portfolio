import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testinomials from './components/Testinomials';
import Contact from './components/Contact';

function App() {
  return (
   <main className='text-gray-400 bg-gray-900 body-font'>
    <Navbar/>
    <About />
    <Projects />
    <Skills />
    <Testinomials />
    <Contact />
   </main>
  );
}
export default App;