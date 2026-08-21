import { Instagram, Linkedin, Youtube, Facebook, Play, Clapperboard } from 'lucide-react';

const CHANNELS = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Play, label: 'TikTok' },
  { icon: Facebook, label: 'Facebook' },
  { icon: Youtube, label: 'YouTube Shorts' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Clapperboard, label: 'Treinamentos' },
];

export default function TrustBar() {
  return (
    <section className="border-y border-white/5 bg-ink-900/50 py-8">
      <div className="container-px">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          Conteúdo estratégico para cada canal
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">
          {CHANNELS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-slate-400 transition-colors hover:text-slate-200"
            >
              <Icon className="h-5 w-5" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
