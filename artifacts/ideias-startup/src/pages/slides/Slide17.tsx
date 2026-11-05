const base = import.meta.env.BASE_URL;
export default function Slide17() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide flow-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<h1>Construa o menor fluxo completo</h1><div className="content flow"><div className="step"><span className="step-number">1</span><p className="">Cole um briefing fictício</p></div><div className="step"><span className="step-number">2</span><p className="">Gere um rascunho estruturado</p></div><div className="step"><span className="step-number">3</span><p className="">Revise as informações antes de copiar</p></div><div className="step"><span className="step-number">4</span><p className="">Observe o resultado, não apenas a aparência</p></div></div><div className="footnote">Demonstração ao vivo · 5 min</div>
</div>
); }
