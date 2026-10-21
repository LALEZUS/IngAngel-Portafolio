'use client';

import styled from '@emotion/styled';
import { useMemo, useState } from 'react';
import Image from 'next/image';

const Panel = styled.div<{ $accent?: boolean }>`
  border: 1px solid ${({ $accent }) => $accent ? '#00e5ff55' : '#ffffff17'};
  background: linear-gradient(145deg, #131a23, #0b0f14);
  transition: border-color .2s, transform .2s;
  &:hover { border-color: #00e5ff77; transform: translateY(-3px); }
`;

type Profile = {
  name: string; headline: string; location: string; summary: string;
  experience: {role:string;company:string;period:string;location:string;details:string[];technologies:string[]}[];
  education: {program:string;institution:string;period:string;status:string}[];
  skills: {category:string;items:string[]}[]; certifications:string[];
  languages:{name:string;level:string}[];
  projects:{name:string;category:string;description:string;contribution:string;technologies:string[];url:string|null}[];
  publicContact:{email:string|null;linkedin:string|null;github:string|null;portfolio:string|null};
};

export function NetworkIllustration() {
  return <div className="network-card" aria-label="Visualización decorativa de topología de red"><svg className="net-svg" viewBox="0 0 460 430" role="img" aria-label="Nodos conectados y paquetes de datos en tránsito">
    <g className="netline"><path d="M230 215 110 115 345 95 370 275 225 355 95 280 230 215 345 95M110 115 95 280M345 95 225 355M370 275 110 115" fill="none"/><path d="M230 215 370 275M230 215 110 115M230 215 345 95M230 215 225 355M230 215 95 280" fill="none" opacity=".4"/></g>
    <circle className="hub" cx="230" cy="215" r="7"/><circle className="node" cx="110" cy="115" r="8"/><circle className="node" cx="345" cy="95" r="8"/><circle className="node" cx="370" cy="275" r="8"/><circle className="node" cx="225" cy="355" r="8"/><circle className="node" cx="95" cy="280" r="8"/><circle className="packet" cx="0" cy="0" r="3"/><circle className="packet p2" cx="0" cy="0" r="3"/><circle className="packet p3" cx="0" cy="0" r="3"/>
  </svg><div className="net-label"><strong>NETWORK / 01</strong><span>ROUTING · SYSTEMS · CONNECTIVITY</span></div></div>;
}

function NetworkLab() {
  const nodes = [
    {id:'internet',label:'Internet',x:245,y:28,desc:'Punto externo de entrada a la topología demostrativa. Los datos atraviesan el firewall antes de llegar a la red interna.'},
    {id:'firewall',label:'Firewall',x:245,y:105,desc:'Aplica reglas de filtrado entre la red externa y la LAN. En un entorno real, controla el tráfico permitido según políticas.'},
    {id:'router',label:'Router',x:245,y:185,desc:'Conecta redes IP diferentes y decide el siguiente salto de los paquetes según su tabla de rutas.'},
    {id:'switch',label:'Switch · VLAN 10',x:245,y:270,desc:'Conecta dispositivos de la red local. La VLAN 10 representa una segmentación lógica de ejemplo.'},
    {id:'server',label:'Servidor',x:105,y:345,desc:'Servicio interno de demostración dentro de la VLAN 10.'},
    {id:'client',label:'Cliente',x:385,y:345,desc:'Dispositivo usuario que origina solicitudes hacia los servicios de red.'},
  ];
  const [selected,setSelected]=useState('router'); const [running,setRunning]=useState(false);
  const active=running?['internet-firewall','firewall-router','router-switch','switch-server','switch-client']:[];
  const node=nodes.find(n=>n.id===selected)!;
  return <div className="lab-layout"><div><div className="lab-canvas"><p className="mono">TOPOLOGÍA DEMOSTRATIVA · AISLADA</p><svg viewBox="0 0 490 390" role="img" aria-label="Topología demostrativa de red"><path className={`lab-edge ${active.includes('internet-firewall')?'active':''}`} d="M245 53V81"/><path className={`lab-edge ${active.includes('firewall-router')?'active':''}`} d="M245 130V161"/><path className={`lab-edge ${active.includes('router-switch')?'active':''}`} d="M245 210V246"/><path className={`lab-edge ${active.includes('switch-server')?'active':''}`} d="M220 287 125 330"/><path className={`lab-edge ${active.includes('switch-client')?'active':''}`} d="m270 287 95 43"/>{nodes.map(n=><g key={n.id} className={`lab-node ${selected===n.id?'selected':''}`} onClick={()=>setSelected(n.id)} onKeyDown={e=>e.key==='Enter'&&setSelected(n.id)} tabIndex={0} role="button" aria-label={`Seleccionar ${n.label}`}><rect x={n.x-66} y={n.y-22} width="132" height="44"/><text x={n.x} y={n.y+5}>{n.label}</text></g>)}</svg><div className="lab-controls"><button className="button primary" onClick={()=>setRunning(v=>!v)}>{running?'Detener paquetes':'Simular paquetes'}</button><button className="button" onClick={()=>{setRunning(false);setSelected('router')}}>Reiniciar</button></div></div><p className="muted">La simulación es visual y no se conecta a redes ni dispositivos reales.</p></div><Panel className="lab-info" $accent><span className="eyebrow">Nodo seleccionado</span><h3>{node.label}</h3><p>{node.desc}</p><div className="mono">CONCEPTOS</div><p>LAN · VLAN · ROUTING · FIREWALL</p><p className="muted">Selecciona otro nodo para consultar su función.</p></Panel></div>;
}

export default function Portfolio({profile}:{profile:Profile}) {
  const [menu,setMenu]=useState(false),[category,setCategory]=useState('Todos');
  const categories=useMemo(()=>['Todos',...new Set(profile.projects.map(p=>p.category))],[profile.projects]);
  const projects=profile.projects.filter(p=>category==='Todos'||p.category===category);
  return <>
    <nav className={`nav ${menu?'open':''}`}><div className="wrap nav-inner"><a className="brand" href="#inicio">AED<span>_</span></a><button className="menu-button" onClick={()=>setMenu(!menu)} aria-expanded={menu} aria-label="Abrir navegación">☰</button><div className="nav-links">{[['Perfil','perfil'],['Habilidades','habilidades'],['Experiencia','experiencia'],['Proyectos','proyectos'],['Network Lab','lab'],['Contacto','contacto']].map(([t,id])=><a key={id} href={`#${id}`} onClick={()=>setMenu(false)}>{t}</a>)}</div></div></nav>
    <main id="inicio"><div className="wrap hero"><div><div className="hero-status"><i className="dot"/> PORTAFOLIO PROFESIONAL · {profile.location.toUpperCase()}</div><h1>Angel Eduardo<br/>Domínguez <em>Martínez</em></h1><div className="eyebrow">{profile.headline}</div><p>{profile.summary}</p><div className="actions"><a className="button primary" href="#proyectos">Explorar proyectos ↗</a><a className="button" href="#contacto">Contactar</a></div><div className="stats"><div className="stat"><b>03</b><span>Experiencias</span></div><div className="stat"><b>07</b><span>Áreas técnicas</span></div><div className="stat"><b>04</b><span>Formaciones Cisco*</span></div></div><p className="muted" style={{fontSize:11}}>*Listadas en el CV; categoría de obtención por confirmar.</p></div><NetworkIllustration/></div>
      <section id="perfil" className="section"><div className="wrap"><div className="eyebrow">01 / Perfil profesional</div><h2 className="section-title">Ingeniería para conectar<br/>lo digital y lo físico.</h2><div className="profile-grid"><p className="profile-copy">Combina la práctica de <strong>desarrollo de plataformas web</strong> con una formación en redes y telecomunicaciones. Su experiencia recorre catálogo empresarial, integraciones de servicios, visualización 3D, soporte TI y conectividad de infraestructura.</p><div className="info-box"><h3>Enfoque de trabajo</h3><p>Construir herramientas útiles, cuidar la operación y resolver problemas técnicos con orden y comunicación clara.</p><div className="mono">BASE · GUADALAJARA, MÉXICO</div></div></div></div></section>
      <section id="habilidades" className="section"><div className="wrap"><div className="eyebrow">02 / Stack técnico</div><h2 className="section-title">Habilidades respaldadas<br/>por experiencia y formación.</h2><div className="skill-grid">{profile.skills.map(s=><Panel className="skill-card" key={s.category}><h3>{s.category}</h3><div className="chips">{s.items.map(i=><span className="chip" key={i}>{i}</span>)}</div></Panel>)}</div></div></section>
      <section id="experiencia" className="section"><div className="wrap"><div className="eyebrow">03 / Trayectoria</div><h2 className="section-title">Experiencia profesional</h2><div className="timeline">{profile.experience.map((e,i)=><details className="experience" key={e.company} open={i===0}><summary><span><h3>{e.role}</h3><span className="company">{e.company} · {e.location}</span></span><span className="period">{e.period}</span></summary><div className="experience-body"><ul>{e.details.map(d=><li key={d}>{d}</li>)}</ul><div className="chips">{e.technologies.map(t=><span className="chip" key={t}>{t}</span>)}</div></div></details>)}</div></div></section>
      <section id="proyectos" className="section"><div className="wrap"><div className="eyebrow">04 / Trabajo destacado</div><h2 className="section-title">Proyectos seleccionados</h2><div className="filter-row">{categories.map(c=><button className={`filter-btn ${c===category?'active':''}`} key={c} onClick={()=>setCategory(c)}>{c}</button>)}</div>{projects.length?<div className="project-grid">{projects.map(p=><Panel className="project-card" key={p.name}><a className="project-image" href={p.url ?? '/images/total-ground.png'} target={p.url?'_blank':undefined} rel={p.url?'noreferrer':undefined} aria-label={`Abrir ${p.name}`}><Image src="/images/total-ground.png" alt={`Captura de pantalla del proyecto ${p.name}`} width={1274} height={1002} sizes="(max-width: 700px) 100vw, 560px" priority /></a><span className="eyebrow">{p.category}</span><h3>{p.name}</h3><p>{p.description}</p><p><strong>Contribución:</strong> {p.contribution}</p><div className="chips">{p.technologies.map(t=><span className="chip" key={t}>{t}</span>)}</div>{p.url&&<a className="button" href={p.url} target="_blank" rel="noreferrer">Visitar sitio ↗</a>}</Panel>)}</div>:<p className="empty-note">Todavía no hay proyectos documentados en esta categoría.</p>}</div></section>
      <section id="lab" className="section"><div className="wrap"><div className="eyebrow">05 / Network Lab</div><h2 className="section-title">Una red, paquete a paquete.</h2><p className="muted">Explora una topología de demostración aislada. Selecciona dispositivos para conocer su función o simula el tránsito de paquetes.</p><NetworkLab/></div></section>
      <section id="formacion" className="section"><div className="wrap"><div className="eyebrow">06 / Formación</div><h2 className="section-title">Fundamentos y aprendizaje continuo.</h2><div className="edu-grid"><div><h3 className="mono">FORMACIÓN ACADÉMICA</h3>{profile.education.map(e=><div className="edu-item" key={e.program}><h3>{e.program}</h3><p>{e.institution} · {e.period}</p><span className="muted">{e.status}</span></div>)}</div><div><h3 className="mono">FORMACIONES CISCO · ESTADO POR CONFIRMAR</h3>{profile.certifications.map(c=><div className="edu-item" key={c}><h3>{c.split(' · ')[0]}</h3><p>{c.split(' · ')[1]}</p></div>)}<h3 className="mono" style={{marginTop:24}}>IDIOMAS</h3>{profile.languages.map(l=><div className="edu-item" key={l.name}><h3>{l.name}</h3><p>{l.level}</p></div>)}</div></div></div></section>
      <section id="contacto" className="section"><div className="wrap"><div className="eyebrow">07 / Contacto</div><div className="contact-box"><div><h3>¿Tienes un reto tecnológico en mente?</h3><p className="muted">Los datos de contacto no están publicados en los documentos disponibles para este sitio.</p></div><span className="empty-note">Contacto pendiente de autorización</span></div></div></section>
    </main><footer className="wrap footer"><span>© {new Date().getFullYear()} {profile.name}</span><span>DESARROLLO · REDES · SISTEMAS</span></footer>
  </>;
}
