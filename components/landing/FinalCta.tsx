import { SITE } from "@/lib/site";

export function FinalCta() {
  return (
    <section id="contacto" className="scroll-mt-24 relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[#0a4d82]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 90% 70% at 85% -10%, rgba(255,255,255,0.22), transparent 55%), radial-gradient(ellipse 60% 50% at 0% 100%, rgba(255,255,255,0.08), transparent 50%)",
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute -left-24 top-1/2 size-[28rem] -translate-y-1/2 rounded-full bg-white/5 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          ¿Quiere ver Medly en su hospital?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          Agendemos una demo sobre despliegue en su infraestructura, flujo de consulta y seguimiento con voz. Cuéntenos
          su contexto (México / LATAM, servicios, compliance) y le respondemos a la brevedad.
        </p>
        <a
          href={`mailto:${SITE.contactEmail}?subject=Demo%20Medly`}
          className="mt-10 inline-flex h-12 items-center justify-center rounded-full bg-white px-10 text-base font-semibold text-primary shadow-xl shadow-black/10 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Contactar por correo
        </a>
        <p className="mt-5 text-sm text-white/75">
          Correo:{" "}
          <a
            href={`mailto:${SITE.contactEmail}`}
            className="font-medium text-white underline decoration-white/40 underline-offset-4 transition-colors hover:decoration-white"
          >
            {SITE.contactEmail}
          </a>
        </p>
      </div>
    </section>
  );
}
