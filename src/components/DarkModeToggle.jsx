import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    // Detect saved preference on first render
    return localStorage.theme === 'dark';
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.setAttribute('data-theme', 'dark');
      localStorage.theme = 'dark';
    } else {
      html.setAttribute('data-theme', 'light');
      localStorage.theme = 'light';
    }
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