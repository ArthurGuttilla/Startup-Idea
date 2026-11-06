const base = import.meta.env.BASE_URL;
export default function Slide16() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide prompt-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<h1>Dê contexto à IA, não apenas uma ordem</h1><div className="content prompt"><p className="">“Crie um protótipo para freelancers transformarem um briefing em rascunho de proposta.”</p><p className="">“Permita colar o texto, gerar as seções e revisar o resultado.”</p><p className="">“Não invente preço, prazo ou requisitos ausentes; sinalize o que falta.”</p><p className="">“Use dados fictícios e não envie nada automaticamente.”</p></div><div className="footnote">Demonstração proposta na Replit</div>
</div>
); }
