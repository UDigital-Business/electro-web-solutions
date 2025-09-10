
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "¿Qué es el factor de potencia y por qué es importante?",
      answer: "El factor de potencia (FP) es una medida que indica qué tan eficientemente se está utilizando la energía eléctrica en una instalación. Se calcula como la relación entre la potencia real (kW) y la potencia aparente (kVA). Un FP cercano a 1 significa que la mayor parte de la energía está siendo aprovechada para hacer trabajo útil, mientras que un FP bajo implica pérdidas energéticas y un uso ineficiente de la red. Un bajo FP puede generar sobrecalentamiento en los equipos, provocar caídas de tensión, acortar la vida útil de componentes eléctricos y, además, dar lugar a penalizaciones económicas en el recibo eléctrico, según lo establecido por la Comisión Federal de Electricidad (CFE). Mejorar el FP ayuda a optimizar el rendimiento del sistema eléctrico, reducir costos y prevenir sanciones."
    },
    {
      question: "¿Qué es el Código de Red y quién debe cumplirlo?",
      answer: "El Código de Red es una regulación de cumplimiento obligatorio emitida por la Secretaria de Energía (SENER), que define los criterios mínimos de eficiencia, calidad, seguridad y sustentabilidad que deben cumplir los usuarios del Sistema Eléctrico Nacional (SEN). Su objetivo principales garantizar que las instalaciones conectadas al SEN operen de manera eficiente, segura y sin afectar la estabilidad del sistema eléctrico del país."
    },
    {
      question: "¿Por qué debo cumplir con el Código de Red?",
      answer: "El Código de Red es una regulación de cumplimiento obligatorio emitida por la Secretaria de Energía (SENER), que define los criterios mínimos de eficiencia, calidad, seguridad y sustentabilidad que deben cumplir los usuarios del Sistema Eléctrico Nacional (SEN). Su objetivo principal es garantizar que las instalaciones conectadas al SEN operen de manera eficiente, segura y sin afectar la estabilidad del sistema eléctrico del país."},
    {
      question: "¿Qué es un estudio de cortocircuito y para qué sirve?",
      answer: "Es un análisis técnico que calcula las corrientes máximas que podrían circular en caso de una falla eléctrica grave (como un contacto entre fases o a tierra). Este estudio permite seleccionar y coordinar los dispositivos de protección eléctrica (interruptores, fusibles, relevadores) para que actúen eficazmente ante una falla, protegiendo tanto a los equipos como al personal. También es obligatorio según el Código de Red y otras normas eléctricas. Su implementación es clave para planificar la expansión de la red eléctrica de forma segura y evitar interrupciones graves en la operación industrial."
    },
    {
      question: "¿Qué es la coordinación de protecciones y por qué es importante?",
      answer: "Es un diseño técnico que establece cómo deben actuar los dispositivos de protección eléctrica (como interruptores y relevadores) en caso de una falla. Su propósito es que solo se aísle la zona afectada, evitando que toda la instalación se detenga por un evento localizado. Esto garantiza la continuidad de operación, protege equipos sensibles y mejora la seguridad del personal. Además, su implementación es requerida por normativas como el Código de Red y la NOM-001-SEDE. Una coordinación adecuada también reduce tiempos de paro y costos por mantenimiento o reparación."
    },
    {
      question: "¿Cada cuánto tiempo se debe dar mantenimiento a una subestación eléctrica?",
      answer: "Se recomienda realizar un mantenimiento predictivo preventivo al menos una vez al año. En ambientes adversos (con polvo, humedad o contaminantes), deben realizarse inspecciones y limpiezas cada seis meses. El mantenimiento incluye revisión visual, limpieza, pruebas eléctricas, ajustes y corrección de anomalías. También debe aplicarse mantenimiento correctivo inmediato ante cualquier falla. Una gestión adecuada del mantenimiento mejora la seguridad, evita fallas inesperadas y cumple con la NOM-002."
    },
    {
      question: "¿Qué es una UVIE y para qué sirve?",
      answer: "Una UVIE (Unidad de Verificación de Instalaciones Eléctrica) es una entidad autorizada por la Entidad Mexicana de Acreditación (EMA) y reconocida por la SENER. Su función es verificar que las instalaciones eléctricas industriales cumplan con los requisitos técnicos y de seguridad establecidos en la normativa nacional. Contar con la verificación de una UVIE permite operar legalmente, obtener permisos y garantizar la seguridad eléctrica. También ayuda a detectar áreas de mejora en la instalación para aumentar su confiabilidad y eficiencia."
    },
    {
      question: "¿Qué es un diagrama unifilar y por qué es indispensable?",
      answer: "Es una representación gráfica simplificada del sistema eléctrico de una instalación. Muestra cómo están conectados los elementos eléctricos (transformadores, interruptores, cargas, etc.), lo que facilita el análisis, mantenimiento y operación del sistema. Es un requisito para cumplir con la NOM-001-SEDE y el Código de Red, así como para realizar estudios eléctricos. Tener un diagrama actualizado mejora la seguridad, agiliza el diagnóstico de fallas y es indispensable para auditorías o inspecciones técnicas."
    },
    {
      question: "¿Para qué sirve un estudio de iluminación?",
      answer: "Permite diseñar e implementar un sistema de iluminación eficiente y seguro. En el ámbito industrial, asegura que haya niveles adecuados de luz para evitar fatiga visual, mejorar la productividad y prevenir accidentes. También ayuda a reducir el consumo energético, cumplir con la NOM-025-STPS y otras normas internacionales, y promover la sostenibilidad. Un buen diseño de iluminación reduce costos operativos y mejora las condiciones laborales."
    },
    {
      question: "¿Por qué necesito un diseño estructural antes de construir?",
      answer: "El diseño estructural asegura que la obra será resistente, segura y funcional, considerando factores como el peso, viento, sismos y uso previsto. Este diseño es obligatorio y debe cumplir con los reglamentos de construcción y sus normas técnicas complementarias vigentes. Además de garantizar la estabilidad del edificio, permite optimizar el uso de materiales, facilitar la supervisión en obra y evitar errores que podrían generar daños graves o colapsos en el futuro."
    },
    {
      question: "¿Qué es un dictamen estructural y porque es útil?",
      answer: "Es un documento técnico elaborado por un ingeniero estructurista que evalúa la seguridad, estado y capacidad de una estructura existente o en proyecto. Es indispensable para trámites legales, permisos de construcción, cambios de uso y certificaciones. También permite identificar daños o debilidades estructurales, y planear acciones de reforzamiento o rehabilitación. Su valor radica en garantizar la seguridad de personas, proteger inversiones y respaldar decisiones técnicas con base en la reglamentación vigente local."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">Preguntas Frecuentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros servicios y procesos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-background shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline hover:text-dsae-blue transition-colors duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
