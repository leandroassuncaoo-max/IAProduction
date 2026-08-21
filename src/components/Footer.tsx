import { Sparkles, MessageCircle, Mail } from 'lucide-react';
import { NAV_LINKS, SITE, whatsappLink } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950">
      <div className="container-px py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#inicio"
              className="flex items-center gap-2 font-display text-xl font-extrabold text-white"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-electric-500 to-violet-600 text-white">
                <Sparkles className="h-5 w-5" />
              </span>
              {SITE.brand}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              {SITE.slogan}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-success-500/40 hover:text-white"
              >
                <MessageCircle className="h-4 w-4 text-success-400" />
                WhatsApp
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-electric-500/40 hover:text-white"
              >
                <Mail className="h-4 w-4 text-electric-300" />
                E-mail
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              Navegação
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
              Contato
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Falar no WhatsApp
                </a>
              </li>
              <li>Atendimento em horário comercial</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {SITE.brand}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-slate-500">
            Produção de vídeos com Inteligência Artificial.
          </p>
        </div>
      </div>
    </footer>
  );
}
