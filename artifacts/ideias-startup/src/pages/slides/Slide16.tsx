const base = import.meta.env.BASE_URL;
export default function Slide16() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide prompt-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">4 · MVP com IA</span></header>
<h1>Dê contexto à IA, não apenas uma ordem</h1><div className="content prompt-block"><span className="compare-label">Prompt</span><p>Crie um protótipo de página para pedir comida de restaurantes do bairro. Mostre os cardápios, permita escolher pratos e enviar o pedido com nome, endereço e telefone. Mostre um resumo antes de confirmar e explique o que acontece depois. Use restaurantes fictícios e não processe pagamento. Antes de construir, escreva um PRD em Markdown com o problema, o público, o que precisa ter, o que fica de fora e a aparência.</p></div><div className="footnote">Demonstração proposta na Replit</div>
</div>
); }
