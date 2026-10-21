'use client';

import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const links = [
  ['Inicio', '#home'],
  ['Proyectos', '#projects'],
  ['Trayectoria', '#journey'],
  ['Tecnologías', '#tech'],
  ['Notas', '#notes'],
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="garden-header-wrap">
      <nav className={`garden-header ${menuOpen ? 'garden-menu-open' : ''}`} aria-label="Navegación principal">
        <a className="garden-brand" href="#home" aria-label="Inicio">AE<span>.</span></a>
        <div className="garden-nav-links">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</div>
        <div className="garden-header-actions"><ThemeToggle /><a className="garden-contact-link" href="#contact">Contacto <span aria-hidden="true">↗</span></a></div>
        <button className="garden-menu-toggle" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen((open) => !open)}><span /><span /></button>
      </nav>
    </header>
  );
}
