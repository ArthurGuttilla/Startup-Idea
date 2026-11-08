const base = import.meta.env.BASE_URL;
export default function Slide12() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide formula-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /><span className="section-label">3 · Hipótese</span></header>
<h1>Antes do MVP, escreva a hipótese</h1><div className="content formula"><p className="">Para <strong>[público]</strong>, quando <strong>[situação]</strong>, existe <strong>[problema]</strong></p><p className="">Hoje, a pessoa usa <strong>[alternativa]</strong></p><p className="">Vamos testar se <strong>[solução mínima]</strong> melhora <strong>[resultado]</strong></p><p className="">O teste precisa permitir descobrir que estamos errados</p></div><div className="footnote">Aplicação prática</div>
</div>
); }
