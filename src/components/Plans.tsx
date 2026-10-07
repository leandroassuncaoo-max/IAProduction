import { Check, ArrowUpRight } from 'lucide-react';
import { PLANS, whatsappProposalLink } from '@/lib/constants';
import SectionHeading from '@/components/SectionHeading';

export default function Plans() {
  return (
    <section id="planos" className="section-py relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-rec-500/[0.07] blur-[140px]" />

      <div className="container-px relative">
        <SectionHeading
          scene="04"
          label="Planos"
          align="center"
          title={
            <>
              Escolha o ponto de <span className="accent-serif">partida</span> ideal.
            </>
          }
          intro="Comece com um vídeo piloto ou contrate um pacote recorrente. Todos os planos incluem roteiro estratégico, avatar de IA e legendas."
        />

        <div className="mt-16 grid items-stretch gap-4 lg:grid-cols-3">
          {PLANS.map((plan, i) => {
            const hi = plan.highlight;
            return (
              <div
                key={plan.name}
                className={`reveal relative flex flex-col rounded-3xl p-8 sm:p-10 ${
                  hi
                    ? 'bg-paper text-ink-950 shadow-[0_40px_100px_-30px_rgba(255,77,46,0.45)] lg:-my-4 lg:py-14'
                    : 'border border-white/[0.08] bg-ink-900'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-[11px] uppercase tracking-[0.2em] ${hi ? 'text-ink-500' : 'text-stone-500'}`}>
                    Plano {String(i + 1).padStart(2, '0')}
                  </span>
                  {hi && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-rec-500 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" />
                      Mais procurado
                    </span>
                  )}
                </div>

                <h3 className={`mt-6 font-display text-4xl font-semibold tracking-[-0.03em] ${hi ? 'text-ink-950' : 'text-paper'}`}>
                  {plan.name}
                </h3>
                <p className={`mt-2 text-[15px] ${hi ? 'text-ink-600' : 'text-stone-400'}`}>{plan.description}</p>

                <div className={`mt-8 border-t pt-6 ${hi ? 'border-ink-950/10' : 'border-white/[0.08]'}`}>
                  <span className={`accent-serif text-3xl ${hi ? 'text-ink-950' : 'text-paper'}`}>{plan.price}</span>
                </div>

                <ul className="mt-6 flex-1 space-y-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`flex items-start gap-3 text-[15px] ${hi ? 'text-ink-700' : 'text-stone-300'}`}>
                      <Check className={`mt-0.5 h-4 w-4 shrink-0 ${hi ? 'text-rec-600' : 'text-rec-400'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappProposalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-10 ${hi ? 'btn bg-ink-950 text-paper hover:bg-ink-800' : 'btn-secondary'}`}
                >
                  {plan.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>

        <p className="reveal mt-12 text-center text-sm text-stone-500">
          Valores personalizados conforme volume e frequência. Diagnóstico gratuito e sem compromisso.
        </p>
      </div>
    </section>
  );
}
