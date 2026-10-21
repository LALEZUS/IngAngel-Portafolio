import Link from 'next/link';
export default function NotFound() { return <main className="wrap not-found"><div><span className="eyebrow">RUTA NO ENCONTRADA</span><h1>404</h1><p className="muted">Esta dirección no forma parte de la topología.</p><Link className="button primary" href="/">Volver al inicio</Link></div></main>; }
