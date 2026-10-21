export const portfolio = {
  name: 'Angel Eduardo Domínguez Martínez',
  role: 'Desarrollador web · Ingeniero en Redes y Telecomunicaciones',
  location: 'Guadalajara, Jalisco, México',
  intro: 'Desarrollo plataformas web e integro servicios digitales; mi formación en redes y telecomunicaciones aporta una mirada de infraestructura, soporte y operación.',
  projects: [
    {
      title: 'Plataforma web Total Ground',
      category: 'Desarrollo web',
      status: 'Sitio público',
      description: 'Plataforma empresarial y catálogo digital de productos industriales con CMS, búsqueda reactiva, integraciones y visores 3D.',
      contribution: 'Desarrollo y mantenimiento de funcionalidades e integraciones.',
      image: '/images/total-ground.png',
      imageAlt: 'Vista de la ficha del proyecto Total Ground en el portafolio',
      stack: ['PHP', 'Laravel', 'Livewire', 'Three.js', 'WebGL', 'Gemini API', 'Monday.com API'],
      url: 'https://www.totalground.com/',
    },
  ],
  journey: [
    {
      period: 'Octubre 2025 — Actualidad',
      role: 'Desarrollador Web',
      organization: 'Total Ground',
      location: 'Guadalajara, Jalisco',
      description: [
        'Desarrollo y mantenimiento de la plataforma empresarial, el catálogo digital y su CMS.',
        'Implementación de funcionalidades con PHP, Laravel, Blade y Livewire.',
        'Integración de visores 3D con Three.js y WebGL, un asistente con Google Gemini y envío de prospectos a Monday.com.',
        'Mantenimiento de funciones multilingües, autenticación de dos factores, auditoría y gestión de contenido.',
      ],
      stack: ['PHP', 'Laravel', 'Livewire', 'Three.js', 'WebGL'],
    },
    {
      period: 'Julio — Diciembre 2024',
      role: 'Practicante de Instalaciones y Configuración TI',
      organization: 'OceanTech S.A. de C.V.',
      location: 'Guadalajara, Jalisco',
      description: [
        'Instalación de cableado estructurado y configuración de redes LAN/WAN.',
        'Apoyo en soluciones de CCTV y control de acceso.',
      ],
      stack: ['LAN', 'WAN', 'CCTV', 'Cableado estructurado'],
    },
    {
      period: 'Agosto — Diciembre 2023',
      role: 'Soporte en el Departamento de Sistemas',
      organization: 'Ayuntamiento Municipal',
      location: 'Taxco de Alarcón, Guerrero',
      description: [
        'Mantenimiento preventivo y correctivo de equipos de cómputo.',
        'Instalación de cableado de red y atención de incidencias de conectividad y software.',
      ],
      stack: ['Soporte técnico', 'Redes'],
    },
  ],
  education: [
    { program: 'Ingeniería en Redes y Telecomunicaciones', institution: 'Universidad Politécnica del Estado de Guerrero', period: '2021 — 2025', status: 'Titulado' },
    { program: 'Técnico en Programación', institution: 'CBTis 82', period: '2019 — 2021', status: 'Formación técnica' },
  ],
  training: [
    'Switching, Routing, and Wireless Essentials',
    'Networking Essentials',
    'Cyber Threat Management',
    'Junior Cybersecurity Analyst Career Path',
  ],
  technologies: [
    { layer: 'Desarrollo web', detail: 'Interfaz y aplicaciones', icon: 'code', items: ['JavaScript ES6+', 'HTML5', 'CSS3', 'Blade', 'Livewire'] },
    { layer: 'Backend e integraciones', detail: 'Servicios y APIs', icon: 'server', items: ['PHP 8.2+', 'Laravel 12', 'REST', 'Google Gemini API', 'Monday.com API'] },
    { layer: 'Datos y herramientas', detail: 'Persistencia y flujo de trabajo', icon: 'database', items: ['MySQL', 'MariaDB', 'Git', 'Composer', 'Apache', 'XAMPP'] },
    { layer: 'Redes e infraestructura', detail: 'Conectividad y sistemas', icon: 'network', items: ['LAN / WAN / WLAN', 'DHCP', 'DNS', 'NAT', 'VPN', 'Firewalls', 'VMware', 'Hyper-V', 'VirtualBox'] },
    { layer: '3D y seguridad web', detail: 'Experiencias e identidad', icon: 'layers', items: ['Three.js', 'WebGL', 'GLTF/GLB', '2FA / TOTP', 'Auditoría de actividad', 'reCAPTCHA'] },
  ],
} as const;
