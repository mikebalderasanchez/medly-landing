import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: `Documentación del proyecto | ${SITE.name}`,
  description:
    "Problemática, solución, stack, monetización, impacto, desafíos y diferenciadores de Medly: IA clínica en infraestructura privada del hospital.",
};

const toc = [
  { href: "#problematica", label: "Problemática" },
  { href: "#solucion", label: "Nuestra solución" },
  { href: "#diferencial", label: "Nuestro diferencial" },
  { href: "#stack", label: "Stack tecnológico" },
  { href: "#monetizacion", label: "Monetización" },
  { href: "#impacto", label: "Impacto y trabajo a futuro" },
  { href: "#desafios", label: "Desafíos y retos" },
  { href: "#mitigacion", label: "Cómo mitigarlos" },
  { href: "#competencia", label: "Diferenciador frente a la competencia" },
  { href: "#referencias", label: "Referencias" },
] as const;

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-background py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Documentación
            </p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Proyecto {SITE.name}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Visión, arquitectura, costos operativos, impacto esperado y retos técnicos, de seguridad,
              legales, culturales y éticos — en un solo lugar.
            </p>
          </div>

          <div className="mt-14 lg:grid lg:grid-cols-[minmax(0,1fr)_min(280px,32%)] lg:items-start lg:gap-12">
            <nav
              aria-label="En esta página"
              className="mb-10 rounded-2xl border border-border/80 bg-card/80 p-5 shadow-sm backdrop-blur-sm lg:order-2 lg:sticky lg:top-24 lg:mb-0"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                En esta página
              </p>
              <ol className="mt-3 space-y-2 text-sm">
                {toc.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ol>
              <p className="mt-5 border-t border-border/60 pt-4 text-xs text-muted-foreground">
                ¿Dudas legales o comerciales?{" "}
                <a
                  href={`mailto:${SITE.contactEmail}`}
                  className="font-medium text-primary hover:underline"
                >
                  {SITE.contactEmail}
                </a>
              </p>
            </nav>

            <article className="prose prose-slate min-w-0 max-w-none prose-headings:scroll-mt-28 prose-headings:font-bold prose-headings:text-foreground prose-h2:text-2xl prose-h2:border-b prose-h2:border-border/50 prose-h2:pb-3 prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground prose-hr:border-border">
              <blockquote className="not-prose my-8 rounded-2xl border border-primary/20 bg-primary-soft/60 px-5 py-4 text-[0.95rem] leading-relaxed text-foreground">
                <strong className="text-foreground">En resumen:</strong>{" "}
                <span className="text-muted-foreground">
                  Medly es una plataforma de IA para hospitales que automatiza la consulta y el
                  seguimiento del paciente, instalada en infraestructura privada para que los datos
                  sensibles no salgan del control del hospital.
                </span>
              </blockquote>

              <h2 id="problematica" className="text-2xl font-bold mb-4 mt-6">
                <span className="text-primary">1.</span> Problemática
              </h2>
              <p>
                Aproximadamente el <strong>60% de los pacientes olvida o confunde las instrucciones del médico</strong>{" "}
                apenas quince minutos después de salir del consultorio. En México y Latinoamérica,
                esto deriva con frecuencia en <strong>automedicación peligrosa</strong> o en el{" "}
                <strong>abandono del tratamiento</strong>, de modo que una condición tratable puede
                convertirse en una emergencia médica.
              </p>
              <p>
                Con el aumento de <strong>ciberataques a instituciones públicas en 2024 y 2025</strong>,
                muchos hospitales tienen una actitud muy cautelosa frente a subir datos a la nube. Las
                soluciones de IA actuales de la competencia son, en su mayoría,{" "}
                <strong>SaaS (Software as a Service)</strong> que obligan a sacar los datos del
                hospital. Eso genera una <strong>barrera legal y ética</strong> que frena la adopción y
                la innovación clínica responsable.
              </p>

              <h2 id="solucion" className="text-2xl font-bold mb-4 mt-6">
                <span className="text-primary">2.</span> Nuestra solución
              </h2>
              <p>
                Por eso proponemos <strong>Medly</strong>: una plataforma de IA para hospitales que{" "}
                <strong>automatiza el ciclo de vida de la consulta y el seguimiento del paciente</strong>.
                A diferencia de muchas apps comerciales, Medly se instala en la{" "}
                <strong>infraestructura privada del hospital</strong>, de forma que la información
                sensible permanece bajo su control institucional.
              </p>

              <h3 className="text-xl font-bold mb-4 mt-6">Funciones principales</h3>
              <ul>
                <li>
                  <strong>Consulta:</strong> transcripción y resumen de las consultas, reutilizando
                  esos datos para el <strong>llenado del formulario médico</strong>.
                </li>
                <li>
                  <strong>Seguimiento en casa:</strong> el paciente puede subir una{" "}
                  <strong>foto de su receta</strong> y hacer <strong>preguntas por voz</strong> sobre
                  esa receta desde su domicilio.
                </li>
                <li>
                  <strong>Respuestas ancladas a la evidencia del hospital:</strong> el sistema{" "}
                  <strong>no inventa</strong> respuestas arbitrarias; consulta la{" "}
                  <strong>base de datos privada</strong> (expediente del paciente) y los{" "}
                  <strong>protocolos del hospital</strong> para ofrecer instrucciones precisas y
                  acotadas, con el objetivo de reducir la automedicación.
                </li>
                <li>
                  <strong>Dashboard anonimizado:</strong> tendencias de salud agregadas en el hospital
                  para apoyar <strong>medicina preventiva a nivel comunidad</strong> y una mejor{" "}
                  <strong>gestión de inventarios de medicamentos</strong>.
                </li>
              </ul>

              <h2 id="diferencial" className="text-2xl font-bold mb-4 mt-6">
                <span className="text-primary">3.</span> Nuestro diferencial
              </h2>
              <p>
                Herramientas de consultorio en la nube como <strong>Abridge</strong> o{" "}
                <strong>Nabla</strong> son excelentes en su categoría, pero viven fuera del perímetro
                del hospital. <strong>Medly es un activo del hospital</strong>: una inteligencia que
                corre en <strong>sus propios servidores</strong>, que no solo ayuda a documentar la
                visita, sino que <strong>acompaña al paciente en casa</strong> con una experiencia de
                voz cercana y segura, fundamentada en el <strong>expediente real</strong>, no solo en
                un modelo de lenguaje genérico.
              </p>

              <h2 id="stack" className="text-2xl font-bold mb-4 mt-6">
                <span className="text-primary">4.</span> Stack tecnológico y su función
              </h2>
              <dl className="not-prose space-y-4">
                <div className="rounded-xl border border-border/80 bg-card p-4 shadow-sm">
                  <dt className="font-semibold text-foreground">IA de procesamiento (LLM privado + RAG)</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Es el núcleo analítico. La arquitectura <strong>RAG</strong> (generación aumentada
                    por recuperación) busca que la IA responda apoyándose en la &quot;verdad&quot; del
                    expediente y protocolos hospitalarios, no en suposiciones aisladas.
                  </dd>
                </div>
                <div className="rounded-xl border border-border/80 bg-card p-4 shadow-sm">
                  <dt className="font-semibold text-foreground">MongoDB Atlas (Vector Search)</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Actúa como <strong>memoria inteligente</strong>: expedientes representados como
                    vectores para que la IA localice información del paciente de forma rápida y
                    controlada.
                  </dd>
                </div>
                <div className="rounded-xl border border-border/80 bg-card p-4 shadow-sm">
                  <dt className="font-semibold text-foreground">ElevenLabs (IA de voz)</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Da <strong>cara humana</strong> al seguimiento: convierte las respuestas en audio
                    con tono empático y profesional, lo que puede aumentar la confianza del paciente y
                    la adherencia al tratamiento.
                  </dd>
                </div>
              </dl>

              <h2 id="monetizacion" className="text-2xl font-bold mb-4 mt-6">
                <span className="text-primary">5.</span> Monetización — costos de operación (referencia)
              </h2>
              <p className="text-sm">
                Cifras orientativas para planificación; los precios reales dependen del proveedor,
                región y volumen contratado.
              </p>
              <ul className="not-prose grid gap-3 sm:grid-cols-3">
                <li className="rounded-xl border border-border/80 bg-card p-4 text-center shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    MongoDB
                  </p>
                  <p className="mt-2 text-lg font-bold text-foreground">~$0.08</p>
                  <p className="text-sm text-muted-foreground">USD / hora en operación</p>
                </li>
                <li className="rounded-xl border border-border/80 bg-card p-4 text-center shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    ElevenLabs
                  </p>
                  <p className="mt-2 text-lg font-bold text-foreground">$99</p>
                  <p className="text-sm text-muted-foreground">USD / mes (plan referido)</p>
                </li>
                <li className="rounded-xl border border-border/80 bg-card p-4 text-center shadow-sm sm:col-span-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Gemini 3.1 Flash Lite
                  </p>
                  <p className="mt-2 text-lg font-bold text-foreground">~$2.75 USD</p>
                  <p className="text-sm text-muted-foreground">aprox. por 1.000 consultas</p>
                </li>
              </ul>

              <h2 id="impacto" className="text-2xl font-bold mb-4 mt-6">
                <span className="text-primary">6.</span> Impacto y trabajo a futuro
              </h2>
              <p className="rounded-lg border-l-4 border-primary/40 bg-surface/80 py-2 pl-4 not-italic text-muted-foreground">
                <span className="font-semibold text-foreground">Nota del equipo — Anita:</span> se busca
                optimizar el trabajo médico automatizando la captura de datos durante la consulta,
                reduciendo tareas administrativas y liberando tiempo para la atención directa al
                paciente.
              </p>
              <p>
                También se pretende ofrecer a los pacientes una herramienta para resolver dudas sobre
                sus recetas <strong>sin tener que contactar al hospital</strong> por cada duda
                repetitiva. Eso mejora la experiencia del paciente y puede aliviar la carga operativa
                del personal.
              </p>
              <p>
                Ambas líneas apuntan al bienestar del ecosistema clínico, incluida la mitigación del{" "}
                <strong>desgaste profesional (burnout)</strong>, un problema frecuente que impacta la
                salud de quienes cuidan y la calidad percibida de la atención.
              </p>

              <h2 id="desafios" className="text-2xl font-bold mb-4 mt-6">
                <span className="text-primary">7.</span> Desafíos y retos
              </h2>

              <h3 className="text-xl font-bold mb-4 mt-6">7.1 Desafíos técnicos y de implementación</h3>
              <ol>
                <li>
                  <strong>Alucinaciones en RAG:</strong> aunque el RAG reduce errores, en medicina el
                  margen de tolerancia es mínimo. El reto es calibrar{" "}
                  <strong>umbrales de confianza estrictos</strong> para que, si no hay respuesta
                  suficiente en expediente o protocolo, el sistema indique claramente que debe{" "}
                  <strong>consultarse al médico</strong> en lugar de inferir dosis o indicaciones.
                </li>
                <li>
                  <strong>Interoperabilidad:</strong> muchos hospitales siguen con expedientes legacy o
                  incluso papel. La ingesta masiva —digitalizar y vectorizar historiales antiguos— es
                  clave para que Medly sea útil desde el primer día.
                </li>
                <li>
                  <strong>Latencia en servidores privados:</strong> sin depender por completo de la
                  elasticidad de nube pública, el hospital debe dimensionar hardware adecuado para
                  modelos de lenguaje y búsqueda vectorial sin tiempos de respuesta inaceptables.
                </li>
              </ol>

              <h3 className="text-xl font-bold mb-4 mt-6">7.2 Seguridad y ciberseguridad</h3>
              <ol>
                <li>
                  <strong>Dispositivos y red hospitalaria:</strong> al integrarse en la red, Medly
                  coexiste con el riesgo del entorno (por ejemplo, exposición a ransomware que deje
                  fuera de servicio sistemas críticos).
                </li>
                <li>
                  <strong>Fugas internas:</strong> el riesgo no siempre es externo. Se requiere{" "}
                  <strong>RBAC granular</strong> para que roles administrativos no accedan a datos
                  clínicos fuera de su necesidad legítima.
                </li>
              </ol>

              <h3 className="text-xl font-bold mb-4 mt-6">7.3 Retos legales y regulatorios</h3>
              <ol>
                <li>
                  <strong>Soberanía de datos:</strong> aun con despliegue local, el uso de APIs externas
                  (por ejemplo Gemini, ElevenLabs) exige demostrar por auditoría que lo transmitido está{" "}
                  <strong>anonimizado</strong> o amparado en acuerdos que prohíban el entrenamiento con
                  esos datos.
                </li>
                <li>
                  <strong>Responsabilidad civil:</strong> si un paciente sigue una indicación y ocurre un
                  daño, la cadena de responsabilidad (hospital, desarrollador, médico que validó) debe
                  quedar clara en <strong>términos legales sólidos</strong> y en un esquema de{" "}
                  <strong>humano en el bucle (human-in-the-loop)</strong>.
                </li>
              </ol>

              <h3 className="text-xl font-bold mb-4 mt-6">7.4 Adopción humana y cultural</h3>
              <ol>
                <li>
                  <strong>Brecha digital en adultos mayores:</strong> quienes más olvidan recetas a
                  veces son quienes menos familiarizados están con apps o asistentes por voz. La
                  interfaz debe aspirar a la simplicidad de una llamada o de un flujo tipo mensajería
                  cotidiana.
                </li>
                <li>
                  <strong>Resistencia médica:</strong> la transcripción automática puede percibirse como
                  intrusiva. Medly debe posicionarse como <strong>asistente que reduce carga
                  administrativa</strong>, no como supervisor de decisiones clínicas.
                </li>
              </ol>

              <h3 className="text-xl font-bold mb-4 mt-6">7.5 Retos éticos</h3>
              <p>
                Los modelos pueden arrastrar <strong>sesgos</strong>. Las recomendaciones preventivas del
                dashboard deben basarse en evidencia agregada del hospital y evitar discriminación por
                variables como código postal, género o etnia cuando no estén justificadas clínicamente.
              </p>

              <h2 id="mitigacion" className="text-2xl font-bold mb-4 mt-6">
                <span className="text-primary">8.</span> ¿Cómo mitigarlos?
              </h2>
              <ul>
                <li>
                  <strong>Certificaciones:</strong> orientarse a marcos reconocidos como{" "}
                  <strong>ISO 27001</strong> (seguridad de la información) o prácticas alineadas con{" "}
                  <strong>HIPAA</strong> (aun siendo estándar estadounidense, refuerza confianza en
                  procesos de control y auditoría).
                </li>
                <li>
                  <strong>Pruebas piloto:</strong> comenzar por un servicio acotado (por ejemplo
                  geriatría o diabetes) para afinar el RAG antes de un despliegue hospitalario amplio.
                </li>
                <li>
                  <strong>Modo offline / soberanía total (evolutivo):</strong> valorar modelos open
                  source (por ejemplo familias tipo Llama) en GPUs del hospital para minimizar o eliminar
                  el envío de datos sensibles a APIs de terceros cuando el contexto regulatorio lo exija.
                </li>
              </ul>

              <h2 id="competencia" className="text-2xl font-bold mb-4 mt-6">
                <span className="text-primary">9.</span> Diferenciador frente a la competencia
              </h2>
              <p>
                Una pieza central es el <strong>seguimiento personalizado de la receta</strong> mediante
                un asistente conversacional que permite aclarar dudas y comprender mejor el tratamiento,
                acercando la experiencia al paciente sin sustituir el criterio médico presencial cuando
                haga falta.
              </p>

              <h2 id="referencias" className="text-2xl font-bold mb-4 mt-6">
                <span className="text-primary">10.</span> Referencias
              </h2>
              <ul>
                <li>
                  <a
                    href="https://www.msdmanuals.com/es/hogar/f%C3%A1rmacos-o-sustancias/factores-que-influyen-en-la-respuesta-del-organismo-a-los-f%C3%A1rmacos/adherencia-a-la-medicaci%C3%B3n"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MSD Manuals (versión para público general) — Adherencia a la medicación
                  </a>
                  : contexto científico sobre por qué el seguimiento y la comprensión del tratamiento
                  importan para la seguridad del paciente.
                </li>
              </ul>

              <hr className="my-12" />

              <p className="text-sm text-muted-foreground">
                Volver al{" "}
                <Link href="/" className="font-medium text-primary hover:underline">
                  inicio
                </Link>{" "}
                o revisar la{" "}
                <Link href="/privacy" className="font-medium text-primary hover:underline">
                  política de privacidad
                </Link>
                .
              </p>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
