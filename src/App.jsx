import { useLayoutEffect } from 'react';
import './App.css';

import InfiniteScroll from './Components/InfiniteScroll/InfiniteScroll';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header'; // ✅ تم إضافة هذا الاستيراد
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

function App() {
  // Initialize Lenis for smooth scrolling
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  useLayoutEffect(() => {
    const loadedHandler = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', loadedHandler);

    return () => window.removeEventListener('load', loadedHandler);
  }, []);

  return (
    <>
      <Navbar />
      <Header />
      <InfiniteScroll />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;