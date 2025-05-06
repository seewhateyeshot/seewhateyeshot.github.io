import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.theme === 'dark';
  });

  // Ensure the meta tag exists only once
  useEffect(() => {
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'theme-color');
      document.head.appendChild(meta);
    }

    const html = document.documentElement;

    const applyTheme = (theme) => {
      html.setAttribute('data-theme', theme);
      localStorage.theme = theme;
      meta.setAttribute('content', theme === 'dark' ? '#000000' : '#ffffff');
      html.classList.remove('skin-theme-clientpref-day', 'skin-theme-clientpref-night');
      const modeClass = theme === 'dark' ? 'skin-theme-clientpref-night' : 'skin-theme-clientpref-day';
      html.classList.add(modeClass);
    };

    applyTheme(isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(prev => !prev)}
      className="cursor-pointer border px-3 py-1 rounded flex items-center gap-2"
    >
      <span>{isDark ? '🌞' : '🌙'}</span>
    </button>
  );
}