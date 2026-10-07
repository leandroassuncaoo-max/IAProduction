import { Play } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '@/lib/constants';
import SectionHeading from '@/components/SectionHeading';

const THUMBS = [
  'https://images.pexels.com/photos/5473960/pexels-photo-5473960.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/4499737/pexels-photo-4499737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/27086922/pexels-photo-27086922.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/5878878/pexels-photo-5878878.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/11748185/pexels-photo-11748185.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

// Alterna proporções para a grade parecer uma parede de monitores, não uma tabela.
const LAYOUT = [
  'lg:col-span-7 aspect-[16/10]',
  'lg:col-span-5 aspect-[16/10] lg:aspect-auto',
  'lg:col-span-4 aspect-[4/5]',
  'lg:col-span-4 aspect-[4/5]',
  'lg:col-span-4 aspect-[4/5]',
  'lg:col-span-12 aspect-[16/10] lg:aspect-[21/7]',
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-py relative">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            scene="03"
            label="Portfólio"
            title={
              <>
                Projetos que <span className="accent-serif">comunicam</span> e convertem.
              </>
            }
            intro="Uma amostra de formatos e aplicações produzidos com IA — do conteúdo recorrente para redes sociais a treinamentos corporativos."
          />
          <span className="reveal chip shrink-0">Exemplos ilustrativos</span>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <article
              key={item.title}
              className={`reveal group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-ink-800 ${LAYOUT[i]} ${
                i === 0 || i === PORTFOLIO_ITEMS.length - 1 ? 'sm:col-span-2' : ''
              }`}
              style={{ transitionDelay: `${(i % 3) * 70}ms` }}
            >
              <img
                src={THUMBS[i % THUMBS.length]}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-60 grayscale transition-all duration-700 group-hover:scale-[1.04] group-hover:opacity-80 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-ink-950/10" />

              {/* HUD de câmera */}
              <div className="absolute inset-x-5 top-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-paper/70">
                <span className="rounded-full bg-black/40 px-2.5 py-1 backdrop-blur">{item.category}</span>
                <span className="flex items-center gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="h-1.5 w-1.5 animate-blink rounded-full bg-rec-500" />
                  Play
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-paper sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 max-w-sm text-sm text-stone-300/80">{item.description}</p>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-paper text-ink-950 transition-all duration-300 group-hover:scale-110 group-hover:bg-rec-500 group-hover:text-white">
                  <Play className="ml-0.5 h-5 w-5 fill-current" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
