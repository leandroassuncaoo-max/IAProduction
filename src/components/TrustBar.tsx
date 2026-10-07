import { Instagram, Linkedin, Youtube, Facebook, Music2, GraduationCap, Building2 } from 'lucide-react';

const CHANNELS = [
  { icon: Instagram, label: 'Instagram Reels' },
  { icon: Music2, label: 'TikTok' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Youtube, label: 'YouTube Shorts' },
  { icon: Facebook, label: 'Facebook' },
  { icon: GraduationCap, label: 'Treinamentos' },
  { icon: Building2, label: 'Comunicação interna' },
];

export default function TrustBar() {
  return (
    <section aria-label="Canais atendidos" className="border-y border-white/[0.06] bg-ink-900/60 py-7">
      <div className="flex items-center gap-8">
        <p className="hidden shrink-0 pl-12 font-mono text-[11px] uppercase tracking-[0.2em] text-stone-500 xl:block">
          Formatos prontos para
        </p>
        <div className="mask-fade-x relative flex-1 overflow-hidden">
          {/* A lista vai duplicada para o loop do letreiro não ter emenda. */}
          <ul className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
            {[...CHANNELS, ...CHANNELS].map(({ icon: Icon, label }, i) => (
              <li
                key={i}
                aria-hidden={i >= CHANNELS.length}
                className="flex items-center gap-3 px-8 font-display text-lg font-medium tracking-tight text-stone-400 sm:text-xl"
              >
                <Icon className="h-5 w-5 text-stone-500" />
                {label}
                <span className="ml-8 h-1 w-1 rounded-full bg-rec-500/70" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
