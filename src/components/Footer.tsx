import { ArrowUp } from 'lucide-react';
import { NAV_LINKS, SITE, whatsappLink } from '@/lib/constants';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-ink-950">
      <div className="container-px pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_auto]">
          <div className="max-w-sm">
            <a href="#inicio" aria-label={`${SITE.brand} — início`}>
              <Logo />
            </a>
            <p className="mt-5 text-[15px] leading-relaxed text-stone-400">{SITE.slogan}</p>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-stone-500">Navegação</h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-stone-300 transition-colors hover:text-paper">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-stone-500">Contato</h3>
            <ul className="mt-5 space-y-3 text-sm text-stone-300">
              <li>
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-paper">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-paper">
                  Falar no WhatsApp
                </a>
              </li>
              <li className="text-stone-500">Atendimento em horário comercial</li>
            </ul>
          </div>

          <div>
            <a
              href="#inicio"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-paper transition-colors hover:border-rec-500 hover:bg-rec-500"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/[0.08] py-6 font-mono text-[11px] uppercase tracking-wider text-stone-500 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.brand}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-rec-500" />
            Produção de vídeos com Inteligência Artificial
          </p>
        </div>
      </div>

      {/* Wordmark gigante, cortado na base como o fim de um rolo de filme */}
      <div aria-hidden="true" className="pointer-events-none select-none overflow-hidden">
        <div className="-mb-[0.1em] text-center font-display text-[27vw] font-semibold leading-none tracking-[-0.06em] text-white/[0.04]">
          take<span className="text-rec-500/25">ia</span>
        </div>
      </div>
    </footer>
  );
}
