const base = import.meta.env.BASE_URL;

export default function MarkdownPrd() {
  return (
    <div className="w-screen h-screen overflow-hidden relative deck-slide">
      <header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">4 · MVP com IA</span></header>
      <h1>Peça um PRD em Markdown</h1>
      <div className="prd-layout">
        <pre className="prd-doc"><span className="md-h"># Problema</span>{'\n'}Clientes dependem da central para resolver o básico do cartão{'\n\n'}<span className="md-h"># Para quem</span>{'\n'}Clientes que se irritam com a burocracia do cartão{'\n\n'}<span className="md-h"># Precisa ter (nesta ordem)</span>{'\n'}<span className="md-h">-</span> Ver compras recentes{'\n'}<span className="md-h">-</span> Bloquear o cartão, com confirmação{'\n'}<span className="md-h">-</span> Ajustar o limite{'\n\n'}<span className="md-h"># Fora do escopo</span>{'\n'}Emissão real, análise de crédito e cobrança{'\n\n'}<span className="md-h"># Aparência</span>{'\n'}Simples como um extrato de papel, sem enfeite</pre>
        <div className="prd-notes">
          <p><strong>A ordem é a prioridade:</strong> a IA constrói de cima para baixo</p>
          <p><strong>Diga o que fica de fora</strong> para a IA não inventar funcionalidades</p>
          <p><strong>Se você não decide o visual, a IA decide</strong>, e escolhe sempre o mesmo</p>
        </div>
      </div>
    </div>
  );
}
