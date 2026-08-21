import { useState, type FormEvent } from 'react';
import { Loader2, CheckCircle2, AlertCircle, MessageCircle, Mail } from 'lucide-react';
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
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-60" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-violet-600/15 blur-[120px]" />

      <div className="container-px relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* Left: copy + WhatsApp */}
          <div className="reveal">
            <span className="eyebrow">Contato</span>
            <h2 className="heading-lg mt-4">Solicite seu diagnóstico gratuito</h2>
            <p className="body-lg mt-4">
              Conte sobre o seu projeto e receba uma proposta personalizada. Se
              preferir, fale com a gente agora mesmo pelo WhatsApp.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-800/60 p-5 transition-colors hover:border-success-500/40 hover:bg-ink-700/60"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-success-500/15 text-success-400">
                  <MessageCircle className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-display text-base font-bold text-white">WhatsApp</div>
                  <div className="text-sm text-slate-400">Resposta rápida em horário comercial</div>
                </div>
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-800/60 p-5 transition-colors hover:border-electric-500/40 hover:bg-ink-700/60"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-electric-500/15 text-electric-300">
                  <Mail className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-display text-base font-bold text-white">E-mail</div>
                  <div className="text-sm text-slate-400">{SITE.email}</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal card p-6 sm:p-8">
            {status === 'success' ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <CheckCircle2 className="h-14 w-14 text-success-400" />
                <h3 className="mt-4 font-display text-xl font-bold text-white">
                  Recebemos seu contato!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-slate-400">
                  Obrigado pelo interesse. Nossa equipe entrará em contato em breve
                  com seu diagnóstico e proposta personalizada.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="btn-secondary mt-6"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
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
                  <div className="flex items-start gap-2.5 rounded-xl border border-error-500/30 bg-error-500/10 p-3 text-sm text-error-400">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <button type="submit" disabled={status === 'loading'} className="btn-primary w-full disabled:opacity-70">
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Solicitar diagnóstico'
                  )}
                </button>
                <p className="text-center text-xs text-slate-500">
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
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-slate-300">
        {label}
      </label>
      {children}
    </div>
  );
}
