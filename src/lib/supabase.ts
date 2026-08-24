import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

/**
 * Sem as variáveis de ambiente o `createClient` lança, e a exceção subiria
 * ainda no import — derrubando a página inteira antes do React montar.
 * Como o Supabase atende apenas ao formulário de contato, aqui o cliente
 * fica nulo e a falha se limita ao envio do formulário.
 */
export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl as string, supabaseAnonKey as string)
  : null;

if (!isSupabaseConfigured) {
  console.warn(
    '[NexoraLab AI] VITE_SUPABASE_URL e/ou VITE_SUPABASE_ANON_KEY ausentes no build. ' +
      'O formulário de contato ficará indisponível; o restante do site funciona normalmente.'
  );
}

export type Lead = {
  id?: string;
  name: string;
  email: string;
  phone?: string | null;
  company?: string | null;
  service?: string | null;
  message?: string | null;
  source?: string;
  created_at?: string;
};
