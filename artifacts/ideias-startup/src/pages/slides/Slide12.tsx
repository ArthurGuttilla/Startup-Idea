const base = import.meta.env.BASE_URL;
export default function Slide12() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide formula-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<h1>Antes do MVP, escreva a hipótese</h1><div className="content formula"><p className="">Para [público], quando [situação], existe [problema]</p><p className="">Hoje, a pessoa usa [alternativa]</p><p className="">Vamos testar se [solução mínima] melhora [resultado]</p><p className="">O teste precisa permitir descobrir que estamos errados</p></div><div className="footnote">Aplicação prática</div>
</div>
); }
