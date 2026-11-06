const base = import.meta.env.BASE_URL;
export default function Slide6() { return (
<div className="w-screen h-screen overflow-hidden relative deck-slide flow-slide">
<header><img src={`${base}brand/logo.svg`} crossOrigin="anonymous" alt="Replit" /></header>
<h1>Viva no futuro. Perceba o que falta.</h1><div className="content flow"><div className="step"><span className="step-number">1</span><p className="">Use tecnologias novas em atividades reais</p></div><div className="step"><span className="step-number">2</span><p className="">Observe o que continua manual, lento ou frustrante</p></div><div className="step"><span className="step-number">3</span><p className="">Cruze o que você conhece com outro domínio</p></div></div><div className="footnote source-note">Base: Paul Graham</div>
</div>
); }
