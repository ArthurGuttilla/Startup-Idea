const base = import.meta.env.BASE_URL;

export default function MarkdownPrd() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">4 · MVP com IA</span></header>
      <h1>Revise o PRD antes de construir</h1>
      <div className="prd-layout">
        <pre className="prd-doc"><span className="md-h"># Problema</span>{'\n'}Quem quer pedir comida não sabe quais restaurantes entregam{'\n\n'}<span className="md-h"># Para quem</span>{'\n'}Moradores do bairro que pedem comida em casa{'\n\n'}<span className="md-h"># Precisa ter (nesta ordem)</span>{'\n'}<span className="md-h">-</span> Lista de restaurantes com cardápio{'\n'}<span className="md-h">-</span> Escolher pratos e ver o total{'\n'}<span className="md-h">-</span> Enviar o pedido com o endereço{'\n\n'}<span className="md-h"># Fora do escopo</span>{'\n'}App, pagamento online e entregadores{'\n\n'}<span className="md-h"># Aparência</span>{'\n'}Como um guia impresso de cardápios, direto e legível</pre>
        <div className="prd-notes">
          <p><strong>A ordem é a prioridade:</strong> a IA constrói de cima para baixo</p>
          <p><strong>Diga o que fica de fora</strong> para a IA não inventar funcionalidades</p>
          <p><strong>Se você não decide o visual, a IA decide</strong>, e escolhe sempre o mesmo</p>
        </div>
      </div>
    </div>
  );
}
