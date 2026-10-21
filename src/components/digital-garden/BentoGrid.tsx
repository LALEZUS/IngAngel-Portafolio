import { portfolio } from '@/data/portfolio';
import ProjectCard from './ProjectCard';

function Ornament({ type }: { type: 'network' | 'web' }) {
  if (type === 'network') return <svg className="garden-ornament garden-network-ornament" viewBox="0 0 220 140" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="1"><path d="m110 70-65-39 128 4 18 79-85 23-77-37 81-30 81 44M45 31l-16 69m144-65-67 92m85-13-98-44"/><circle cx="110" cy="70" r="5" fill="currentColor"/><circle cx="45" cy="31" r="4"/><circle cx="173" cy="35" r="4"/><circle cx="191" cy="114" r="4"/><circle cx="106" cy="137" r="4"/><circle cx="29" cy="100" r="4"/></g></svg>;
  return <svg className="garden-ornament garden-web-ornament" viewBox="0 0 220 140" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="30" y="19" width="160" height="102" rx="10"/><path d="M30 43h160M49 32h3m10 0h3m10 0h3M47 59h54v47H47zm67 0h56v10h-56zm0 19h56v28h-56z"/><circle cx="167" cy="92" r="12"/><path d="M158 92h18m-9-9v18"/></g></svg>;
}

export default function BentoGrid() {
  const project = portfolio.projects[0];
  return (
    <div className="garden-bento-grid">
      <ProjectCard project={project} />
      <article className="garden-card garden-note-card garden-note-network">
        <div className="garden-card-meta"><span className="garden-index">01 / INFRAESTRUCTURA</span><span className="garden-icon" aria-hidden="true">↗</span></div>
        <Ornament type="network" />
        <h3>Redes que sostienen la experiencia.</h3>
        <p>Formación en redes y telecomunicaciones aplicada a conectividad, soporte y operación TI.</p>
        <div className="garden-tags"><span>LAN / WAN</span><span>DHCP</span><span>DNS</span><span>VPN</span></div>
      </article>
      <article className="garden-card garden-note-card garden-note-web">
        <div className="garden-card-meta"><span className="garden-index">02 / DESARROLLO</span><span className="garden-icon" aria-hidden="true">⌘</span></div>
        <Ornament type="web" />
        <h3>Del catálogo a lo interactivo.</h3>
        <p>Aplicaciones web empresariales, integraciones de servicios y visualización 3D para la web.</p>
        <div className="garden-tags"><span>Laravel</span><span>Livewire</span><span>Three.js</span></div>
      </article>
      <article className="garden-card garden-learning-card">
        <div className="garden-card-meta"><span className="garden-index">APRENDIZAJE</span><span className="garden-pulse" /></div>
        <h3>Una práctica que conecta capas.</h3>
        <p>Desarrollo, infraestructura y soporte comparten una misma meta: tecnología útil y confiable.</p>
        <a href="#journey" className="garden-text-link">Ver trayectoria <span aria-hidden="true">↓</span></a>
      </article>
    </div>
  );
}
