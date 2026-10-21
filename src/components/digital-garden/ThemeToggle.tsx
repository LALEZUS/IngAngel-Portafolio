'use client';

import { useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const saved = window.localStorage.getItem('portfolio-theme');
    const initial: Theme = saved === 'light' || saved === 'dark'
      ? saved
      : window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  function toggleTheme() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem('portfolio-theme', next);
  }

  return (
    <button className="garden-theme-toggle inline-flex items-center justify-center" type="button" onClick={toggleTheme} aria-label={`Cambiar a tema ${theme === 'dark' ? 'claro' : 'oscuro'}`} title={`Tema ${theme === 'dark' ? 'claro' : 'oscuro'}`}>
      <svg className="garden-sun-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>
      <svg className="garden-moon-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 15.5A8.5 8.5 0 0 1 8.5 3.8 8.6 8.6 0 1 0 20.2 15.5Z"/></svg>
    </button>
  );
}
