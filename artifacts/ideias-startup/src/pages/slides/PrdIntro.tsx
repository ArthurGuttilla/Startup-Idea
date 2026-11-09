import { FlowTrail } from '@/widgets/FlowTrail';

const base = import.meta.env.BASE_URL;

const parts = ['Para quem', 'Problema', 'Precisa ter', 'Fora do escopo', 'Como saber se funcionou'];

export default function PrdIntro() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide slide-prd-intro">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><FlowTrail current="PRD" /></header>
      <h1>O que é um PRD</h1>
      <p className="prd-lead">O <strong>documento de requisitos do produto</strong> descreve o que vai ser construído, para quem e por quê, antes de qualquer linha de código.</p>
      <div className="prd-parts">
        {parts.map((p, i) => (
          <div key={p}><span className="prd-part-n">{i + 1}</span><p>{p}</p></div>
        ))}
      </div>
      <div className="lp-why"><span className="compare-label">Por que importa</span><p>Ele organiza o seu pensamento e vira a base do prompt</p></div>
    </div>
  );
}
