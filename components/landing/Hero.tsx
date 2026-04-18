import { SITE } from "@/lib/site";
import { HeroVisual } from "@/components/landing/HeroVisual";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/80">
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgb(43_143_236_/0.1)_48%,transparent_58%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            <span className="size-1.5 rounded-full bg-primary shadow-[0_0_0_3px_rgba(43,143,236,0.38)]" />
            IA segura para hospitales
          </p>
          <h1 className="mt-6 max-w-2xl text-[2rem] font-bold leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-[2.65rem] lg:leading-[1.08]">
            <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
              {SITE.name}
            </span>{" "}
            te ayuda a atender mejor a tus pacientes, protegiendo su información
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Nuestra inteligencia artificial transcribe tus consultas, te ayuda a llenar el expediente y da seguimiento a tus pacientes por voz, todo dentro de los servidores seguros de tu hospital.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${SITE.contactEmail}?subject=Solicitud%20de%20demo%20Medly`}
              className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-hover px-8 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Solicitar demo
            </a>
            <a
              href="#solucion"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-white/90 px-8 text-base font-semibold text-foreground shadow-sm backdrop-blur transition-[transform,colors,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Ver solución
            </a>
          </div>
        </div>
        <div className="mt-14 lg:mt-0">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
