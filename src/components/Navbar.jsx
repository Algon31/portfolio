import React, { useState } from 'react';
import { Sun, Moon, Menu, X, FileText } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const resumeUrl = "https://drive.google.com/file/d/1hfW3nmJqsfJmIGe1dkARdtBGc57qBAvQ/view?usp=drive_link";

  return (
    <nav className="w-full bg-[#B75A48] dark:bg-slate-900/95 dark:border-b dark:border-slate-800 text-[#E8ECD6] dark:text-slate-100 sticky top-0 z-50 transition-colors duration-300 shadow-md">
      <div className="w-full px-4 sm:px-6 lg:px-10 h-[85px] flex items-center justify-between">
        
        {/* Brand / Logo */}
        <a href="#" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#E8ECD6] dark:text-cyan-400 hover:opacity-90 transition-opacity">
          My Portfolio
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/ravi-bhuvan-985399286/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-transform duration-300"
            title="LinkedIn"
          >
            <img src="/images/link.png" alt="LinkedIn" className="w-7 h-7 object-contain" />
          </a>

          <a href="#skills" className="text-[#E8ECD6] dark:text-slate-200 hover:underline font-semibold text-lg transition-all">
            Skills
          </a>
          <a href="#projects" className="text-[#E8ECD6] dark:text-slate-200 hover:underline font-semibold text-lg transition-all">
            Projects
          </a>
          <a href="#contact" className="text-[#E8ECD6] dark:text-slate-200 hover:underline font-semibold text-lg transition-all">
            Contact
          </a>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E8ECD6] dark:text-cyan-400 hover:underline font-semibold text-lg transition-all"
          >
            Resume
          </a>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/15 dark:bg-slate-800 text-[#E8ECD6] dark:text-amber-400 hover:bg-white/25 dark:hover:bg-slate-700 transition-all font-medium text-sm border border-white/20 dark:border-slate-700"
            aria-label="Toggle Dark Mode"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? (
              <>
                <Sun className="w-4 h-4 text-amber-400 fill-amber-400/20" />
                <span className="text-amber-300 font-semibold text-xs">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-white" />
                <span className="text-white font-semibold text-xs">Dark</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2.5 md:hidden">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-white/15 dark:bg-slate-800 text-[#E8ECD6] dark:text-amber-400 focus:outline-none"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-white" />}
          </button>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/10 dark:bg-slate-800 text-[#E8ECD6] focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#a34f3f] dark:bg-slate-900 border-t border-white/10 dark:border-slate-800 px-6 py-5 flex flex-col gap-4 text-center shadow-xl">
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#E8ECD6] dark:text-slate-200 font-semibold text-lg hover:underline py-1"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#E8ECD6] dark:text-slate-200 font-semibold text-lg hover:underline py-1"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#E8ECD6] dark:text-slate-200 font-semibold text-lg hover:underline py-1"
          >
            Contact
          </a>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#E8ECD6] dark:text-cyan-400 font-semibold text-lg hover:underline py-1 flex items-center justify-center gap-1.5"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </div>
      )}
    </nav>
  );
}
