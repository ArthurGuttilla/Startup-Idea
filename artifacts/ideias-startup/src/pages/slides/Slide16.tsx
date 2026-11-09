import { FlowTrail } from '@/widgets/FlowTrail';

const base = import.meta.env.BASE_URL;

const prd: [string, string][] = [
  ['Para quem', 'Moradores do bairro que pedem comida em casa'],
  ['Problema', 'Não sabem quais restaurantes entregam nem como pedir'],
  ['Precisa ter, nesta ordem', '1. Lista de restaurantes com cardápio · 2. Escolher pratos e ver o total · 3. Pagar com cartão, via Stripe, e enviar o pedido'],
  ['Fora do escopo', 'Conectar entregadores'],
  ['Como saber se funcionou', 'A pessoa pede em menos tempo do que por telefone'],
];

export default function Slide16() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide prompt-slide">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><FlowTrail current="Prompt" /></header>
      <h1>Transforme o PRD em um prompt</h1>
      <div className="prompt-chat">
        <div className="prompt-block prompt-msg">
          <span className="compare-label">Prompt</span>
          <p>Construa um protótipo web do MVP descrito no PRD abaixo. Siga o PRD à risca:</p>
          <p>– Construa os itens de <strong>Precisa ter</strong> na ordem em que aparecem<br />– Não adicione nada de <strong>Fora do escopo</strong><br />– Use restaurantes fictícios<br />– No final, diga como testar o <strong>Como saber se funcionou</strong></p>
          <p>Antes de construir, mostre o plano e espere minha aprovação.</p>
        </div>
        <div className="prd-paste">
          <span className="prd-paste-tag">PRD colado no chat</span>
          {prd.map(([h, t]) => (
            <div key={h}><span className="prd-h">{h}</span><p>{t}</p></div>
          ))}
        </div>
      </div>
      <div className="footnote source-note">Cole as instruções e o PRD na mesma mensagem para o Agent do Replit</div>
    </div>
  );
}
