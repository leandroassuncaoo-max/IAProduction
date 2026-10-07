import { useState, type FormEvent } from 'react';
import { Loader2, CheckCircle2, AlertCircle, MessageCircle, Mail, ArrowUpRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { whatsappLink, SITE, SERVICES } from '@/lib/constants';

type Status = 'idle' | 'loading' | 'success' | 'error';

const SERVICE_OPTIONS = SERVICES.map((s) => s.title);

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const company = String(data.get('company') || '').trim();
    const service = String(data.get('service') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!name || !email) {
      setStatus('error');
      setErrorMsg('Por favor, preencha pelo menos nome e e-mail.');
      return;
    }

    if (!supabase) {
      setStatus('error');
      setErrorMsg('O formulário está temporariamente indisponível. Fale com a gente pelo WhatsApp ou por e-mail.');
      return;
    }

    const { error } = await supabase.from('leads').insert({
      name,
      email,
      phone: phone || null,
      company: company || null,
      service: service || null,
      message: message || null,
      source: 'website',
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Não foi possível enviar agora. Tente novamente em instantes ou fale com a gente no WhatsApp.');
      return;
    }

    setStatus('success');
    form.reset();
  }

  return (
    <section id="contato" className="section-py relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 top-48 h-[560px] w-[560px] rounded-full bg-rec-500/[0.12] blur-[140px]" />

      <div className="container-px relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Esquerda: chamada + canais diretos */}
          <div className="reveal flex flex-col">
            <span className="eyebrow">
              <span className="eyebrow-dot animate-blink" />
              Cena 07
              <span className="text-stone-600">/</span>
              Contato
            </span>
            <h2 className="heading-xl mt-6 text-balance">
              Pronto para o <span className="accent-serif text-rec-400">primeiro take?</span>
            </h2>
            <p className="body-lg mt-6 max-w-lg">
              Solicite seu diagnóstico gratuito: conte sobre o seu projeto e receba uma proposta
              personalizada. Se preferir, fale com a gente agora mesmo pelo WhatsApp.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-auto lg:pt-12">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 p-5 transition-colors hover:border-success-500/40 hover:bg-white/[0.03]"
              >
                <span className="flex items-center gap-3.5">
                  <MessageCircle className="h-5 w-5 shrink-0 text-success-400" />
                  <span>
                    <span className="block font-semibold text-paper">WhatsApp</span>
                    <span className="block text-xs text-stone-500">Resposta rápida em horário comercial</span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-stone-500 transition-colors group-hover:text-paper" />
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 p-5 transition-colors hover:border-rec-500/40 hover:bg-white/[0.03]"
              >
                <span className="flex min-w-0 items-center gap-3.5">
                  <Mail className="h-5 w-5 shrink-0 text-rec-400" />
                  <span className="min-w-0">
                    <span className="block font-semibold text-paper">E-mail</span>
                    <span className="block truncate text-xs text-stone-500">{SITE.email}</span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-stone-500 transition-colors group-hover:text-paper" />
              </a>
            </div>
          </div>

          {/* Direita: formulário */}
          <div className="reveal rounded-3xl border border-white/10 bg-ink-900 p-6 sm:p-10">
            {status === 'success' ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="h-14 w-14 text-success-400" />
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-paper">
                  Recebemos seu contato!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-stone-400">
                  Obrigado pelo interesse. Nossa equipe entrará em contato em breve
                  com seu diagnóstico e proposta personalizada.
                </p>
                <button type="button" onClick={() => setStatus('idle')} className="btn-secondary mt-6">
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-2 flex items-center justify-between border-b border-white/[0.08] pb-5">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-paper">
                    Diagnóstico gratuito
                  </h3>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-stone-500">~2 min</span>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nome*" htmlFor="name">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      className="form-input"
                      placeholder="Seu nome"
                    />
                  </Field>
                  <Field label="E-mail*" htmlFor="email">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="form-input"
                      placeholder="voce@empresa.com"
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Telefone / WhatsApp" htmlFor="phone">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="form-input"
                      placeholder="(11) 99999-9999"
                    />
                  </Field>
                  <Field label="Empresa" htmlFor="company">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className="form-input"
                      placeholder="Nome da empresa"
                    />
                  </Field>
                </div>

                <Field label="Solução de interesse" htmlFor="service">
                  <select id="service" name="service" className="form-input" defaultValue="">
                    <option value="" disabled>
                      Selecione uma opção
                    </option>
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-ink-800">
                        {opt}
                      </option>
                    ))}
                    <option value="Outro" className="bg-ink-800">
                      Outro / não sei ainda
                    </option>
                  </select>
                </Field>

                <Field label="Mensagem" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="form-input resize-none"
                    placeholder="Conte um pouco sobre o seu projeto ou objetivo..."
                  />
                </Field>

                {status === 'error' && (
                  <div
                    role="alert"
                    className="flex items-start gap-2.5 rounded-xl border border-error-500/30 bg-error-500/10 p-3 text-sm text-error-400"
                  >
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary w-full py-4 disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Solicitar diagnóstico
                      <ArrowUpRight className="h-4 w-4" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-stone-500">
                  Resposta em até 1 dia útil. Seus dados estão seguros e não serão compartilhados.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block font-mono text-[11px] uppercase tracking-wider text-stone-400"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
