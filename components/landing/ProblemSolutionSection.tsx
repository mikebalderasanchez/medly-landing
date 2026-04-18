import { IconCloudRisk, IconDataExit, IconMemory } from "@/components/landing/problem-illustrations";

const painPoints = [
  {
    stat: "~60%",
    title: "Instrucciones que se olvidan",
    body: "Muchos pacientes confunden u olvidan indicaciones minutos después de la consulta; en LATAM eso empuja a automedicación o abandono del tratamiento.",
    Icon: IconMemory,
  },
  {
    stat: "2024–25",
    title: "Ciberataques y desconfianza a la nube",
    body: "Los hospitales temen exponer datos sensibles fuera del perímetro; sin un modelo aceptado, la innovación con IA se estanca.",
    Icon: IconCloudRisk,
  },
  {
    stat: "SaaS",
    title: "Datos fuera del hospital",
    body: "Muchas herramientas de IA obligan a sacar información clínica del centro; choca con legalidad, ética y gobierno de datos.",
    Icon: IconDataExit,
  },
] as const;

export function ProblemSolutionSection() {
  return (
    <section id="propuesta" className="relative scroll-mt-24 border-b border-border/80 py-16 sm:py-28 overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary/90">Problemática y solución</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Menos fricción entre consultorio, datos y hogar
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Medly responde a dos frentes: continuidad del paciente y soberanía de la información. La plataforma se
            despliega en la <strong className="font-semibold text-foreground">infraestructura privada del hospital</strong>{" "}
            y automatiza el ciclo de la consulta y el seguimiento sin que los datos sensibles salgan de su control.
          </p>
        </div>

        <div className="mt-16 lg:mt-20 flex flex-col gap-16">
          <div>
            <div className="mb-10 text-center">
              <div className="inline-flex items-center rounded-full border border-destructive/20 bg-destructive/10 px-3 py-1 text-xs font-medium text-destructive mb-4">
                La problemática
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Presiones reales en México y LATAM
              </h3>
            </div>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {painPoints.map((p, i) => (
                <div
                  key={p.title}
                  className="group relative rounded-3xl border border-border/80 bg-muted/20 p-6 sm:p-8 transition-all hover:bg-card hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.1)] hover:border-destructive/30"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-destructive/10 text-destructive transition-colors group-hover:bg-destructive group-hover:text-white shadow-sm ring-1 ring-destructive/20">
                      <p.Icon className="size-8" />
                    </span>
                    <span className="text-xs font-black uppercase tracking-widest text-destructive/70">{p.stat}</span>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-3">{p.title}</h4>
                  <p className="text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
