import { FlowTrail } from '@/widgets/FlowTrail';

const base = import.meta.env.BASE_URL;

export default function Slide16() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide prompt-slide">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><FlowTrail current="Prompt" /></header>
      <h1>Transforme o PRD em um prompt para a Replit</h1>
      <div className="content prompt-block prompt-prd">
        <span className="compare-label">Prompt</span>
        <p>Construa um protótipo web seguindo este PRD.</p>
        <p><strong>Para quem:</strong> moradores do bairro que pedem comida em casa.<br /><strong>Problema:</strong> não sabem quais restaurantes entregam nem como pedir.<br /><strong>Precisa ter, nesta ordem:</strong> lista de restaurantes com cardápio; escolher pratos e ver o total; enviar o pedido com nome e endereço.<br /><strong>Fora do escopo:</strong> app, pagamento online e entregadores. Use restaurantes fictícios.<br /><strong>Como saber se funcionou:</strong> a pessoa pede em menos tempo do que por telefone.</p>
        <p>Antes de construir, mostre o plano e espere minha aprovação.</p>
      </div>
      <div className="footnote source-note">Cole no Agent da Replit: cada parte do PRD vira uma linha do prompt</div>
    </div>
  );
}
