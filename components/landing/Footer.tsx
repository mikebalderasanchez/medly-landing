import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { SITE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-ink to-[#030712] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              className="inline-block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <BrandLogo inverse />
            </Link>
            <div className="flex flex-col gap-5">
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Plataforma para documentación asistida y seguimiento post-consulta bajo políticas clínicas
              de su institución.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <Link href="/about" className="text-sm text-white/50 transition-colors hover:text-white">
                Documentación del proyecto
              </Link>
              <Link href="/privacy" className="text-sm text-white/50 transition-colors hover:text-white">
                Política de Privacidad
              </Link>
            </div>
            </div>
          </div>
          <div className="max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-white/75 backdrop-blur-sm">
            <p className="font-bold text-white">Aviso importante</p>
            <p className="mt-2 leading-relaxed">
              Medly no sustituye el criterio médico ni la relación clínico-paciente. Ante una emergencia
              o empeoramiento agudo, el paciente debe acudir a servicios de urgencia o contactar a su
              equipo tratante según las indicaciones recibidas.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-10 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}. Todos los derechos reservados.
          </p>  
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <p className="max-w-xl leading-relaxed">
              Las funcionalidades descritas pueden variar según integración, normativa local y acuerdos
              contractuales.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
