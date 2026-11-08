const base = import.meta.env.BASE_URL;
export default function Slide16() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide prompt-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">4 · MVP com IA</span></header>
<h1>Dê contexto à IA, não apenas uma ordem</h1><div className="content prompt-block"><span className="compare-label">Prompt</span><p>Crie um protótipo de app para clientes controlarem o próprio cartão de crédito. Permita ver as compras recentes, bloquear o cartão e ajustar o limite. Peça confirmação antes de ações sensíveis e explique o que aconteceu. Use dados fictícios e não conecte a nenhum sistema bancário real. Antes de construir, escreva um PRD em Markdown com o problema, o público, o que precisa ter, o que fica de fora e a aparência.</p></div><div className="footnote">Demonstração proposta na Replit</div>
</div>
); }
