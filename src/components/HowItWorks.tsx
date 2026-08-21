import { STEPS, STATS } from '@/lib/constants';
import { whatsappProposalLink } from '@/lib/constants';

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-py relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-grid opacity-20" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-violet-600/15 blur-[120px]" />

      <div className="container-px relative">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">Como funciona</span>
          <h2 className="heading-lg mt-4">Do diagnóstico à entrega em 4 passos</h2>
          <p className="body-lg mt-4">
            Um processo enxuto, transparente e orientado a resultados — com IA
            acelerando cada etapa e especialistas garantindo a qualidade.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className="reveal card relative p-6 sm:p-7"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="font-display text-4xl font-extrabold text-white/10">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {step.description}
              </p>
              {i < STEPS.length - 1 && (
                <span className="absolute right-5 top-7 hidden h-px w-12 bg-gradient-to-r from-electric-500/50 to-transparent lg:block" />
              )}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="reveal mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-ink-900/80 p-6 text-center sm:p-8">
              <div className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-400 sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-10 text-center">
          <a
            href={whatsappProposalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Começar meu diagnóstico
          </a>
        </div>
      </div>
    </section>
  );
}
