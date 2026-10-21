import { portfolio } from '@/data/portfolio';

const icons: Record<string, React.ReactNode> = {
  code: <><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" /></>,
  server: <><rect x="3" y="3" width="18" height="8" rx="2"/><rect x="3" y="13" width="18" height="8" rx="2"/><path d="M7 7h.01M7 17h.01M11 7h6M11 17h6"/></>,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></>,
  network: <><circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="18" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="m10.8 7.2-4.6 8.6m7-8.6 4.6 8.6M7.5 18h9"/></>,
  layers: <><path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/></>,
};

export default function TechSpectrum() {
  return (
    <div className="garden-tech-grid">
      {portfolio.technologies.map((group, index) => (
        <article className={`garden-card garden-tech-card garden-tech-card-${index + 1}`} key={group.layer}>
          <div className="garden-tech-heading"><span className="garden-tech-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[group.icon]}</svg></span><span className="garden-index">{String(index + 1).padStart(2, '0')}</span></div>
          <h3>{group.layer}</h3><p>{group.detail}</p>
          <div className="garden-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
        </article>
      ))}
    </div>
  );
}
