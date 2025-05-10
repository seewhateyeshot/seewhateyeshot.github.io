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
      { to: '/projects/soi6', label: 'Soi 6 — ซอยหก' },
      { to: '/projects/biking_home', label: 'Bikepacking' },
    ],
  },
  {
    label: 'Shorts',
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

  const [expanded, setExpanded] = useState({
    Projects: false,
    Shorts: false,
  });

  const toggleSection = (section) =>
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));

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
  function renderMobileMenu(expanded, toggleSection) {
    // define a handler to close the menu
    function handleLinkClick() {
      setMenuOpen(false);
    }

    return (
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
          }`}
      >
        <ul className="mobile-menu text-center text-lg font-medium space-y-2 pt-4">
          {LINKS.map((item, idx) => {
            if (item.subLinks) {
              const isExpanded = expanded[item.label];

              return (
                <li key={idx}
                >
                  <button
                    onClick={() => toggleSection(item.label)}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    {item.label.toUpperCase()}
                    <span>{isExpanded ? '▾' : '▸'}</span>
                  </button>
                  <ul
                    className={`mt-1 space-y-1 transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    {item.subLinks.map((sub, sidx) => (
                      <li key={sidx}
                        className="submenu-item"
                      >
                        <Link
                          to={sub.to}
                          onClick={handleLinkClick}
                          className="block hover:underline"
                        >
                          {sub.label.toUpperCase()}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }

            return (
              <li key={idx} className="menu-item">
                <Link
                  to={item.to}
                  className="block hover:underline"
                  onClick={handleLinkClick}
                >
                  {item.label.toUpperCase()}
                </Link>
              </li>
            );
          })}
          <li className="mt-6 border-t border-gray-700 pt-4">
            <div className="flex justify-center">
              <button
                onClick={toggleTheme}
                className="border text-sm px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded flex items-center gap-2"
              >
                <span>{theme === 'dark' ? '🌞 Light theme' : '🌙 Dark theme'}</span>
              </button>
            </div>
          </li>
        </ul >
      </div >
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
              <>
                {renderDesktopNav()}
                <button
                  onClick={toggleTheme}
                  className="ml-2 cursor-pointer border px-3 py-1 rounded flex items-center gap-1"
                >
                  <span>{theme === 'dark' ? '🌞' : '🌙'}</span>
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile menu is BELOW nav; pushes content down */}
      {isMobile && renderMobileMenu(expanded, toggleSection)}

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





