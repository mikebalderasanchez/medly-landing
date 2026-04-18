import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { SITE } from "@/lib/site";

const nav = [
  { href: "#solucion", label: "Solución" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-white/75 shadow-[0_1px_0_rgba(15,23,42,0.04)] backdrop-blur-xl supports-[backdrop-filter]:bg-white/65">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-[4.25rem] sm:px-6">
        <Link
          href="/"
          className="shrink-0 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <BrandLogo />
        </Link>
        <div className="flex items-center gap-2">
          <nav className="flex sm:hidden" aria-label="Principal móvil">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2 text-xs font-medium text-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={`mailto:${SITE.contactEmail}?subject=Solicitud%20de%20demo%20Medly`}
            className="inline-flex h-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary-hover px-4 text-xs font-semibold text-white shadow-lg shadow-primary/25 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:translate-y-0 sm:h-10 sm:px-5 sm:text-sm"
          >
            Demo
          </a>
        </div>
      </div>
    </header>
  );
}
