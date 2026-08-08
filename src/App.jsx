import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const isNightTime = () => {
  const hour = new Date().getHours();
  // Active dark mode after 6 PM (18:00) until 6 AM (06:00)
  return hour >= 18 || hour < 6;
};

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme !== null) {
      return savedTheme === 'dark';
    }
    return isNightTime();
  });

  const [userToggled, setUserToggled] = useState(() => {
    return localStorage.getItem('theme_user_set') === 'true';
  });

  const handleSetDarkMode = (val) => {
    const nextMode = typeof val === 'function' ? val(darkMode) : val;
    setDarkMode(nextMode);
    setUserToggled(true);
    localStorage.setItem('theme_user_set', 'true');
    localStorage.setItem('theme', nextMode ? 'dark' : 'light');
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Periodically check local time to transition between light and dark mode automatically
  useEffect(() => {
    if (userToggled) return;

    const checkTime = () => {
      setDarkMode(isNightTime());
    };

    const interval = setInterval(checkTime, 60000);
    return () => clearInterval(interval);
  }, [userToggled]);

  return (
    <div className="min-h-screen bg-[#E8ECD6] text-slate-900 dark:bg-[#0a0f1d] dark:text-slate-100 font-urbanist transition-colors duration-300 flex flex-col justify-between">
      <Navbar darkMode={darkMode} setDarkMode={handleSetDarkMode} />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
