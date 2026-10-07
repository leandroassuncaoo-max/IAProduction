export const SITE = {
  brand: 'Takeia',
  slogan: 'Vídeos inteligentes para comunicar, treinar e vender.',
  // Número de WhatsApp no formato internacional, sem + ou espaços.
  whatsappNumber: '5547988695218',
  whatsappMessage:
    'Olá! Vim pelo site da Takeia e gostaria de solicitar uma proposta para produção de vídeos com IA.',
  email: 'contato@nexoralab.ai',
};

export const whatsappLink = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  SITE.whatsappMessage
)}`;

export const whatsappProposalLink = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  'Olá! Gostaria de solicitar um diagnóstico e proposta personalizada da Takeia.'
)}`;

export const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Planos', href: '#planos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
] as const;

export const SERVICES = [
  {
    icon: 'Instagram',
    title: 'Redes Sociais',
    description:
      'Vídeos verticais para Instagram, TikTok, Facebook e YouTube Shorts — com legendas, ganchos e adaptação para cada canal.',
  },
  {
    icon: 'Linkedin',
    title: 'LinkedIn & Posicionamento',
    description:
      'Conteúdo profissional que fortalece a autoridade de especialistas, consultores e executivos no LinkedIn.',
  },
  {
    icon: 'GraduationCap',
    title: 'Treinamentos Corporativos',
    description:
      'Onboarding, capacitação e comunicação interna recorrente com avatares de IA e narração consistente.',
  },
  {
    icon: 'Presentation',
    title: 'Institucional & Campanhas',
    description:
      'Apresentações, lançamentos e campanhas com motion graphics e narrativa estratégica orientada a resultados.',
  },
  {
    icon: 'Bot',
    title: 'Avatares & Narração com IA',
    description:
      'Avatares digitais realistas e vozes geradas por IA em português, com legendas automáticas e identidade visual.',
  },
  {
    icon: 'Repeat',
    title: 'Produção Recorrente',
    description:
      'Calendário de conteúdo contínuo com agilidade, qualidade e custo operacional menor do que produções tradicionais.',
  },
] as const;

export const STEPS = [
  {
    number: '01',
    title: 'Diagnóstico & Estratégia',
    description:
      'Entendemos seus objetivos, público e canais. Definimos formatos, tom e frequência ideais para o seu negócio.',
  },
  {
    number: '02',
    title: 'Roteiro & Direção',
    description:
      'Criamos roteiros estratégicos com ganchos, narrativa e chamadas para ação pensadas para converter.',
  },
  {
    number: '03',
    title: 'Produção com IA',
    description:
      'Geramos avatares, narração, legendas e motion graphics com IA — revisados por especialistas em cada etapa.',
  },
  {
    number: '04',
    title: 'Entrega & Adaptação',
    description:
      'Entregamos os vídeos nos formatos certos para cada canal, prontos para publicar, com ciclos ágeis de revisão.',
  },
] as const;

export const PORTFOLIO_ITEMS = [
  {
    title: 'Lançamento de Produto',
    category: 'Institucional',
    description: 'Vídeo de lançamento com motion graphics e avatar institucional.',
  },
  {
    title: 'Onboarding de Equipe',
    category: 'Treinamento',
    description: 'Série de onboarding com narração por IA e legendas em português.',
  },
  {
    title: 'Conteúdo para LinkedIn',
    category: 'Posicionamento',
    description: 'Vídeos verticais de posicionamento profissional recorrente.',
  },
  {
    title: 'Campanha de Instagram',
    category: 'Redes Sociais',
    description: 'Conjunto de Reels com ganchos e legendas automáticas.',
  },
  {
    title: 'Comunicação Interna',
    category: 'Corporativo',
    description: 'Mensagens executivas com avatares digitais consistentes.',
  },
  {
    title: 'YouTube Shorts',
    category: 'Redes Sociais',
    description: 'Série vertical de Shorts com adaptação de formato e narração.',
  },
] as const;

export const PLANS = [
  {
    name: 'Start',
    price: 'Sob consulta',
    highlight: false,
    description: 'Ideal para começar com conteúdo estratégico de IA.',
    features: [
      '1 vídeo piloto',
      'Roteiro estratégico',
      'Avatar de IA + narração',
      'Legendas automáticas',
      '1 formato de entrega',
    ],
    cta: 'Solicitar piloto',
  },
  {
    name: 'Pro',
    price: 'Sob consulta',
    highlight: true,
    description: 'Para empresas que precisam de conteúdo recorrente.',
    features: [
      'Pacote mensal de vídeos',
      'Múltiplos formatos por canal',
      'Avatares + motion graphics',
      'Calendário de conteúdo',
      'Revisões inclusas',
      'Suporte estratégico',
    ],
    cta: 'Solicitar proposta',
  },
  {
    name: 'Enterprise',
    price: 'Sob consulta',
    highlight: false,
    description: 'Solução completa para redes e grandes operações.',
    features: [
      'Produção em escala',
      'Multi-unidades / franquias',
      'Identidade visual dedicada',
      'Gestão de conta dedicada',
      'Integração com seu time',
    ],
    cta: 'Falar com especialista',
  },
] as const;

export const STATS = [
  { value: '+200', label: 'Vídeos entregues' },
  { value: '48h', label: 'Entrega ágil' },
  { value: '5x', label: 'Mais rápido que produção tradicional' },
  { value: '100%', label: 'Orientado a resultados' },
] as const;

export const FAQ_ITEMS = [
  {
    question: 'O que é um vídeo piloto?',
    answer:
      'É um primeiro vídeo produzido com IA para validar o formato, o tom e a identidade visual antes de contratar um pacote recorrente. Ideal para testar a qualidade da Takeia com baixo risco.',
  },
  {
    question: 'Os avatares e narrações são em português?',
    answer:
      'Sim. Trabalhamos com avatares digitais e vozes geradas por IA em português do Brasil, com naturalidade e identidade adequada ao seu público.',
  },
  {
    question: 'Quanto tempo leva para produzir um vídeo?',
    answer:
      'Após a aprovação do roteiro, a produção com IA é ágil — normalmente entre 48 e 72 horas para vídeos individuais, dependendo da complexidade e das revisões.',
  },
  {
    question: 'Vocês adaptam os vídeos para diferentes canais?',
    answer:
      'Sim. Adaptamos formato, proporção, legendas e ganchos para Instagram, TikTok, Facebook, YouTube Shorts e LinkedIn a partir de uma mesma base de conteúdo.',
  },
  {
    question: 'Como funciona o orçamento?',
    answer:
      'O orçamento é personalizado conforme volume, formatos e frequência. Solicite uma proposta pelo formulário ou WhatsApp e receba um diagnóstico gratuito.',
  },
] as const;
