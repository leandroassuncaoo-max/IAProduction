import { Check, Star } from 'lucide-react';
import { PLANS, whatsappProposalLink } from '@/lib/constants';

export default function Plans() {
  return (
    <section id="planos" className="section-py relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-electric-600/15 blur-[120px]" />

      <div className="container-px relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Planos</span>
          <h2 className="heading-lg mt-4">Escolha o ponto de partida ideal</h2>
          <p className="body-lg mt-4">
            Comece com um vídeo piloto ou contrate um pacote recorrente. Todos os
            planos incluem roteiro estratégico, avatar de IA e legendas.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map((plan, i) => (
            <div
              key={plan.name}
              className={`reveal relative flex flex-col rounded-2xl border p-7 sm:p-8 ${
                plan.highlight
                  ? 'border-electric-500/50 bg-gradient-to-b from-electric-600/15 to-ink-800 shadow-[0_0_50px_-12px_rgba(51,102,255,0.5)]'
                  : 'border-white/10 bg-ink-800/60'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-electric-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
                  <Star className="h-3.5 w-3.5 fill-white" />
                  Mais procurado
                </span>
              )}

              <h3 className="font-display text-xl font-bold text-white">{plan.name}</h3>
              <p className="mt-1.5 text-sm text-slate-400">{plan.description}</p>
              <div className="mt-5 font-display text-2xl font-extrabold text-white">
                {plan.price}
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-electric-500/15 text-electric-300">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={whatsappProposalLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="reveal mt-8 text-center text-sm text-slate-500">
          Valores personalizados conforme volume e frequência. Diagnóstico gratuito e sem compromisso.
        </p>
      </div>
    </section>
  );
}
