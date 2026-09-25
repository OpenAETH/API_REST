import { Section } from './Section';
import { Accordion } from './Accordion';

const faqs = [
  { id: 'api-existente', question: '¿Necesito tener una API existente?', answer: 'No necesariamente. AETHERYON puede desarrollar una API propia o integrar APIs existentes.' },
  { id: 'terceros', question: '¿Pueden conectar sistemas que fueron desarrollados por terceros?', answer: 'Sí, siempre que exista acceso técnico suficiente y los sistemas permitan la integración.' },
  { id: 'db-existente', question: '¿Pueden trabajar con mi base de datos existente?', answer: 'Sí, sujeto a arquitectura, permisos y condiciones técnicas.' },
  { id: 'api-externa', question: '¿Pueden consumir una API de otro proveedor?', answer: 'Sí.' },
  { id: 'desde-cero', question: '¿Pueden desarrollar una API desde cero?', answer: 'Sí.' },
  { id: 'documentacion', question: '¿La API queda documentada?', answer: 'La documentación forma parte del alcance cuando corresponde al proyecto.' },
  { id: 'equipo', question: '¿Tengo que contratar un equipo completo?', answer: 'No. AETHERYON trabaja como capacidad tecnológica independiente y puede intervenir sobre una necesidad específica.' },
  { id: 'sin-reunion', question: '¿Puedo comenzar directamente sin una reunión?', answer: 'Sí, cuando el alcance resulta suficientemente claro. El flujo puede comenzar desde la landing hacia ClientsNDA.' },
  { id: 'no-se', question: '¿Y si no sé exactamente qué necesito?', answer: 'En ese caso puede ser conveniente una conversación inicial o un assessment antes de contratar la implementación.' },
  { id: 'continuidad', question: '¿Pueden continuar después de la implementación?', answer: 'Sí. AETHERYON puede ofrecer soporte, mantenimiento y desarrollo incremental.' },
];

export function FAQ() {
  return (
    <Section id="faq" eyebrow="Preguntas frecuentes" title="Lo que suelen preguntar." tone="panel">
      <Accordion items={faqs} />
    </Section>
  );
}