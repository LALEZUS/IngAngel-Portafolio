import Image from 'next/image';

type Project = (typeof import('@/data/portfolio').portfolio.projects)[number];

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="garden-card garden-project-card">
      <div className="garden-project-copy">
        <div className="garden-card-meta"><span className="garden-pill">{project.category}</span><span className="garden-status"><i />{project.status}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <p className="garden-contribution"><span>Contribución</span>{project.contribution}</p>
        <div className="garden-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        <a className="garden-text-link" href={project.url} target="_blank" rel="noreferrer">Visitar sitio <span aria-hidden="true">↗</span></a>
      </div>
      <a className="garden-project-preview" href={project.url} target="_blank" rel="noreferrer" aria-label={`Visitar ${project.title}`}>
        <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 780px) 100vw, 52vw" priority />
        <span className="garden-preview-open" aria-hidden="true">↗</span>
      </a>
    </article>
  );
}
