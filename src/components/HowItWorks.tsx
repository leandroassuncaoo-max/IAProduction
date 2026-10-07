import { ArrowUpRight } from 'lucide-react';
import { STEPS, STATS, whatsappProposalLink } from '@/lib/constants';
import SectionHeading from '@/components/SectionHeading';

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-py relative overflow-hidden bg-ink-900/50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-px relative">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            scene="02"
            label="Como funciona"
            title={
              <>
                Do diagnóstico à entrega em <span className="accent-serif text-rec-400">4 takes.</span>
              </>
            }
            intro="Um processo enxuto e transparente — com IA acelerando cada etapa e especialistas garantindo a qualidade."
          />
          <a
            href={whatsappProposalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal btn-light shrink-0 self-start lg:self-auto"
          >
            Começar meu diagnóstico
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Linha do tempo de edição */}
        <ol className="relative mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <span
            className="pointer-events-none absolute left-0 right-0 top-[7px] hidden h-px bg-white/10 lg:block"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute left-0 top-[7px] hidden h-px w-1/4 bg-gradient-to-r from-rec-500 to-rec-500/0 lg:block"
            aria-hidden="true"
          />
          {STEPS.map((step, i) => (
            <li key={step.number} className="reveal relative" style={{ transitionDelay: `${i * 90}ms` }}>
              <span
                className={`relative z-10 block h-[15px] w-[15px] rounded-full border-2 ${
                  i === 0 ? 'border-rec-500 bg-rec-500' : 'border-stone-500 bg-ink-900'
                }`}
              />
              <div className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-stone-500">
                Take {step.number} · 00:0{i * 2}:00
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-paper">
                {step.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-stone-400">{step.description}</p>
            </li>
          ))}
        </ol>

        {/* Números */}
        <dl className="reveal mt-24 grid grid-cols-2 gap-y-10 border-t border-white/10 pt-12 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div key={stat.label} className={`flex flex-col ${i > 0 ? 'lg:border-l lg:border-white/10 lg:pl-8' : ''} ${i % 2 === 1 ? 'pl-6 lg:pl-8' : ''}`}>
              <dt className="order-2 mt-2 max-w-[12rem] text-sm text-stone-400">{stat.label}</dt>
              <dd className="order-1 font-display text-5xl font-semibold tracking-[-0.04em] text-paper sm:text-6xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
