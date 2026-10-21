import { portfolio } from '@/data/portfolio';

export default function JourneyTimeline() {
  return (
    <div className="garden-journey-layout">
      <div className="garden-timeline">
        {portfolio.journey.map((item, index) => (
          <article className="garden-timeline-item" key={item.organization}>
            <div className="garden-timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div>
            <div className="garden-card garden-timeline-card">
              <div className="garden-timeline-meta"><span className="garden-period">{item.period}</span><span>{item.location}</span></div>
              <h3>{item.role}</h3>
              <p className="garden-organization">{item.organization}</p>
              <ul>{item.description.map((line) => <li key={line}>{line}</li>)}</ul>
              <div className="garden-tags">{item.stack.map((technology) => <span key={technology}>{technology}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
      <aside className="garden-education-stack">
        <article className="garden-card garden-education-card">
          <span className="garden-index">FORMACIÓN ACADÉMICA</span>
          {portfolio.education.map((item) => <div className="garden-education-item" key={item.program}><span>{item.period}</span><h3>{item.program}</h3><p>{item.institution}</p><span className="garden-education-status">{item.status}</span></div>)}
        </article>
        <article className="garden-card garden-training-card">
          <span className="garden-index">FORMACIONES CISCO · ESTATUS POR CONFIRMAR</span>
          <h3>Aprendizaje técnico</h3>
          <ul>{portfolio.training.map((item) => <li key={item}>{item}</li>)}</ul>
          <p className="garden-small-note">Los documentos disponibles las mencionan como certificaciones; la obtención requiere confirmación.</p>
        </article>
      </aside>
    </div>
  );
}
