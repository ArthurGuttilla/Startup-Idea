import { FlowTrail } from '@/widgets/FlowTrail';

const base = import.meta.env.BASE_URL;

export default function MarkdownPrd() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><FlowTrail current="PRD" /></header>
      <h1 className="title-with-logo">Construindo o PRD do caso, juntos<img className="title-logo" src={`${base}images/logos/ifood.svg`} crossOrigin="anonymous" alt="iFood" /></h1>
      <div className="prd-layout">
        <div className="prd-sheet">
          <div><span className="prd-h">Para quem</span><p>Moradores do bairro que pedem comida em casa</p></div>
          <div><span className="prd-h">Problema</span><p>Não sabem quais restaurantes entregam nem como pedir</p></div>
          <div><span className="prd-h">Precisa ter, nesta ordem</span><p>1. Lista de restaurantes com cardápio<br />2. Escolher pratos e ver o total<br />3. Enviar o pedido com nome e endereço</p></div>
          <div><span className="prd-h">Fora do escopo</span><p>App, pagamento online e entregadores</p></div>
          <div><span className="prd-h">Como saber se funcionou</span><p>A pessoa pede em menos tempo do que por telefone</p></div>
        </div>
        <div className="prd-notes">
          <p><strong>A ordem é a prioridade:</strong> a IA constrói de cima para baixo</p>
          <p><strong>Diga o que fica de fora</strong> para a IA não inventar funcionalidades</p>
          <p><strong>Defina como medir</strong> antes de construir: é o que você vai observar na validação</p>
        </div>
      </div>
    </div>
  );
}
