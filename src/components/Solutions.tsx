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

const ICONS: Record<string, LucideIcon> = {
  Instagram,
  Linkedin,
  GraduationCap,
  Presentation,
  Bot,
  Repeat,
};

export default function Solutions() {
  return (
    <section id="solucoes" className="section-py relative">
      <div className="container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Soluções</span>
          <h2 className="heading-lg mt-4">
            Vídeos com IA para cada objetivo do seu negócio
          </h2>
          <p className="body-lg mt-4">
            Da presença digital ao treinamento de equipes — produção estratégica,
            recorrente e adaptada aos canais que importam para você.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Instagram;
            return (
              <article
                key={service.title}
                className="reveal card card-hover group p-6 sm:p-7"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-electric-500/20 to-violet-600/20 text-electric-300 ring-1 ring-white/10 transition-colors group-hover:text-electric-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
