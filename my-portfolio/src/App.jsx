// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Experience from './components/Experience';
// import Achievements from './components/Achievements';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   useEffect(() => {
//     AOS.init({
//       duration: 600,
//       once: true,
//       easing: 'ease-out',
//       offset: 100,
//     });
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <main className="flex-grow">
//         <Hero />
//         <About />
//         <Skills />
//         <Projects />
//         <Experience />
//         <Achievements />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out',
      offset: 100,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;