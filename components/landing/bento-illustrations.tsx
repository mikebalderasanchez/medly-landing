export function IllustrationConsult({ className = "size-14" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
      <defs>
        <linearGradient id="consult-grad" x1="10" y1="8" x2="54" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="0.2" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect x="12" y="8" width="40" height="48" rx="8" fill="url(#consult-grad)" className="stroke-primary" strokeWidth="1.5" />
      <path d="M20 22h24M20 30h16M20 38h20" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M42 42v6M46 40v10M50 43v4" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="20" cy="14" r="2" className="fill-primary" />
    </svg>
  );
}

export function IllustrationHomeVoice({ className = "size-14" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
      <defs>
        <linearGradient id="home-grad" x1="10" y1="10" x2="54" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="0.15" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <path
        d="M32 12L12 28v22a4 4 0 004 4h32a4 4 0 004-4V28L32 12z"
        fill="url(#home-grad)"
        className="stroke-primary"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <rect x="26" y="28" width="12" height="18" rx="2" className="fill-white stroke-primary" strokeWidth="1.5" />
      <circle cx="32" cy="42" r="1" className="fill-primary" />
      <path d="M44 26a8 8 0 010 12M48 22a12 12 0 010 20" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function IllustrationRag({ className = "size-14" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
      <defs>
        <linearGradient id="rag-grad" x1="16" y1="16" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <rect x="12" y="16" width="30" height="38" rx="4" className="fill-white stroke-primary" strokeWidth="1.5" />
      <path d="M18 24h18M18 32h14M18 40h20" className="stroke-primary/50" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="44" cy="24" r="12" fill="url(#rag-grad)" className="stroke-primary" strokeWidth="1.5" />
      <path d="M40 24h8M44 20v8" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="44" cy="24" r="3" className="fill-primary" />
      <path d="M30 10h16v16" className="stroke-primary" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3" />
    </svg>
  );
}

export function IllustrationServer({ className = "size-14" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
      <defs>
        <linearGradient id="server-grad" x1="14" y1="10" x2="50" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="0.05" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <rect x="14" y="10" width="36" height="12" rx="2" fill="url(#server-grad)" className="stroke-primary" strokeWidth="1.5" />
      <rect x="14" y="26" width="36" height="12" rx="2" fill="url(#server-grad)" className="stroke-primary" strokeWidth="1.5" />
      <rect x="14" y="42" width="36" height="12" rx="2" fill="url(#server-grad)" className="stroke-primary" strokeWidth="1.5" />
      
      <circle cx="22" cy="16" r="2" className="fill-primary" />
      <circle cx="22" cy="32" r="2" className="fill-primary" />
      <circle cx="22" cy="48" r="2" className="fill-primary" />

      <path d="M42 16h4M42 32h4M42 48h4" className="stroke-primary/50" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IllustrationHospitalAsset({ className = "size-14" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
      <defs>
        <linearGradient id="hospital-grad" x1="12" y1="8" x2="52" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.0" />
        </linearGradient>
      </defs>
      <path d="M32 10L14 20v36h36V20L32 10Z" fill="url(#hospital-grad)" className="stroke-primary" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M26 56V40h12v16" className="stroke-primary" strokeWidth="1.5" />
      <rect x="28" y="24" width="8" height="8" rx="1" className="fill-white stroke-primary" strokeWidth="1.5" />
      <path d="M32 24v8M28 28h8" className="stroke-primary" strokeWidth="1.5" />
      <path d="M54 22c0-3.3-2.7-6-6-6s-6 2.7-6 6c0 1.6.6 3 1.7 4H54v-4z" className="stroke-primary/30" strokeWidth="1" strokeDasharray="2 2" fill="none" />
      <line x1="44" y1="16" x2="52" y2="24" className="stroke-primary/40" strokeWidth="1" />
    </svg>
  );
}

export function IllustrationDashboard({ className = "size-14" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
      <defs>
        <linearGradient id="dash-grad" x1="8" y1="12" x2="56" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="0.1" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <rect x="8" y="12" width="48" height="40" rx="4" fill="url(#dash-grad)" className="stroke-primary" strokeWidth="1.5" />
      <path d="M8 24h48" className="stroke-primary/30" strokeWidth="1.5" />
      <circle cx="16" cy="18" r="2" className="fill-primary/50" />
      <circle cx="24" cy="18" r="2" className="fill-primary/50" />
      <path d="M16 42v-8M26 42v-16M36 42v-12M46 42v-20" className="stroke-primary" strokeWidth="3" strokeLinecap="round" />
      <path d="M16 26l10-6 10 4 10-8" className="stroke-primary/50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

export function IllustrationTrust({ className = "size-14" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
      <defs>
        <linearGradient id="trust-grad" x1="12" y1="8" x2="52" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" stopOpacity="0.2" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path
        d="M32 8L12 16v18c0 14 10 24 20 28 10-4 20-14 20-28V16L32 8Z"
        fill="url(#trust-grad)"
        className="stroke-primary"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M24 34l6 6 12-14" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="8" r="2" className="fill-white stroke-primary" strokeWidth="1.5" />
      <circle cx="12" cy="16" r="2" className="fill-white stroke-primary" strokeWidth="1.5" />
      <circle cx="52" cy="16" r="2" className="fill-white stroke-primary" strokeWidth="1.5" />
    </svg>
  );
}
