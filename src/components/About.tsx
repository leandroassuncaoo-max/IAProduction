import { Target, Lightbulb, Cpu, Users } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const VALUES = [
  {
    icon: Target,
    title: 'Orientação a resultados',
    description:
      'Cada vídeo tem um objetivo claro — engajar, treinar, converter ou posicionar. Não fazemos conteúdo por fazer.',
  },
  {
    icon: Lightbulb,
    title: 'Criatividade com estratégia',
    description:
      'Unimos narrativa persuasiva e direção criativa com IA para entregar vídeos que comunicam com clareza.',
  },
  {
    icon: Cpu,
    title: 'Domínio de IA aplicada',
    description:
      'Avatares, narração, legendas e motion graphics gerados com IA — revisados por especialistas em cada etapa.',
  },
  {
    icon: Users,
    title: 'Parceria de longo prazo',
    description:
      'Acompanhamos seu negócio com ciclos recorrentes, entendendo sua marca e evoluindo o conteúdo com você.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="section-py relative overflow-hidden bg-ink-900/50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-px relative">
        <SectionHeading
          scene="05"
          label="Sobre a Takeia"
          title={
            <>
              Um estúdio criativo movido a <span className="accent-serif text-rec-400">Inteligência Artificial.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div className="reveal">
            {/* O nome, explicado como verbete */}
            <div className="rounded-3xl border border-white/[0.08] bg-ink-950 p-7 sm:p-8">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-display text-4xl font-semibold tracking-[-0.04em] text-paper">
                  take<span className="text-rec-500">ia</span>
                </span>
                <span className="font-mono text-xs text-stone-500">/tei·ki·a/ · s.f.</span>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-stone-300">
                De <em className="accent-serif text-lg text-paper">take</em>, a tomada de cada cena,
                + <span className="font-semibold text-paper">IA</span>. Um estúdio onde a direção é
                humana e a produção é acelerada por inteligência artificial.
              </p>
            </div>

            <p className="body-lg mt-8">
              Nascemos da união entre comunicação estratégica e tecnologia. Produzimos vídeos com IA
              que ajudam empresas a comunicar melhor, treinar equipes e vender mais — com agilidade e
              custo operacional menor do que produções tradicionais.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-stone-500">
              Atendemos pequenas e médias empresas, redes de franquias, profissionais que querem
              fortalecer o LinkedIn e equipes de RH, treinamento e marketing corporativo que precisam
              de conteúdo recorrente com qualidade.
            </p>
          </div>

          <ul className="grid content-start gap-px overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
            {VALUES.map((value, i) => (
              <li
                key={value.title}
                className="reveal bg-ink-900 p-7 transition-colors duration-300 hover:bg-ink-800"
                style={{ transitionDelay: `${(i % 2) * 80}ms` }}
              >
                <value.icon className="h-5 w-5 text-rec-400" />
                <h3 className="mt-8 font-display text-lg font-semibold tracking-tight text-paper">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-400">{value.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
