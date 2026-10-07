import type { ReactNode } from 'react';

type Props = {
  scene: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

/** Cabeçalho de seção no formato de claquete: "● CENA 01 / SOLUÇÕES". */
export default function SectionHeading({
  scene,
  label,
  title,
  intro,
  align = 'left',
  className = '',
}: Props) {
  const centered = align === 'center';
  return (
    <div className={`reveal ${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      <span className="eyebrow">
        <span className="eyebrow-dot" />
        Cena {scene}
        <span className="text-stone-600">/</span>
        {label}
      </span>
      <h2 className="heading-lg mt-5 text-balance">{title}</h2>
      {intro && <p className={`body-lg mt-5 ${centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>{intro}</p>}
    </div>
  );
}
