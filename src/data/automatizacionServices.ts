
import { Wrench, Settings, Cpu, Code } from "lucide-react";

export const automatizacionServices = [
  {
    id: "mantenimiento",
    icon: Wrench,
    title: "Mantenimiento Preventivo y Correctivo de Tableros de Control",
    description: "Servicio técnico especializado en mantenimiento preventivo y correctivo de tableros eléctricos, orientado a preservar la funcionalidad, prevenir fallas críticas y asegurar la integridad del sistema eléctrico.",
    actividades: [
      "Limpieza interna y externa del gabinete, utilizando productos dieléctricos certificados",
      "Limpieza o reemplazo de filtros de ventilación para correcta disipación térmica",
      "Medición de tensiones y corrientes en equipos activos y líneas de alimentación",
      "Inspección termográfica con cámara infrarroja para detectar puntos calientes",
      "Revisión y ajuste de conexiones eléctricas, incluyendo apriete de terminales",
      "Pruebas funcionales a interruptores termomagnéticos y disyuntores"
    ],
    normativas: [
      "NOM-001-SEDE-2012 / NOM-001-SEDE-2024: Requisitos para instalaciones eléctricas seguras",
      "NOM-029-STPS-2011: Mantenimiento de instalaciones eléctricas en centros de trabajo"
    ]
  },
  {
    id: "diseno",
    icon: Settings,
    title: "Diseño de Tableros Eléctricos de Control",
    description: "Diseño integral de tableros eléctricos de control, estructurando soluciones que combinan eficiencia operativa, orden técnico y cumplimiento normativo.",
    actividades: [
      "Diseño CAD de la distribución interna del tablero con ubicación precisa de componentes",
      "Elaboración del diagrama unifilar o multifilar de control y potencia",
      "Diseño de diagramas de comunicación para redes industriales (Modbus, Profinet, etc.)",
      "Definición de distancias mínimas de seguridad eléctrica",
      "Documentación completa para fabricación o validación"
    ],
    normativas: [
      "NOM-001-SEDE-2012 / NOM-001-SEDE-2024: Dispositivos de protección y control correctamente coordinados",
      "NOM-004-STPS-1999: Sistemas de protección y dispositivos de seguridad en maquinaria",
      "NMX-J-136-ANCE e IEC 60204-1: Diseño de tableros de control y equipos eléctricos"
    ]
  },
  {
    id: "armado",
    icon: Cpu,
    title: "Armado de Gabinetes de Control",
    description: "Servicio completo de armado profesional de gabinetes de control, enfocado en convertir planos eléctricos en soluciones físicas listas para operar.",
    actividades: [
      "Montaje preciso de equipos en platina y puerta del gabinete",
      "Cableado interno y etiquetado completo siguiendo códigos de color y numeración",
      "Pruebas de funcionamiento previas al envío",
      "Envío y puesta en marcha en sitio",
      "Instalación segura y conexiones finales en campo"
    ],
    normativas: [
      "NOM-001-SEDE-2012 / NOM-001-SEDE-2024: Instalaciones eléctricas seguras",
      "NMX-J-118/1-ANCE: Tableros de distribución de baja tensión",
      "IEC 61439 / NMX-J-620-ANCE: Tableros de control y ensambles de baja tensión",
      "NOM-029-STPS-2011: Equipo eléctrico en condiciones seguras de operación"
    ]
  },
  {
    id: "programacion",
    icon: Code,
    title: "Programación de PLC y Sistemas de Automatización",
    description: "Desarrollo de soluciones personalizadas de programación de PLC y diseño de interfaces HMI, orientadas a digitalizar, controlar y optimizar procesos industriales.",
    actividades: [
      "Interpretación escrita de la lógica de proceso con documentación clara",
      "Programación del controlador PLC en lenguajes estándar (Ladder, FBD, ST)",
      "Integración de comunicación industrial (Modbus, Profinet, Ethernet/IP)",
      "Diseño y programación de interfaz HMI con navegación intuitiva",
      "Instalación de punto de acceso remoto para monitoreo y diagnóstico"
    ],
    normativas: [
      "NOM-001-SEDE-2012 / NOM-001-SEDE-2024: Instalación segura de equipos de control automático",
      "IEC 61131-3: Estándar internacional para programación de PLC",
      "NOM-004-STPS-1999: Dispositivos de seguridad en sistemas automatizados"
    ],
    nota: "La propiedad intelectual de la lógica de programación y del diseño de HMI pertenece a DSAE hasta que finalice el periodo de garantía técnica pactado con el cliente."
  }
];
