import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.body.className = savedTheme + '-theme';
    } else {
      // Default to dark theme
      setIsDark(true);
      document.body.className = 'dark-theme';
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    const theme = newIsDark ? 'dark' : 'light';
    document.body.className = theme + '-theme';
    localStorage.setItem('theme', theme);
  };

  return (
    <div className="flex items-center justify-center">
      {isDark ? (
        // Day/Sun icon for switching to light mode
        <img
          src={assets.day}
          alt="Switch to light mode"
          onClick={toggleTheme}
          className="w-8 h-8 cursor-pointer filter brightness-100 animate-spin-slow hover:scale-110 transition-transform duration-300"
          aria-label="Switch to light mode"
        />
      ) : (
        // Night/Moon icon for switching to dark mode
        <img
          src={assets.night}
          alt="Switch to dark mode"
          onClick={toggleTheme}
          className="w-8 h-8 cursor-pointer filter brightness-90 animate-pulse hover:scale-110 transition-transform duration-300"
          aria-label="Switch to dark mode"
        />
      )}
    </div>
  );
};

export default ThemeToggle;
