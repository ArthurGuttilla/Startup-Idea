const base = import.meta.env.BASE_URL;
export default function Slide16() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide prompt-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<h1>Dê contexto à IA, não apenas uma ordem</h1><div className="content prompt"><p className="">“Crie um protótipo de app para clientes controlarem o próprio cartão de crédito.”</p><p className="">“Permita ver as compras recentes, bloquear o cartão e ajustar o limite.”</p><p className="">“Peça confirmação antes de ações sensíveis e explique o que aconteceu.”</p><p className="">“Use dados fictícios e não conecte a nenhum sistema bancário real.”</p></div><div className="footnote">Demonstração proposta na Replit</div>
</div>
); }
