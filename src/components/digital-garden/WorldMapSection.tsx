import WorldMap, { type WorldMapRoute } from '@/components/ui/world-map';

const guadalajara = { lat: 20.67738, lng: -103.34749, label: 'Guadalajara' };
const routes: WorldMapRoute[] = [
  { start: guadalajara, end: { lat: 34.0522, lng: -118.2437, label: 'Los Ángeles' } },
  { start: guadalajara, end: { lat: -15.7975, lng: -47.8919, label: 'Brasilia' } },
  { start: guadalajara, end: { lat: 38.7223, lng: -9.1393, label: 'Lisboa' } },
  { start: guadalajara, end: { lat: 51.5074, lng: -0.1278, label: 'Londres' } },
  { start: guadalajara, end: { lat: 28.6139, lng: 77.209, label: 'Nueva Delhi' } },
];

export default function WorldMapSection() {
  return (
    <section className="garden-section garden-container" id="connectivity" aria-labelledby="connectivity-title">
      <div className="garden-section-heading"><div><span className="garden-section-index">04 / CONECTIVIDAD</span><h2 id="connectivity-title">Una perspectiva global</h2></div><p>Visualización de rutas desde Guadalajara.</p></div>
      <div className="garden-card garden-map-card">
        <div className="garden-map-labels"><span className="garden-map-origin"><i/> Guadalajara, Jalisco</span><span className="garden-map-caption">TOPOLOGÍA ILUSTRATIVA · NO REPRESENTA REDES REALES</span></div>
        <WorldMap dots={routes} />
        <p className="garden-map-note">Las rutas son demostrativas y no representan clientes, viajes ni infraestructura desplegada.</p>
      </div>
    </section>
  );
}
