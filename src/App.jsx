import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Analytics from './components/Analytics';
import ScrollToTop from './components/ScrollToTop';

import './App.css';

/**
 * Single source of truth for links.
 * If you want multiple sub-links, add them in subLinks below
 */
const LINKS = [
  { to: '/', label: 'Home' },
  {
    label: 'Projects',
    subLinks: [
      { to: '/projects/soi6', label: 'Soi 6' },
      { to: '/projects/biking_home', label: 'Biking Home' },
    ],
  },
  {
    label: 'Short series',
    subLinks: [
      { to: '/brief/samos', label: 'Samos' },
      { to: '/brief/sihanoukville', label: 'Sihanoukville' },
      { to: '/brief/songkran', label: 'Songkran' },
    ],
  },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    // Get saved theme or fall back to 'dark'
    return localStorage.getItem('theme') || 'dark';
  });

  const toggleMenu = () => {
    setMenuOpen(prev => {
      const next = !prev;
      if (next) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return next;
    });
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  /**
   * Render Desktop Nav
   */
  function renderDesktopNav() {
    return (
      <ul className="nav-right">
        {LINKS.map((item, idx) => {
          // If it has subLinks => it has a dropdown
          if (item.subLinks) {
            return (
              <li key={idx} className="dropdown">
                <span>{item.label} ▾</span>
                <ul className="sub-menu">
                  {item.subLinks.map((sub, sidx) => (
                    <li key={sidx}>
                      <Link to={sub.to}>{sub.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          }
          // normal link
          return (
            <li key={idx}>
              <Link to={item.to}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    );
  }

  /**
   * Render the MOBILE menu below the navbar (when open)
   */
  function renderMobileMenu() {
    if (!menuOpen) return null;

    // define a handler to close the menu
    function handleLinkClick() {
      setMenuOpen(false);
    }

    return (
      <ul className="mobile-menu">
        {LINKS.map((item, idx) => {
          if (item.subLinks) {
            return (
              <li key={idx}>
                <span>{item.label}</span>
                <ul className="sub-menu">
                  {item.subLinks.map((sub, sidx) => (
                    <li key={sidx}>
                      <Link to={sub.to}
                        className="block mobile-link-item hover:underline"
                        onClick={handleLinkClick}>
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          }
          return (
            <li key={idx}>
              <Link
                to={item.to}
                className="block mobile-link-item hover:underline"
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className="bg-white text-black dark:bg-zinc-950 dark:text-gray-300">
      <ScrollToTop />
      <Analytics />
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-div">
          {/* Logo on the left */}
          <Link to="/" className="logo flex items-center gap-2">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Logo" className="h-8 logo-img" />
            <span className="font-semibold text-lg tracking-tight">Çağdaş</span>
          </Link>

          <div className="flex items-center gap-3">
            {/* If mobile => show hamburger, else => desktop nav */}
            {isMobile ? (
              <button
                className="text-2xl focus:outline-none mb-1"
                onClick={toggleMenu}
              >
                {menuOpen ? '✖' : '☰'}
              </button>
            ) : (
              renderDesktopNav()
            )}

            <button
              onClick={toggleTheme}
              className="cursor-pointer border px-3 py-1 rounded flex items-center gap-2"
            >
              <span>{theme === 'dark' ? '🌞' : '🌙'}</span>
            </button>
            <div className="gap-1" />
          </div>
        </div>
      </nav>

      {/* Mobile menu is BELOW nav; pushes content down */}
      {isMobile && renderMobileMenu()}

      {/* Page content */}
      <main className="min-h-screen">
        <Outlet />
      </main>


      <footer className="footer">
        <div className="footer-div">
          © {new Date().getFullYear()}. All rights reserved. <br />
          No cookies, no tracking. <br />
          This site uses <a href="https://www.goatcounter.com/">GoatCounter</a> for anonymous visit counts.
        </div>
      </footer>
    </div>
  );
}





