
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "¿Qué tipos de análisis eléctricos realizan?",
      answer: "Realizamos estudios de coordinación de protecciones, análisis de cortocircuito, estudios de arco eléctrico, estudios de flujo de potencia, análisis de calidad de energía, y estudios de estabilidad transitoria."
    },
    {
      question: "¿Cuánto tiempo toma completar un proyecto?",
      answer: "El tiempo de ejecución varía según la complejidad del proyecto. Los análisis básicos pueden tomar de 1-2 semanas, mientras que proyectos más complejos pueden requerir de 4-8 semanas. Proporcionamos cronogramas detallados al inicio de cada proyecto."
    },
    {
      question: "¿Trabajan con sistemas de voltaje específicos?",
      answer: "Sí, trabajamos con sistemas de baja, media y alta tensión. Nuestro equipo tiene experiencia en sistemas desde 120V hasta 400kV, adaptándonos a las necesidades específicas de cada cliente."
    },
    {
      question: "¿Ofrecen servicios de mantenimiento preventivo?",
      answer: "Absolutamente. Ofrecemos programas de mantenimiento preventivo personalizados que incluyen inspecciones regulares, análisis de vibraciones, termografía, y monitoreo continuo de equipos críticos."
    },
    {
      question: "¿Qué certificaciones y estándares manejan?",
      answer: "Trabajamos bajo estándares internacionales como IEEE, IEC, NEC, CFE, y normas mexicanas (NOM). Nuestro equipo cuenta con certificaciones profesionales reconocidas en la industria."
    },
    {
      question: "¿Pueden trabajar en proyectos de emergencia?",
      answer: "Sí, ofrecemos servicios de emergencia 24/7 para situaciones críticas. Contamos con un equipo de respuesta rápida que puede atender fallas y problemas urgentes en tiempo récord."
    },
    {
      question: "¿Qué incluyen sus reportes de análisis?",
      answer: "Nuestros reportes incluyen análisis detallado de resultados, recomendaciones específicas, diagramas técnicos, cronogramas de implementación, y seguimiento post-implementación para garantizar la efectividad de las soluciones."
    },
    {
      question: "¿Manejan proyectos de energías renovables?",
      answer: "Sí, tenemos amplia experiencia en proyectos de energía solar, eólica y sistemas híbridos. Realizamos estudios de factibilidad, diseño de sistemas, y análisis de integración a la red eléctrica."
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
