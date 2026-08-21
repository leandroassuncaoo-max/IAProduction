import { Target, Lightbulb, Cpu, Users } from 'lucide-react';

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
    <section id="sobre" className="section-py relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-violet-600/15 blur-[120px]" />

      <div className="container-px relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="reveal">
            <span className="eyebrow">Sobre a NexoraLab AI</span>
            <h2 className="heading-lg mt-4">
              Um estúdio criativo movido a Inteligência Artificial
            </h2>
            <p className="body-lg mt-5">
              A NexoraLab AI nasce da união entre comunicação estratégica e tecnologia.
              Produzimos vídeos com IA que ajudam empresas a comunicar melhor,
              treinar equipes e vender mais — com agilidade e custo operacional
              menor do que produções tradicionais.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              Atendemos pequenas e médias empresas, redes de franquias,
              profissionais que querem fortalecer o LinkedIn e equipes de RH,
              treinamento e marketing corporativo que precisam de conteúdo
              recorrente com qualidade.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://images.pexels.com/photos/30530407/pexels-photo-30530407.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Interface de Inteligência Artificial em tela escura"
                loading="lazy"
                className="h-56 w-full object-cover sm:h-64"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {VALUES.map((value, i) => (
              <div
                key={value.title}
                className="reveal card card-hover p-6"
                style={{ transitionDelay: `${(i % 2) * 80}ms` }}
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-electric-500/20 to-violet-600/20 text-electric-300 ring-1 ring-white/10">
                  <value.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-base font-bold text-white">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
