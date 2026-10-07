import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, whatsappProposalLink, SITE } from '@/lib/constants';
import Logo from '@/components/Logo';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('#inicio');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Destaca no menu a seção que está no meio da tela.
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const sections = NAV_LINKS.map((l) => document.querySelector<HTMLElement>(l.href)).filter(
      (el): el is HTMLElement => el !== null
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto flex h-14 max-w-7xl items-center justify-between rounded-full pl-4 pr-2 transition-all duration-500 sm:h-16 sm:pl-5 ${
          scrolled || open
            ? 'border border-white/10 bg-ink-900/75 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl'
            : 'border border-transparent'
        }`}
      >
        <a href="#inicio" aria-label={`${SITE.brand} — início`} onClick={() => setOpen(false)}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Menu principal">
          {NAV_LINKS.filter((l) => l.href !== '#inicio').map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'true' : undefined}
                className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${
                  isActive ? 'text-paper' : 'text-stone-400 hover:text-paper'
                }`}
              >
                {isActive && (
                  <span className="absolute left-1/2 top-0.5 h-1 w-1 -translate-x-1/2 rounded-full bg-rec-500" />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappProposalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-light hidden px-5 py-2.5 sm:inline-flex"
          >
            Solicitar proposta
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-paper lg:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="menu-mobile"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="menu-mobile"
        className={`mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-ink-900/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? 'max-h-[560px] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col p-3" aria-label="Menu mobile">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4 rounded-2xl px-4 py-3 text-lg font-medium text-paper transition-colors hover:bg-white/5"
            >
              <span className="font-mono text-[11px] text-stone-500">
                {String(i + 1).padStart(2, '0')}
              </span>
              {link.label}
            </a>
          ))}
          <a
            href={whatsappProposalLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-primary mt-2"
          >
            Solicitar proposta
          </a>
        </nav>
      </div>
    </header>
  );
}
