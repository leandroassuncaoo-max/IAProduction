/**
 * Marca da Takeia: o visor da câmera com o ponto de REC no centro.
 * O wordmark destaca o "ia" final — take + IA.
 */
export function LogoMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="#f3efe6" />
      <path
        d="M7 11V7h4M21 7h4v4M25 21v4h-4M11 25H7v-4"
        fill="none"
        stroke="#09090a"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="16" r="5" fill="#ff4d2e" />
    </svg>
  );
}

export function Wordmark({ className = '' }: { className?: string }) {
  return (
    <span className={`font-display font-semibold tracking-[-0.04em] text-paper ${className}`}>
      take<span className="text-rec-500">ia</span>
    </span>
  );
}

export default function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <Wordmark className="text-[1.35rem]" />
    </span>
  );
}
