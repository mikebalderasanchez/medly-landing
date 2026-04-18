import { MedlyLogoMark } from "@/components/brand/MedlyLogoMark";
import { SITE } from "@/lib/site";

type BrandLogoProps = {
  className?: string;
  showWordmark?: boolean;
  inverse?: boolean;
};

export function BrandLogo({
  className = "",
  showWordmark = true,
  inverse = false,
}: BrandLogoProps) {
  const wordmarkClass = inverse
    ? "text-lg font-bold tracking-tight text-white"
    : "text-lg font-bold tracking-tight text-foreground";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        className={`inline-flex shrink-0 overflow-hidden rounded-2xl shadow-md ${
          inverse ? "ring-1 ring-white/25 shadow-none" : "shadow-primary/25"
        }`}
        aria-hidden
      >
        <MedlyLogoMark decorative className="size-10" />
      </span>
      {showWordmark ? <span className={wordmarkClass}>{SITE.name}</span> : null}
    </span>
  );
}
