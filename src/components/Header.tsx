import { useEffect, useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { NAV_LINKS, whatsappProposalLink, SITE } from '@/lib/constants';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-ink-950/80 backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-px flex h-16 items-center justify-between lg:h-20">
        <a
          href="#inicio"
          className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight text-white"
          aria-label={`${SITE.brand} — início`}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-electric-500 to-violet-600 text-white shadow-[0_0_24px_-6px_rgba(51,102,255,0.7)]">
            <Sparkles className="h-5 w-5" />
          </span>
          {SITE.brand}
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Menu principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href={whatsappProposalLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Solicitar proposta
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden border-t border-white/10 bg-ink-950/95 backdrop-blur-lg transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-px flex flex-col gap-1 py-4" aria-label="Menu mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappProposalLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2 w-full"
          >
            Solicitar proposta
          </a>
        </nav>
      </div>
    </header>
  );
}
