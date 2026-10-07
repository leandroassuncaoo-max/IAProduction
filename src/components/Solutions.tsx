import {
  Instagram,
  Linkedin,
  GraduationCap,
  Presentation,
  Bot,
  Repeat,
  type LucideIcon,
} from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import SectionHeading from '@/components/SectionHeading';

const ICONS: Record<string, LucideIcon> = {
  Instagram,
  Linkedin,
  GraduationCap,
  Presentation,
  Bot,
  Repeat,
};

// Tamanho de cada card no bento (grid de 6 colunas no desktop), na ordem de SERVICES.
const SPANS = [
  'lg:col-span-4',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-6',
];

export default function Solutions() {
  return (
    <section id="solucoes" className="section-py relative">
      <div className="container-px">
        <SectionHeading
          scene="01"
          label="Soluções"
          title={
            <>
              Um vídeo para cada <span className="accent-serif">objetivo</span> do seu negócio.
            </>
          }
          intro="Da presença digital ao treinamento de equipes — produção estratégica, recorrente e adaptada aos canais que importam para você."
        />

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Instagram;
            const isFeature = i === 0;
            const isWide = i === SERVICES.length - 1;
            return (
              <article
                key={service.title}
                className={`reveal card card-hover group relative flex flex-col overflow-hidden p-7 sm:p-8 ${SPANS[i]} ${
                  isFeature || isWide ? 'sm:col-span-2' : ''
                }`}
                style={{ transitionDelay: `${(i % 3) * 70}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-paper transition-colors group-hover:border-rec-500/40 group-hover:text-rec-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[11px] tracking-wider text-stone-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className={isWide ? 'mt-8 grid items-end gap-8 lg:grid-cols-2' : 'mt-auto'}>
                  <div className={isFeature || isWide ? '' : 'pt-14'}>
                    {isFeature && <VerticalFormats />}
                    <h3 className="font-display text-xl font-semibold tracking-tight text-paper sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 max-w-md text-[15px] leading-relaxed text-stone-400">
                      {service.description}
                    </p>
                  </div>
                  {isWide && <WeekStrip />}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Três telas verticais lado a lado: o mesmo conteúdo em cada canal. */
function VerticalFormats() {
  const formats = ['Reels', 'TikTok', 'Shorts'];
  return (
    <div className="mb-10 mt-10 flex items-end gap-3" aria-hidden="true">
      {formats.map((f, i) => (
        <div
          key={f}
          className={`relative aspect-[9/16] w-20 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-ink-600 to-ink-800 transition-transform duration-500 sm:w-24 ${
            i === 1 ? 'group-hover:-translate-y-2' : 'group-hover:-translate-y-1'
          }`}
        >
          <div className="absolute inset-x-0 top-1/4 mx-auto h-8 w-8 rounded-full bg-stone-500/40" />
          <div className="absolute inset-x-0 top-[calc(25%+1.75rem)] mx-auto h-10 w-14 rounded-t-full bg-stone-500/25" />
          <div className="absolute inset-x-2 bottom-6 h-1.5 rounded-full bg-paper/70" />
          <div className="absolute inset-x-4 bottom-3.5 h-1.5 rounded-full bg-rec-500" />
          <span className="absolute left-2 top-2 font-mono text-[8px] uppercase tracking-wider text-paper/60">
            {f}
          </span>
        </div>
      ))}
    </div>
  );
}

/** Uma semana de calendário editorial: a produção recorrente em forma de agenda. */
function WeekStrip() {
  const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
  const scheduled = [0, 2, 4, 5];
  return (
    <div className="grid grid-cols-7 gap-2" aria-hidden="true">
      {days.map((d, i) => {
        const on = scheduled.includes(i);
        return (
          <div
            key={d}
            className={`flex aspect-[3/4] flex-col justify-between rounded-xl border p-2 sm:p-2.5 ${
              on ? 'border-rec-500/30 bg-rec-500/10' : 'border-white/[0.06] bg-white/[0.02]'
            }`}
          >
            <span className="font-mono text-[9px] uppercase tracking-wider text-stone-500 sm:text-[10px]">{d}</span>
            {on && <span className="h-1.5 w-full rounded-full bg-rec-500" />}
          </div>
        );
      })}
    </div>
  );
}
