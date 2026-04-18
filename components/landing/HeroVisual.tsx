export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-lg lg:mx-0" aria-hidden>
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-2xl" />
      <div className="relative space-y-4">
        <div className="rounded-3xl border border-white/60 bg-white/80 p-4 shadow-[0_24px_48px_-12px_rgba(43,143,236,0.24)] ring-1 ring-primary/10 backdrop-blur-md">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-sky-400 shadow-[0_0_0_4px_rgba(56,189,248,0.35)]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                Consulta en curso
              </span>
            </div>
            <span className="rounded-full bg-primary-soft px-2.5 py-0.5 text-[11px] font-semibold text-primary">
              Infra propia
            </span>
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-2.5 w-full max-w-[92%] rounded-full bg-surface" />
            <div className="h-2.5 w-full max-w-[78%] rounded-full bg-surface" />
            <div className="h-2.5 w-full max-w-[64%] rounded-full bg-surface" />
          </div>
          <div className="mt-4 flex gap-2">
            <span className="rounded-lg bg-primary/10 px-2 py-1 text-[11px] font-medium text-primary">
              Resumen
            </span>
            <span className="rounded-lg bg-surface px-2 py-1 text-[11px] font-medium text-muted">
              Borrador HCE
            </span>
          </div>
        </div>
        <div className="ml-6 rounded-3xl border border-white/60 bg-white/70 p-4 shadow-[0_16px_40px_-8px_rgba(15,23,42,0.12)] ring-1 ring-black/[0.04] backdrop-blur-md sm:ml-10">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-hover text-sm font-bold text-white shadow-lg shadow-primary/30">
              Rx
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-foreground">Seguimiento post-consulta</p>
              <p className="text-xs text-muted">Voz · expediente + protocolos</p>
            </div>
          </div>
          <div className="mt-3 flex gap-1.5">
            {[40, 72, 56].map((w) => (
              <div
                key={w}
                className="h-8 rounded-lg bg-gradient-to-r from-primary/15 to-primary/5"
                style={{ width: `${w}px` }}
              />
            ))}
          </div>
        </div>
        <div className="mr-8 flex justify-end sm:mr-12">
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary to-primary-hover px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-primary/25">
            Guardarraíles activos
          </div>
        </div>
      </div>
    </div>
  );
}
