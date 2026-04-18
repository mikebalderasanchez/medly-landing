export function IconMemory({ className = "size-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <defs>
        <linearGradient id="memory-grad" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="0.2" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="18" fill="url(#memory-grad)" className="stroke-primary" strokeWidth="1.5" />
      <path d="M16 26c2-8 8-12 14-8 4 3 4 8-1 12s-10 6-13 4" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="20" cy="18" r="1.5" className="fill-primary/60" />
      <circle cx="28" cy="16" r="1" className="fill-primary/40" />
      <circle cx="32" cy="22" r="1" className="fill-primary/30" />
      <path d="M16 34h4" className="stroke-primary/50" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
    </svg>
  );
}

export function IconCloudRisk({ className = "size-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <defs>
        <linearGradient id="cloud-grad" x1="10" y1="12" x2="38" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="0.25" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path
        d="M14 30c0-5 4-9 9-9 1-4 5-7 10-7 6 0 11 5 11 11a7 7 0 0 1-7 7H16a5 5 0 0 1-2-9Z"
        fill="url(#cloud-grad)"
        className="stroke-primary"
        strokeWidth="1.5"
      />
      <path d="M26 18L22 26h5l-3 8" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="16" r="1.5" className="fill-primary/50" />
      <circle cx="38" cy="14" r="1" className="fill-primary/40" />
    </svg>
  );
}

export function IconDataExit({ className = "size-12" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden>
      <defs>
        <linearGradient id="data-grad" x1="8" y1="12" x2="28" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="0.15" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <rect x="10" y="14" width="16" height="20" rx="2" fill="url(#data-grad)" className="stroke-primary" strokeWidth="1.5" />
      <path d="M14 20h8M14 24h6M14 28h8" className="stroke-primary/50" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 24h14M34 20l4 4-4 4" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 36H8V10h22v6" className="stroke-primary/30" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconSolution({ className = "size-14" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 56 56" fill="none" aria-hidden>
      <defs>
        <linearGradient id="sol-grad" x1="8" y1="10" x2="40" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="0.15" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.0" />
        </linearGradient>
        <linearGradient id="sol-circle-grad" x1="28" y1="6" x2="52" y2="30" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="0.3" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect x="10" y="12" width="28" height="34" rx="3" fill="url(#sol-grad)" className="stroke-primary" strokeWidth="1.5" />
      <path d="M16 20h16M16 28h12M16 36h14" className="stroke-primary/60" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="42" cy="18" r="10" fill="url(#sol-circle-grad)" className="stroke-primary" strokeWidth="1.5" />
      <path d="M38 18l3 3 5-6" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 8v-4M28 6h-2m4 0h-2" className="stroke-primary/60" strokeWidth="1" strokeLinecap="round" />
      <path d="M48 32v2m-1-1h2" className="stroke-primary/40" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}
