import { Play, Sparkles, Captions, Wand2, Zap } from 'lucide-react';
import { whatsappProposalLink } from '@/lib/constants';

const INDICATORS = [
  { icon: Wand2, label: 'Vídeos sob medida' },
  { icon: Sparkles, label: 'Roteiro estratégico' },
  { icon: Captions, label: 'Legendas e formatos por canal' },
  { icon: Zap, label: 'Produção ágil com IA' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-electric-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-40 h-80 w-80 rounded-full bg-violet-600/20 blur-[140px]" />

      <div className="container-px relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Copy */}
          <div className="reveal max-w-2xl">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-electric-400 animate-pulse-slow" />
              Produção de vídeos com Inteligência Artificial
            </span>
            <h1 className="heading-xl mt-5">
              Transformamos ideias em vídeos com IA que{' '}
              <span className="bg-gradient-to-r from-electric-400 via-electric-300 to-violet-400 bg-clip-text text-transparent">
                comunicam, engajam e geram resultados
              </span>
              .
            </h1>
            <p className="body-lg mt-6 max-w-xl">
              Criamos vídeos estratégicos para redes sociais, LinkedIn, treinamentos
              corporativos e comunicação interna — com agilidade, qualidade e uma
              produção orientada ao seu negócio.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappProposalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Solicitar proposta
              </a>
              <a href="#solucoes" className="btn-secondary">
                Ver soluções
              </a>
            </div>

            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 sm:max-w-lg">
              {INDICATORS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-electric-500/15 text-electric-300">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Video mockup */}
          <div className="reveal flex justify-center lg:justify-end">
            <VideoMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoMockup() {
  return (
    <div className="relative w-[280px] sm:w-[320px] lg:w-[360px]">
      {/* Glow */}
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-electric-600/30 via-violet-600/20 to-transparent blur-2xl" />

      {/* Phone frame */}
      <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] border border-white/15 bg-ink-800 shadow-2xl">
        {/* Top bar */}
        <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-4 py-3 text-[11px] text-white/80">
          <span className="font-semibold">NexoraLab AI Studio</span>
          <span className="rounded-full bg-white/10 px-2 py-0.5">IA</span>
        </div>

        {/* Avatar background */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-700 via-ink-800 to-ink-900" />
        <div className="absolute left-1/2 top-[26%] h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-br from-electric-500/40 to-violet-600/40 blur-md" />
        <div className="absolute left-1/2 top-[22%] h-36 w-36 -translate-x-1/2 overflow-hidden rounded-full border-2 border-white/20 bg-ink-700">
          <div className="flex h-full w-full items-center justify-center">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-electric-400 to-violet-500 opacity-90" />
          </div>
        </div>

        {/* Play button */}
        <button
          type="button"
          className="absolute left-1/2 top-[22%] z-10 grid h-16 w-16 -translate-x-1/2 translate-y-7 place-items-center rounded-full bg-white/15 backdrop-blur transition-transform hover:scale-110"
          aria-label="Reproduzir vídeo piloto"
        >
          <Play className="h-7 w-7 fill-white text-white" />
        </button>

        {/* Caption */}
        <div className="absolute inset-x-4 top-[56%] z-10 space-y-2">
          <div className="mx-auto w-fit rounded-md bg-black/70 px-3 py-1.5 text-center text-sm font-semibold text-white">
            Com IA, seu conteúdo
          </div>
          <div className="mx-auto w-fit rounded-md bg-electric-500/90 px-3 py-1.5 text-center text-sm font-bold text-white">
            fica pronto mais rápido
          </div>
        </div>

        {/* Bottom controls */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-4">
          <div className="mb-3 h-1 w-full rounded-full bg-white/15">
            <div className="h-1 w-2/3 rounded-full bg-electric-400" />
          </div>
          <div className="flex items-center justify-between text-[11px] text-white/70">
            <span>00:42</span>
            <span>01:05</span>
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 backdrop-blur">
            <Captions className="h-4 w-4 text-electric-300" />
            <span className="text-[11px] font-medium text-white/80">Legendas automáticas</span>
          </div>
        </div>
      </div>

      {/* Floating chips */}
      <div className="absolute -left-6 top-1/3 hidden animate-float rounded-xl border border-white/10 bg-ink-800/90 px-3 py-2 text-xs font-medium text-slate-200 shadow-xl backdrop-blur sm:flex sm:items-center sm:gap-2">
        <Sparkles className="h-4 w-4 text-electric-300" />
        Avatar de IA
      </div>
      <div className="absolute -right-6 bottom-1/4 hidden animate-float rounded-xl border border-white/10 bg-ink-800/90 px-3 py-2 text-xs font-medium text-slate-200 shadow-xl backdrop-blur sm:flex sm:items-center sm:gap-2 [animation-delay:1.5s]">
        <Zap className="h-4 w-4 text-violet-400" />
        Narração IA
      </div>
    </div>
  );
}
