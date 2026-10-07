import { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/constants';
import SectionHeading from '@/components/SectionHeading';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-py relative">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              scene="06"
              label="Dúvidas"
              title={
                <>
                  Perguntas comuns antes do <span className="accent-serif">primeiro take.</span>
                </>
              }
              intro="Reunimos as perguntas mais frequentes para ajudar você a entender como funciona a produção de vídeos com IA na Takeia."
            />
          </div>

          <div className="reveal border-t border-white/10">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = open === i;
              const panelId = `faq-panel-${i}`;
              return (
                <div key={item.question} className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="group flex w-full items-start gap-5 py-7 text-left"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                  >
                    <span className="mt-1.5 font-mono text-[11px] text-stone-600">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`flex-1 font-display text-lg font-medium tracking-tight transition-colors sm:text-xl ${
                        isOpen ? 'text-paper' : 'text-stone-300 group-hover:text-paper'
                      }`}
                    >
                      {item.question}
                    </span>
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? 'rotate-45 border-rec-500 bg-rec-500 text-white'
                          : 'border-white/15 text-stone-300 group-hover:border-white/40'
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <div
                    id={panelId}
                    className={`grid transition-all duration-300 ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-7 pl-10 pr-14 text-[15px] leading-relaxed text-stone-400 sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
