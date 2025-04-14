// src/config/navLinks.js

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  {
    label: 'Projects',
    isDropdown: true,
    subLinks: [
      { to: '/projects/pattaya', label: 'Pattaya' },
      { to: '/projects/sihanoukville', label: 'Sihanoukville' },
    ],
  },
  { to: '/contact', label: 'Contact' },
];