import { portfolio } from '@/data/portfolio';
import BentoGrid from '@/components/digital-garden/BentoGrid';
import JourneyTimeline from '@/components/digital-garden/JourneyTimeline';
import SiteHeader from '@/components/digital-garden/SiteHeader';
import TechSpectrum from '@/components/digital-garden/TechSpectrum';
import WorldMapSection from '@/components/digital-garden/WorldMapSection';

function HeroMark() {
  return <div className="garden-hero-art" aria-hidden="true"><div className="garden-orbit garden-orbit-a"/><div className="garden-orbit garden-orbit-b"/><div className="garden-orbit garden-orbit-c"/><div className="garden-hero-core">AE<span>.</span></div><span className="garden-orbit-dot garden-dot-a"/><span className="garden-orbit-dot garden-dot-b"/><span className="garden-orbit-dot garden-dot-c"/><span className="garden-art-caption">REDES · SISTEMAS · WEB</span><span className="garden-art-axis"/></div>;
}

export default function HomePage() {
  return <>
    <SiteHeader />
    <main className="garden-page">
      <section className="garden-hero garden-container" id="home" aria-labelledby="hero-title">
        <div className="garden-hero-copy">
          <div className="garden-kicker"><span className="garden-kicker-line"/> PORTAFOLIO PROFESIONAL <span className="garden-kicker-separator">/</span> GUADALAJARA, MÉXICO</div>
          <h1 id="hero-title">Angel Eduardo<br/><span>Domínguez Martínez</span></h1>
          <p className="garden-role">{portfolio.role}</p>
          <p className="garden-intro">{portfolio.intro}</p>
          <blockquote className="garden-quote"><span aria-hidden="true">“</span>Conectar sistemas. Construir soluciones útiles.</blockquote>
          <div className="garden-hero-actions"><a className="garden-button garden-button-primary" href="#projects">Ver proyectos <span aria-hidden="true">↓</span></a><a className="garden-button garden-button-secondary" href="https://github.com/LALEZUS" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a></div>
          <div className="garden-location"><span className="garden-location-dot"/> Basado en {portfolio.location}</div>
        </div>
        <HeroMark />
        <div className="garden-hero-foot"><span>INGENIERÍA DIGITAL</span><span>01 — 05</span></div>
      </section>

      <section className="garden-section garden-container" id="projects" aria-labelledby="projects-title">
        <div className="garden-section-heading"><div><span className="garden-section-index">01 / TRABAJO SELECCIONADO</span><h2 id="projects-title">Proyectos & práctica</h2></div><p>Construir, integrar y conectar.</p></div>
        <BentoGrid />
      </section>

      <section className="garden-section garden-container" id="journey" aria-labelledby="journey-title">
        <div className="garden-section-heading"><div><span className="garden-section-index">02 / RECORRIDO</span><h2 id="journey-title">Trayectoria</h2></div><p>Trabajo, formación y evolución técnica.</p></div>
        <JourneyTimeline />
      </section>

      <section className="garden-section garden-container" id="tech" aria-labelledby="tech-title">
        <div className="garden-section-heading"><div><span className="garden-section-index">03 / MAPA TÉCNICO</span><h2 id="tech-title">Tech spectrum</h2></div><p>Tecnologías respaldadas por experiencia y formación.</p></div>
        <TechSpectrum />
      </section>

      <WorldMapSection />

      <section className="garden-section garden-container" id="notes" aria-labelledby="notes-title">
        <div className="garden-section-heading"><div><span className="garden-section-index">04 / DIGITAL GARDEN</span><h2 id="notes-title">Notas técnicas</h2></div><p>Un espacio para compartir ideas y aprendizajes.</p></div>
        <article className="garden-card garden-notes-empty"><span className="garden-notes-icon" aria-hidden="true">✳</span><div><h3>El jardín está creciendo.</h3><p>Aún no hay artículos publicados. Esta sección queda preparada para futuras notas sobre desarrollo web, redes y sistemas.</p></div><span className="garden-index">SIN PUBLICACIONES</span></article>
      </section>

      <section className="garden-contact-section garden-container" id="contact" aria-labelledby="contact-title">
        <div className="garden-contact-card garden-card"><span className="garden-section-index">05 / SIGUIENTE CONVERSACIÓN</span><div className="garden-contact-main"><div><h2 id="contact-title">¿Hablamos de tecnología?</h2><p>El correo profesional no está publicado en los documentos disponibles. Puedes encontrarme en GitHub.</p></div><a className="garden-button garden-button-primary" href="https://github.com/LALEZUS" target="_blank" rel="noreferrer">Visitar GitHub <span aria-hidden="true">↗</span></a></div></div>
      </section>
    </main>
    <footer className="garden-footer garden-container"><a className="garden-brand" href="#home">AE<span>.</span></a><div className="garden-colophon"><span>Hecho con Next.js, React y Emotion.</span><span>Colophon · Desplegado en Vercel</span></div><a className="garden-footer-link" href="https://github.com/LALEZUS" target="_blank" rel="noreferrer">GitHub ↗</a><a className="garden-back-top" href="#home" aria-label="Volver al inicio">↑</a></footer>
  </>;
}
