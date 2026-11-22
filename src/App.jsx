import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import MyWorks from './components/MyWorks';
import ToolsAndGenres from './components/ToolsAndGenres';
import EditingEdge from './components/EditingEdge';
import BrandsCarousel from './components/BrandsCarousel';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';

export default function App() {
  const [theme, setTheme] = useState('dark'); // Default Dark Mode
  const isDark = theme === 'dark';

  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState('');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePackageSelect = (pkgName) => {
    setSelectedPackage(`${pkgName} Package Inquiry`);
    scrollToSection('contact');
  };

  const pageBg = isDark ? 'bg-[#0a0b10] text-[#f8fafc]' : 'bg-[#f8fafc] text-[#0f172a]';

  return (
    <div className={`min-h-screen ${pageBg} transition-colors duration-300 overflow-x-hidden`}>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] accent-gradient-bg origin-left z-50"
      />

      <Navbar
        isDark={isDark}
        onToggleTheme={() => setTheme(isDark ? 'light' : 'dark')}
        scrollToSection={scrollToSection}
      />

      <Hero isDark={isDark} scrollToSection={scrollToSection} />
      <AboutMe isDark={isDark} />
      <MyWorks isDark={isDark} onSelectProject={(proj) => setSelectedProject(proj)} />
      <ToolsAndGenres isDark={isDark} />
      <EditingEdge isDark={isDark} />
      <BrandsCarousel isDark={isDark} />
      <Testimonials isDark={isDark} />
      <Pricing isDark={isDark} onSelectPackage={handlePackageSelect} />
      <ContactMe isDark={isDark} selectedPackage={selectedPackage} />
      <Footer isDark={isDark} />

      <VideoModal
        project={selectedProject}
        isDark={isDark}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}