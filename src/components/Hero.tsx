import { useEffect, useState } from 'react';
import { ArrowUpRight, Captions, Mic, ScrollText, Wand2, Check } from 'lucide-react';
import { whatsappProposalLink } from '@/lib/constants';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const INDICATORS = [
  { icon: Wand2, label: 'Vídeos sob medida' },
  { icon: ScrollText, label: 'Roteiro estratégico' },
  { icon: Captions, label: 'Legendas e formatos por canal' },
  { icon: Mic, label: 'Produção ágil com IA' },
];

const CAPTION = ['Com', 'IA,', 'seu', 'conteúdo', 'fica', 'pronto', 'mais', 'rápido.'];

// Alturas fixas da forma de onda: determinísticas para não mudar a cada render.
const WAVE = Array.from({ length: 48 }, (_, i) =>
  Math.round(22 + 60 * Math.abs(Math.sin(i * 0.55) * Math.cos(i * 0.21)))
);

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-44">
      {/* Luz de set: um key light quente vindo da direita */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[640px] w-[640px] rounded-full bg-rec-500/[0.13] blur-[140px]" />
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[420px] w-[420px] rounded-full bg-paper/[0.04] blur-[120px]" />

      <div className="container-px relative">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          {/* Copy */}
          <div className="reveal">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-2 pr-4 font-mono text-[11px] uppercase tracking-[0.18em] text-stone-300">
              <span className="flex items-center gap-1.5 rounded-full bg-rec-500/15 px-2 py-0.5 text-rec-300">
                <span className="h-1.5 w-1.5 animate-blink rounded-full bg-rec-500" />
                Rec
              </span>
              Estúdio de vídeos com IA
            </span>

            <h1 className="heading-xl mt-7 text-balance">
              Do roteiro ao vídeo pronto, <span className="accent-serif text-rec-400">em um só take.</span>
            </h1>

            <p className="body-lg mt-7 max-w-xl">
              Criamos vídeos estratégicos com IA para redes sociais, LinkedIn,
              treinamentos corporativos e comunicação interna — vídeos que
              comunicam, engajam e geram resultados.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappProposalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group px-7"
              >
                Solicitar proposta
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a href="#solucoes" className="btn-secondary px-7">
                Ver soluções
              </a>
            </div>
          </div>

          {/* Visor */}
          <div className="reveal flex justify-center lg:justify-end">
            <Viewfinder />
          </div>
        </div>

        {/* Faixa de diferenciais */}
        <ul className="reveal mt-20 grid grid-cols-2 gap-px border-y border-white/[0.08] bg-white/[0.08] lg:mt-28 lg:grid-cols-4">
          {INDICATORS.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 bg-ink-950 px-1 py-5 text-sm text-stone-300 sm:px-4 lg:py-6"
            >
              <Icon className="h-4 w-4 shrink-0 text-rec-400" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function useTimecode(enabled: boolean) {
  const [frames, setFrames] = useState(12 * 24 + 8);
  useEffect(() => {
    if (!enabled) return;
    const id = window.setInterval(() => setFrames((f) => f + 2), 1000 / 12);
    return () => window.clearInterval(id);
  }, [enabled]);
  const pad = (n: number) => String(n).padStart(2, '0');
  const totalSeconds = Math.floor(frames / 24);
  return `${pad(Math.floor(totalSeconds / 3600))}:${pad(Math.floor(totalSeconds / 60) % 60)}:${pad(
    totalSeconds % 60
  )}:${pad(frames % 24)}`;
}

function useKaraoke(length: number, enabled: boolean) {
  const [index, setIndex] = useState(enabled ? 0 : length - 1);
  useEffect(() => {
    if (!enabled) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % (length + 3)), 380);
    return () => window.clearInterval(id);
  }, [enabled, length]);
  return index;
}

function Viewfinder() {
  const reduced = usePrefersReducedMotion();
  const timecode = useTimecode(!reduced);
  const spoken = useKaraoke(CAPTION.length, !reduced);

  return (
    <div className="relative w-[290px] sm:w-[330px] lg:w-[370px]">
      {/* Frame 9:16 */}
      <div className="viewfinder relative aspect-[9/16] overflow-hidden rounded-[28px] border border-white/10 bg-ink-900 shadow-[0_40px_120px_-30px_rgba(255,77,46,0.35)]">
        <span className="vf-b" />

        {/* Cena: fundo + avatar estilizado */}
        <div className="absolute inset-0 bg-[radial-gradient(110%_70%_at_70%_15%,#3d2620_0%,#17171a_55%,#0b0b0c_100%)]" />
        <div className="absolute -left-16 top-24 h-64 w-64 rounded-full bg-rec-500/20 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center">
          <div className="h-[7.25rem] w-[6.25rem] rounded-[46%] bg-gradient-to-br from-[#4a4a50] via-[#2b2b2f] to-[#1a1a1d] shadow-[inset_-10px_-6px_30px_rgba(0,0,0,0.5),inset_8px_6px_20px_rgba(255,120,90,0.18)]" />
          <div className="-mt-1 h-7 w-12 bg-gradient-to-b from-[#232326] to-[#1b1b1e]" />
          <div className="-mt-2 h-48 w-[82%] rounded-t-[48%] bg-gradient-to-b from-[#2c2c30] via-[#1c1c1f] to-ink-900 shadow-[inset_10px_8px_30px_rgba(255,120,90,0.12)]" />
        </div>

        {/* HUD superior */}
        <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-7 pt-7 font-mono text-[10px] uppercase tracking-wider text-paper/80">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 animate-blink rounded-full bg-rec-500" />
            Rec
            <span className="ml-1 tabular-nums text-paper/60">{timecode}</span>
          </span>
          <span className="text-paper/60">4K · 9:16</span>
        </div>

        {/* Legenda estilo Reels, palavra a palavra */}
        <p className="absolute inset-x-6 bottom-[30%] z-20 text-center font-display text-[1.35rem] font-semibold leading-tight tracking-tight text-paper/40 [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]">
          {CAPTION.map((word, i) => (
            <span
              key={i}
              className={`transition-colors duration-150 ${
                i === spoken ? 'rounded bg-rec-500 px-1 text-white' : i < spoken ? 'text-paper' : ''
              }`}
            >
              {word}{' '}
            </span>
          ))}
        </p>

        {/* Timeline de edição */}
        <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black/80 to-transparent px-7 pb-8 pt-10">
          <div className="relative flex h-9 items-end gap-[3px]">
            {WAVE.map((h, i) => (
              <span key={i} className="flex-1 rounded-full bg-paper/30" style={{ height: `${h}%` }} />
            ))}
            <span className="absolute -bottom-1 -top-1 w-px animate-playhead bg-rec-500 [box-shadow:0_0_8px_#ff4d2e]" />
          </div>
          <div className="mt-2 flex justify-between font-mono text-[9px] uppercase tracking-wider text-paper/50">
            <span>Take 03</span>
            <span>00:45</span>
          </div>
        </div>
      </div>

      {/* Cartões flutuantes */}
      <div className="absolute -left-14 top-[30%] z-30 hidden animate-float items-center gap-3 rounded-2xl border border-white/10 bg-ink-800/90 p-3 pr-4 shadow-2xl backdrop-blur-xl sm:flex">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-rec-500/15 text-rec-400">
          <Mic className="h-4 w-4" />
        </span>
        <span>
          <span className="block text-xs font-semibold text-paper">Narração com IA</span>
          <span className="block font-mono text-[10px] uppercase tracking-wider text-stone-500">pt-BR · natural</span>
        </span>
      </div>
      <div className="absolute -right-10 bottom-[38%] z-30 hidden animate-float items-center gap-2 rounded-full border border-white/10 bg-paper py-2 pl-2 pr-4 text-xs font-semibold text-ink-950 shadow-2xl [animation-delay:2s] sm:flex">
        <span className="grid h-6 w-6 place-items-center rounded-full bg-ink-950 text-paper">
          <Check className="h-3.5 w-3.5" />
        </span>
        Roteiro aprovado
      </div>
    </div>
  );
}
