import { Play, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '@/lib/constants';

const THUMBS = [
  'https://images.pexels.com/photos/5473960/pexels-photo-5473960.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/4499737/pexels-photo-4499737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/27086922/pexels-photo-27086922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/5878878/pexels-photo-5878878.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/11748185/pexels-photo-11748185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-py relative">
      <div className="container-px">
        <div className="reveal flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Portfólio</span>
            <h2 className="heading-lg mt-4">Projetos que comunicam e convertem</h2>
            <p className="body-lg mt-4">
              Uma amostra de formatos e aplicações produzidos com IA — do conteúdo
              recorrente para redes sociais a treinamentos corporativos.
            </p>
          </div>
          <span className="chip">Exemplos ilustrativos</span>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <article
              key={item.title}
              className="reveal group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800"
              style={{ transitionDelay: `${(i % 3) * 80}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={THUMBS[i % THUMBS.length]}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition-transform duration-300 group-hover:scale-110">
                    <Play className="h-6 w-6 fill-white" />
                  </span>
                </div>
                <span className="absolute left-4 top-4 chip border-white/15 bg-black/40 text-white backdrop-blur">
                  {item.category}
                </span>
              </div>
              <div className="flex items-start justify-between gap-3 p-5">
                <div>
                  <h3 className="font-display text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{item.description}</p>
                </div>
                <ArrowUpRight className="mt-0.5 h-5 w-5 shrink-0 text-slate-500 transition-colors group-hover:text-electric-300" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
