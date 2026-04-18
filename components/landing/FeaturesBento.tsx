import Image from "next/image";
import type { ComponentType } from "react";
import {
  IllustrationConsult,
  IllustrationDashboard,
  IllustrationHomeVoice,
  IllustrationHospitalAsset,
  IllustrationRag,
  IllustrationServer,
  IllustrationTrust,
} from "@/components/landing/bento-illustrations";

type IllustrationProps = { className?: string };

const bento: Array<{
  title: string;
  subtitle: string;
  body: string;
  gridClass: string;
  Illustration: ComponentType<IllustrationProps>;
  illustrationWrap: string;
  illustrationClass: string;
}> = [
  {
    title: "Expediente automático",
    subtitle: "Notas sin esfuerzo",
    body: "Resumen de la consulta listo para revisar y aprobar.",
    gridClass:
      "sm:col-span-2 lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3 min-h-[220px] bg-gradient-to-br from-card via-card to-primary/[0.04]",
    Illustration: IllustrationConsult,
    illustrationWrap: "rounded-3xl bg-primary/5 p-4 ring-1 ring-primary/10 transition-transform duration-500 group-hover:scale-105",
    illustrationClass: "size-20 sm:size-28 text-primary",
  },
  {
    title: "Cuidado en casa",
    subtitle: "Acompañamiento",
    body: "Seguimiento por voz y fotos de recetas desde casa.",
    gridClass: "lg:col-start-3 lg:col-end-5 lg:row-start-1 lg:row-end-2 min-h-[160px] bg-card",
    Illustration: IllustrationHomeVoice,
    illustrationWrap: "rounded-2xl bg-primary/5 p-3 ring-1 ring-primary/10 transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-110",
    illustrationClass: "size-16 text-primary",
  },
  {
    title: "Respuestas confiables",
    subtitle: "Cero inventos",
    body: "Respuestas ancladas al historial y a los protocolos del hospital.",
    gridClass: "lg:col-start-3 lg:col-end-5 lg:row-start-2 lg:row-end-3 min-h-[160px] bg-card",
    Illustration: IllustrationRag,
    illustrationWrap: "rounded-2xl bg-primary/5 p-3 ring-1 ring-primary/10 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110",
    illustrationClass: "size-16 text-primary",
  },
  {
    title: "100% Privado",
    subtitle: "Datos seguros",
    body: "Instalación en tu hospital; datos sin salir a internet público.",
    gridClass: "lg:col-span-1 lg:row-start-3 min-h-[140px] bg-card",
    Illustration: IllustrationServer,
    illustrationWrap: "rounded-2xl bg-primary/5 p-2.5 ring-1 ring-primary/10 transition-transform duration-500 group-hover:scale-110",
    illustrationClass: "size-14 text-primary",
  },
  {
    title: "Hecho para ti",
    subtitle: "Tu propia plataforma",
    body: "Herramienta bajo control total de tu institución.",
    gridClass: "lg:col-span-1 lg:row-start-3 min-h-[140px] bg-card",
    Illustration: IllustrationHospitalAsset,
    illustrationWrap: "rounded-2xl bg-primary/5 p-2.5 ring-1 ring-primary/10 transition-transform duration-500 group-hover:scale-110",
    illustrationClass: "size-14 text-primary",
  },
  {
    title: "Visión global",
    subtitle: "Análisis y control",
    body: "Tendencias e inventario sin exponer datos personales.",
    gridClass: "lg:col-span-1 lg:row-start-3 min-h-[140px] bg-card",
    Illustration: IllustrationDashboard,
    illustrationWrap: "rounded-2xl bg-primary/5 p-2.5 ring-1 ring-primary/10 transition-transform duration-500 group-hover:scale-110",
    illustrationClass: "size-14 text-primary",
  },
  {
    title: "Máxima seguridad",
    subtitle: "Protección total",
    body: "Acceso restringido al personal autorizado.",
    gridClass: "lg:col-span-1 lg:row-start-3 min-h-[140px] bg-card",
    Illustration: IllustrationTrust,
    illustrationWrap: "rounded-2xl bg-primary/5 p-2.5 ring-1 ring-primary/10 transition-transform duration-500 group-hover:scale-110",
    illustrationClass: "size-14 text-primary",
  },
];

export function FeaturesBento() {
  return (
    <section id="solucion" className="scroll-mt-24 border-b border-border/80 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary/90">Nuestra solución</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Consulta, expediente y seguimiento en un solo flujo
        </h2>
        <p className="mt-3 max-w-2xl text-muted sm:text-lg">
          Automatización en tu infraestructura: menos carga administrativa y continuidad para el paciente.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[repeat(3,auto)]">
          {bento.map((item) => {
            const Ill = item.Illustration;
            return (
              <article
                key={item.title}
                className={`group relative flex h-full flex-col rounded-3xl border border-border/80 p-6 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-12px_rgba(43,143,236,0.14)] hover:border-primary/20 ${item.gridClass}`}
              >
                <div className="flex flex-1 flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-primary">{item.subtitle}</p>
                    <h3 className="mt-2 text-lg font-bold text-foreground sm:text-xl group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{item.body}</p>
                  </div>
                  <div className={`shrink-0 self-start sm:self-center ${item.illustrationWrap}`} aria-hidden>
                    <Ill className={item.illustrationClass} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
