'use client';

import DottedMap from 'dotted-map';
import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

export interface WorldMapPoint {
  lat: number;
  lng: number;
  label?: string;
}

export interface WorldMapRoute {
  start: WorldMapPoint;
  end: WorldMapPoint;
}

interface WorldMapProps {
  dots?: WorldMapRoute[];
  lineColor?: string;
}

export default function WorldMap({ dots = [], lineColor = '#8eaf99' }: WorldMapProps) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const root = document.documentElement;
    const updateTheme = () => setTheme(root.dataset.theme === 'light' ? 'light' : 'dark');
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  const svgMap = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: 'diagonal' });
    return map.getSVG({
      radius: 0.22,
      color: theme === 'dark' ? '#CBD5CC42' : '#24332942',
      shape: 'circle',
      backgroundColor: theme === 'dark' ? '#111419' : '#fbfcf9',
    });
  }, [theme]);

  const projectPoint = (lat: number, lng: number) => ({
    x: (lng + 180) * (800 / 360),
    y: (90 - lat) * (400 / 180),
  });

  const pathFor = (start: WorldMapPoint, end: WorldMapPoint) => {
    const a = projectPoint(start.lat, start.lng);
    const b = projectPoint(end.lat, end.lng);
    const midX = (a.x + b.x) / 2;
    const midY = Math.min(a.y, b.y) - 50;
    return { d: `M ${a.x} ${a.y} Q ${midX} ${midY} ${b.x} ${b.y}`, a, b };
  };

  return (
    <div className="garden-world-frame relative w-full overflow-hidden" role="group" aria-label="Mapa mundial con rutas de conectividad demostrativas">
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="garden-world-dots pointer-events-none h-full w-full select-none"
        alt="Mapa punteado del mundo. Las rutas superpuestas son ilustrativas y no representan conexiones reales."
        width={1056}
        height={495}
        unoptimized
        draggable={false}
      />
      <svg className="garden-world-routes pointer-events-none absolute inset-0 h-full w-full select-none" viewBox="0 0 800 400" aria-hidden="true">
        <defs><linearGradient id="garden-route-gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor={lineColor} stopOpacity="0"/><stop offset="9%" stopColor={lineColor} stopOpacity=".9"/><stop offset="91%" stopColor={lineColor} stopOpacity=".9"/><stop offset="100%" stopColor={lineColor} stopOpacity="0"/></linearGradient></defs>
        {dots.map((route, index) => {
          const points = pathFor(route.start, route.end);
          return <g key={`route-${index}`}>
            <motion.path d={points.d} fill="none" stroke="url(#garden-route-gradient)" strokeWidth="1.3" initial={reducedMotion ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: reducedMotion ? 0 : 1, delay: reducedMotion ? 0 : index * .24, ease: 'easeOut' }}/>
            {[points.a, points.b].map((point, endpoint) => <g key={`endpoint-${endpoint}`}>
              <circle cx={point.x} cy={point.y} r="2.4" fill={lineColor}/>
              {!reducedMotion && <circle cx={point.x} cy={point.y} r="2.4" fill={lineColor} opacity=".45"><animate attributeName="r" from="2" to="8" dur="1.7s" begin={`${index * .24}s`} repeatCount="indefinite"/><animate attributeName="opacity" from=".45" to="0" dur="1.7s" begin={`${index * .24}s`} repeatCount="indefinite"/></circle>}
            </g>)}
          </g>;
        })}
      </svg>
    </div>
  );
}
