import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
// context
import { ScrollContext } from '../context/ScrollContext';

// ----------------------------------------------------------------------

const SECTION_LABELS = {
  home: 'Home',
  skills: 'Skills',
  experience: 'Experience',
  works: 'Projects',
  contact: 'Contact',
};

export default function Header({ darkModeEnabled, toggleMode }) {
  const { isScroll, jumpToTop } = useContext(ScrollContext);
  const [activeSection, setActiveSection] = useState('home');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const sections = ['skills', 'experience', 'works', 'contact'];

    const handleScroll = () => {
      let current = 'home';
      const scrollPosition = window.scrollY + 120; // offset for navbar height + buffer

      // If we are close to the top of the page, it's home
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }

      // If we are at the bottom of the page, it's contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection('contact');
        return;
      }

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          const height = rect.height;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = section;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    if (!dropdownOpen) return;

    const handleClickOutside = (e) => {
      if (!e.target.closest('.mobile-breadcrumb-container')) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [dropdownOpen]);

  return (
    <header className="container mx-auto">
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] flex h-16 w-full items-center justify-between px-4 transition-all duration-300 md:h-20 md:px-[6%] ${
          isScroll
            ? 'bg-white/70 shadow-sm shadow-slate-100/50 backdrop-blur-xl dark:bg-neutral-900/70 dark:shadow-none'
            : 'bg-transparent'
        }`}
      >
        {/* Logo Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex cursor-pointer select-none items-center gap-2"
          onClick={jumpToTop}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-indigo-600 text-sm font-black text-white shadow-md shadow-primary-500/25 transition-transform hover:scale-105 active:scale-95">
            IM
          </div>
          <span className="text-md font-extrabold tracking-tight text-slate-800 dark:text-neutral-50 md:text-xl">
            irfan
            <span className="bg-gradient-to-r from-primary-500 to-indigo-600 bg-clip-text text-transparent">
              mustafa
            </span>
            <span className="animate-pulse font-black text-primary-500">.</span>
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <ul className="flex items-center space-x-1">
            {Object.entries(SECTION_LABELS).map(([id, label]) => {
              const isActive = activeSection === id;
              return (
                <li key={id} className="relative">
                  <a
                    href={id === 'home' ? '#' : `#${id}`}
                    onClick={(e) => {
                      if (id === 'home') {
                        e.preventDefault();
                        jumpToTop();
                      }
                    }}
                    className={`relative block rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 ${
                      isActive
                        ? 'font-extrabold text-primary-600 dark:text-primary-400'
                        : 'text-slate-600 hover:text-slate-900 dark:text-neutral-300 dark:hover:text-neutral-50'
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-gradient-to-r from-primary-500 to-indigo-500"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
            <li className="pl-2">
              <button
                className="rounded-xl p-2.5 text-sm text-slate-500 transition-colors hover:bg-slate-100/80 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-800/80"
                onClick={toggleMode}
                aria-label="Toggle dark mode"
              >
                {darkModeEnabled ? (
                  <svg
                    className="h-5 w-5 transition-transform duration-300 hover:rotate-12"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414z"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5 transition-transform duration-300 hover:-rotate-12"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </motion.div>

        {/* Mobile Breadcrumb Menu & Dark Mode toggle */}
        <div className="mobile-breadcrumb-container flex items-center gap-2 md:hidden">
          <div className="relative flex items-center gap-1 text-[13px] font-medium text-slate-500 dark:text-neutral-400">
            <span
              className="cursor-pointer font-extrabold transition-colors hover:text-primary-500"
              onClick={jumpToTop}
            >
              IM
            </span>
            <span className="font-bold text-slate-300 dark:text-neutral-800">/</span>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 rounded-full border border-slate-200/60 bg-slate-50/90 px-2.5 py-1 font-extrabold text-primary-600 transition-all hover:bg-primary-50 active:scale-95 dark:border-neutral-800/80 dark:bg-neutral-800/90 dark:text-primary-400 dark:hover:bg-neutral-800"
            >
              {SECTION_LABELS[activeSection] || activeSection}
              <svg
                className={`h-3 w-3 text-slate-400 transition-transform duration-200 dark:text-neutral-500 ${
                  dropdownOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <button
            className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-slate-100/50 focus:outline-none dark:text-neutral-400 dark:hover:bg-neutral-800/50"
            onClick={toggleMode}
            aria-label="Toggle dark mode"
          >
            {darkModeEnabled ? (
              <svg
                className="h-5 w-5 transition-transform duration-300 hover:rotate-12"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707-.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5 transition-transform duration-300 hover:-rotate-12"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu Container */}
      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="mobile-breadcrumb-container fixed right-4 top-16 z-[999] w-48 rounded-2xl border border-slate-200/60 bg-white/80 p-2 shadow-lg shadow-slate-100/50 backdrop-blur-xl dark:border-neutral-800/80 dark:bg-neutral-900/80 dark:shadow-none"
          >
            <ul className="flex flex-col gap-1">
              {Object.entries(SECTION_LABELS).map(([id, label]) => {
                const isActive = activeSection === id;
                return (
                  <li key={id}>
                    <a
                      href={id === 'home' ? '#' : `#${id}`}
                      onClick={(e) => {
                        setDropdownOpen(false);
                        if (id === 'home') {
                          e.preventDefault();
                          jumpToTop();
                        }
                      }}
                      className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-[13px] font-bold capitalize transition-all active:scale-[0.98] ${
                        isActive
                          ? 'bg-primary-500 text-white dark:bg-primary-600'
                          : 'text-slate-600 hover:bg-slate-100/80 dark:text-neutral-300 dark:hover:bg-neutral-800/80'
                      }`}
                    >
                      {label}
                      {isActive && (
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

Header.propTypes = {
  darkModeEnabled: PropTypes.bool,
  toggleMode: PropTypes.func,
};
